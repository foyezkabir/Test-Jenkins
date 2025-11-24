import React from 'react';

const Radio = ({ label, name, checked, onChange, id }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <div style={{ position: 'relative', width: '20px', height: '20px' }}>
                <input
                    type="radio"
                    name={name}
                    id={id}
                    checked={checked}
                    onChange={onChange}
                    style={{
                        appearance: 'none',
                        width: '100%',
                        height: '100%',
                        background: 'hsla(var(--surface-hover), 0.5)',
                        border: `1px solid ${checked ? 'hsl(var(--primary))' : 'hsla(255, 100%, 100%, 0.1)'}`,
                        borderRadius: '50%',
                        cursor: 'pointer',
                        transition: 'var(--transition)',
                        margin: 0,
                        padding: 0
                    }}
                />
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: `translate(-50%, -50%) scale(${checked ? 1 : 0})`,
                    width: '10px',
                    height: '10px',
                    background: 'hsl(var(--primary))',
                    borderRadius: '50%',
                    transition: 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                    pointerEvents: 'none'
                }} />
            </div>
            <label htmlFor={id} style={{ margin: 0, cursor: 'pointer', color: 'hsl(var(--text-main))' }}>
                {label}
            </label>
        </div>
    );
};

export default Radio;
