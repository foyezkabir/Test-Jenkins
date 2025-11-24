import React from 'react';
import { GitCommit, Calendar } from 'lucide-react';

const Changelog = () => {
    return (
        <div className="container" style={{ padding: '2rem 0' }}>
            <div style={{ marginBottom: '4rem' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Changelog</h1>
                <p style={{ fontSize: '1.125rem', color: 'hsl(var(--text-muted))' }}>
                    Latest updates and improvements to the TestDojo platform.
                </p>
            </div>

            <div style={{ position: 'relative', paddingLeft: '2rem' }}>
                <div style={{
                    position: 'absolute',
                    left: '7px',
                    top: '0',
                    bottom: '0',
                    width: '2px',
                    background: 'hsla(255, 100%, 100%, 0.1)'
                }} />

                <Release
                    version="v1.2.0"
                    date="November 24, 2025"
                    type="major"
                    changes={[
                        "Added new Product, Features, Documentation, API Reference, and Changelog pages",
                        "Implemented full CRUD operations for Products",
                        "Enhanced UI with new color palette and modern design",
                        "Fixed visibility issues on Select and Button components"
                    ]}
                />

                <Release
                    version="v1.1.0"
                    date="November 21, 2025"
                    type="minor"
                    changes={[
                        "Integrated Jenkins for CI/CD pipeline",
                        "Added Login and Signup authentication flows",
                        "Implemented Form Elements showcase page",
                        "Fixed build failures in Shop component"
                    ]}
                />

                <Release
                    version="v1.0.0"
                    date="November 15, 2025"
                    type="initial"
                    changes={[
                        "Initial release of TestDojo",
                        "Basic Dashboard layout",
                        "Project structure setup with React and Vite"
                    ]}
                />
            </div>
        </div>
    );
};

const Release = ({ version, date, changes, type }) => {
    const getTypeColor = () => {
        switch (type) {
            case 'major': return 'hsl(var(--primary))';
            case 'minor': return 'hsl(var(--success))';
            default: return 'hsl(var(--text-muted))';
        }
    };

    return (
        <div style={{ marginBottom: '4rem', position: 'relative' }}>
            <div style={{
                position: 'absolute',
                left: '-2.45rem',
                top: '0.25rem',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: getTypeColor(),
                border: '4px solid hsl(var(--background))'
            }} />

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '1.5rem' }}>
                <h2 style={{ fontSize: '2rem', margin: 0 }}>{version}</h2>
                <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'hsl(var(--text-muted))',
                    fontSize: '0.9rem',
                    background: 'hsla(255, 100%, 100%, 0.05)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '1rem'
                }}>
                    <Calendar size={14} />
                    {date}
                </span>
            </div>

            <div style={{
                background: 'hsl(var(--surface))',
                padding: '2rem',
                borderRadius: '1rem',
                border: '1px solid hsla(255, 100%, 100%, 0.1)'
            }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {changes.map((change, i) => (
                        <li key={i} style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '1rem',
                            marginBottom: '0.75rem',
                            color: 'hsl(var(--text-muted))',
                            lineHeight: '1.6'
                        }}>
                            <GitCommit size={20} style={{ color: getTypeColor(), marginTop: '2px', flexShrink: 0 }} />
                            {change}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Changelog;
