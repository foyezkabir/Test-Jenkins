import React from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

const Input = ({
    label,
    error,
    success,
    icon: Icon,
    type = 'text',
    className = '',
    ...props
}) => {
    return (
        <div className={`input-group ${className}`} style={{ marginBottom: '1.5rem' }}>
            {label && <label>{label}</label>}
            <div style={{ position: 'relative' }}>
                {Icon && (
                    <Icon
                        size={20}
                        style={{
                            position: 'absolute',
                            left: '1rem',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            color: 'hsl(var(--text-muted))',
                            zIndex: 1
                        }}
                    />
                )}
                <input
                    type={type}
                    style={{
                        paddingLeft: Icon ? '3rem' : '1rem',
                        borderColor: error ? 'hsl(var(--error))' : success ? 'hsl(var(--success))' : undefined
                    }}
                    {...props}
                />
                {error && (
                    <AlertCircle
                        size={20}
                        color="hsl(var(--error))"
                        style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)' }}
                    />
                )}
                {success && !error && (
                    <CheckCircle2
                        size={20}
                        color="hsl(var(--success))"
                        style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)' }}
                    />
                )}
            </div>
            {error && (
                <span style={{
                    color: 'hsl(var(--error))',
                    fontSize: '0.75rem',
                    marginTop: '0.25rem',
                    display: 'block',
                    animation: 'fadeIn 0.2s ease'
                }}>
                    {error}
                </span>
            )}
        </div>
    );
};

export default Input;
