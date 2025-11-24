import React from 'react';

const Slider = ({ label, value, onChange, min = 0, max = 100 }) => {
    const percentage = ((value - min) / (max - min)) * 100;

    return (
        <div style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <label style={{ margin: 0, color: 'hsl(var(--text-main))', fontWeight: 600 }}>{label}</label>
                <span style={{ color: 'hsl(var(--text-muted))', fontSize: '0.875rem' }}>{value}%</span>
            </div>

            <div style={{ position: 'relative', height: '24px', display: 'flex', alignItems: 'center' }}>
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={value}
                    onChange={onChange}
                    style={{
                        appearance: 'none',
                        width: '100%',
                        height: '6px',
                        background: 'hsla(var(--surface-hover), 0.5)',
                        borderRadius: '9999px',
                        outline: 'none',
                        cursor: 'pointer',
                        padding: 0,
                        border: 'none'
                    }}
                />
                <div style={{
                    position: 'absolute',
                    left: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    height: '6px',
                    width: `${percentage}%`,
                    background: 'hsl(var(--primary))',
                    borderRadius: '9999px',
                    pointerEvents: 'none'
                }} />
                <div style={{
                    position: 'absolute',
                    left: `${percentage}%`,
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '16px',
                    height: '16px',
                    background: 'white',
                    border: '2px solid hsl(var(--primary))',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }} />
            </div>
        </div>
    );
};

export default Slider;
