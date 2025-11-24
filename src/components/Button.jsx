import React from 'react';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    isLoading,
    id,
    testId,
    ...props
}) => {
    const baseStyles = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '600',
        borderRadius: 'var(--radius-md)',
        transition: 'var(--transition)',
        gap: '0.5rem',
        position: 'relative',
        overflow: 'hidden',
    };

    const variants = {
        primary: {
            background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-dark)))',
            color: 'white',
            boxShadow: 'var(--shadow-glow)',
        },
        secondary: {
            background: 'hsla(var(--surface-hover), 1)',
            color: 'hsl(var(--text-main))',
            border: '1px solid hsla(255, 100%, 100%, 0.1)',
        },
        outline: {
            background: 'transparent',
            border: '1px solid hsl(var(--primary))',
            color: 'hsl(var(--primary))',
        },
        ghost: {
            background: 'transparent',
            color: 'hsl(var(--text-muted))',
        },
        white: {
            background: 'transparent',
            color: '#ffffff',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            fontWeight: '600',
        }
    };

    const sizes = {
        sm: { padding: '0.5rem 1rem', fontSize: '0.875rem' },
        md: { padding: '0.75rem 1.5rem', fontSize: '1rem' },
        lg: { padding: '1rem 2rem', fontSize: '1.125rem' },
    };

    const style = {
        ...baseStyles,
        ...variants[variant],
        ...sizes[size],
    };

    return (
        <button
            id={id}
            data-testid={testId || id}
            style={style}
            className={`btn-${variant} ${className}`}
            disabled={isLoading}
            {...props}
        >
            {isLoading ? (
                <span className="loader" style={{
                    width: '1em', height: '1em',
                    border: '2px solid currentColor',
                    borderBottomColor: 'transparent',
                    borderRadius: '50%',
                    display: 'inline-block',
                    animation: 'spin 1s linear infinite'
                }} />
            ) : children}
            <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        .btn-primary:hover { transform: translateY(-1px); filter: brightness(1.1); }
        .btn-primary:active { transform: translateY(0); }
        .btn-secondary:hover { background: hsla(var(--surface-hover), 0.8); }
        .btn-ghost:hover { color: hsl(var(--text-main)); background: hsla(255,100%,100%,0.05); }
        .btn-white:hover { 
            border-color: #ffffff; 
            box-shadow: 0 0 20px -5px rgba(255, 255, 255, 0.5); 
            text-decoration: underline;
            text-underline-offset: 4px;
        }
      `}</style>
        </button>
    );
};

export default Button;
