import React, { useState, useEffect, createContext, useContext } from 'react';
import { X, CheckCircle, AlertTriangle, Info } from 'lucide-react';

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const addToast = (message, type = 'info', duration = 3000) => {
        const id = Date.now();
        setToasts(prev => [...prev, { id, message, type }]);
        setTimeout(() => removeToast(id), duration);
    };

    const removeToast = (id) => {
        setToasts(prev => prev.filter(t => t.id !== id));
    };

    return (
        <ToastContext.Provider value={{ addToast }}>
            {children}
            <div style={{
                position: 'fixed',
                bottom: '2rem',
                right: '2rem',
                zIndex: 9999,
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
            }}>
                {toasts.map(toast => (
                    <ToastItem key={toast.id} {...toast} onClose={() => removeToast(toast.id)} />
                ))}
            </div>
        </ToastContext.Provider>
    );
};

const ToastItem = ({ message, type, onClose }) => {
    const icons = {
        success: <CheckCircle size={20} color="hsl(var(--success))" />,
        error: <AlertTriangle size={20} color="hsl(var(--error))" />,
        info: <Info size={20} color="hsl(var(--primary))" />
    };

    return (
        <div className="animate-fade-in" style={{
            background: 'hsla(var(--surface), 0.9)',
            backdropFilter: 'blur(8px)',
            border: '1px solid hsla(255,100%,100%,0.1)',
            padding: '1rem 1.5rem',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-lg)',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            minWidth: '300px',
            borderLeft: `4px solid hsl(var(--${type === 'info' ? 'primary' : type}))`
        }}>
            {icons[type]}
            <p style={{ fontSize: '0.875rem', flex: 1 }}>{message}</p>
            <button onClick={onClose} style={{ color: 'hsl(var(--text-muted))' }}>
                <X size={16} />
            </button>
        </div>
    );
};
