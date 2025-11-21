import React from 'react';
import { ChevronDown } from 'lucide-react';

const Select = ({
    label,
    options = [],
    value,
    onChange,
    error,
    placeholder = 'Select an option',
    className = '',
    ...props
}) => {
    return (
        <div className={`input-group ${className}`} style={{ marginBottom: '1.5rem' }}>
            {label && <label>{label}</label>}
            <div style={{ position: 'relative' }}>
                <select
                    value={value}
                    onChange={onChange}
                    style={{
                        appearance: 'none',
                        cursor: 'pointer',
                        borderColor: error ? 'hsl(var(--error))' : undefined
                    }}
                    {...props}
                >
                    <option value="" disabled>{placeholder}</option>
                    {options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
                <ChevronDown
                    size={20}
                    style={{
                        position: 'absolute',
                        right: '1rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        pointerEvents: 'none',
                        color: 'hsl(var(--text-muted))'
                    }}
                />
            </div>
            {error && (
                <span style={{
                    color: 'hsl(var(--error))',
                    fontSize: '0.75rem',
                    marginTop: '0.25rem',
                    display: 'block'
                }}>
                    {error}
                </span>
            )}
        </div>
    );
};

export default Select;
