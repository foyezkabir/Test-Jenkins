import React from 'react';

const Checkbox = ({ label, checked, onChange, id }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <div style={{ position: 'relative', width: '20px', height: '20px' }}>
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
                        border: `1px solid ${checked ? 'hsl(var(--primary))' : 'hsla(255, 100%, 100%, 0.1)'}`,
                        borderRadius: '4px',
                        cursor: 'pointer',
                        transition: 'var(--transition)',
                        display: 'grid',
                        placeContent: 'center',
                        margin: 0,
                        padding: 0
                    }}
                />
                {checked && (
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '14px',
                            height: '14px',
                            pointerEvents: 'none'
                        }}
                    >
                        <polyline points="20 6 9 17 4 12" />
                    </svg>
                )}
            </div>
            <label htmlFor={id} style={{ margin: 0, cursor: 'pointer', color: 'hsl(var(--text-main))' }}>
                {label}
            </label>
        </div>
    );
};

export default Checkbox;
