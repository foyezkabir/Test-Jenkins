import React from 'react';
import { AlertTriangle } from 'lucide-react';
import Button from './Button';

const DeleteModal = ({ isOpen, onClose, onConfirm, itemName }) => {
    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
        }}>
            <div className="glass-panel" style={{ width: '100%', maxWidth: '400px', padding: '2rem', textAlign: 'center' }}>
                <div style={{
                    width: '60px',
                    height: '60px',
                    background: 'hsla(var(--error), 0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    color: 'hsl(var(--error))'
                }}>
                    <AlertTriangle size={32} />
                </div>

                <h3 style={{ marginBottom: '0.5rem' }}>Delete Product?</h3>
                <p style={{ color: 'hsl(var(--text-muted))', marginBottom: '2rem' }}>
                    Are you sure you want to delete <strong>{itemName}</strong>? This action cannot be undone.
                </p>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <Button variant="ghost" onClick={onClose}>Cancel</Button>
                    <Button
                        variant="primary"
                        onClick={onConfirm}
                        style={{ background: 'hsl(var(--error))', borderColor: 'hsl(var(--error))' }}
                    >
                        Delete
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;
