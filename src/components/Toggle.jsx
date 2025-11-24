import React from 'react';

const Toggle = ({ label, checked, onChange, id }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <label htmlFor={id} style={{ margin: 0, cursor: 'pointer', color: 'hsl(var(--text-main))', fontWeight: 500 }}>
                {label}
                <div style={{ fontSize: '0.875rem', color: 'hsl(var(--text-muted))', fontWeight: 400 }}>
                    Receive push notifications
                </div>
            </label>

            <div style={{ position: 'relative', width: '44px', height: '24px' }}>
                <input
                    type="checkbox"
                    id={id}
                    checked={checked}
                    onChange={onChange}
                    style={{
                        appearance: 'none',
                        width: '100%',
                        height: '100%',
                        background: checked ? 'hsl(var(--primary))' : 'hsla(var(--surface-hover), 0.5)',
                        border: '1px solid hsla(255, 100%, 100%, 0.1)',
                        borderRadius: '9999px',
                        cursor: 'pointer',
                        transition: 'var(--transition)',
                        margin: 0,
                        padding: 0
                    }}
                />
                <div style={{
                    position: 'absolute',
                    top: '2px',
                    left: '2px',
                    width: '20px',
                    height: '20px',
                    background: 'white',
                    borderRadius: '50%',
                    transform: checked ? 'translateX(20px)' : 'translateX(0)',
                    transition: 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                    pointerEvents: 'none',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.2)'
                }} />
            </div>
        </div>
    );
};

export default Toggle;
