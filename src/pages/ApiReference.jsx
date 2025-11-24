import React from 'react';
import { Server, Database, Lock, Globe } from 'lucide-react';

const ApiReference = () => {
    return (
        <div className="container" style={{ padding: '2rem 0' }}>
            <div style={{ marginBottom: '4rem' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>API Reference</h1>
                <p style={{ fontSize: '1.125rem', color: 'hsl(var(--text-muted))' }}>
                    Documentation for the mock API endpoints used in this application.
                </p>
            </div>

            <div style={{ display: 'grid', gap: '2rem' }}>
                <Endpoint
                    method="POST"
                    path="/api/auth/login"
                    description="Authenticate a user and return a JWT token."
                    params={[
                        { name: "email", type: "string", required: true },
                        { name: "password", type: "string", required: true }
                    ]}
                />

                <Endpoint
                    method="GET"
                    path="/api/products"
                    description="Retrieve a list of all available products."
                    params={[
                        { name: "page", type: "number", required: false },
                        { name: "limit", type: "number", required: false }
                    ]}
                />

                <Endpoint
                    method="POST"
                    path="/api/products"
                    description="Create a new product (Requires Admin)."
                    params={[
                        { name: "name", type: "string", required: true },
                        { name: "price", type: "number", required: true },
                        { name: "description", type: "string", required: true }
                    ]}
                />

                <Endpoint
                    method="DELETE"
                    path="/api/products/:id"
                    description="Delete a product by ID (Requires Admin)."
                    params={[
                        { name: "id", type: "string", required: true, location: "path" }
                    ]}
                />
            </div>
        </div>
    );
};

const Endpoint = ({ method, path, description, params }) => {
    const getMethodColor = (m) => {
        switch (m) {
            case 'GET': return 'hsl(200, 90%, 60%)';
            case 'POST': return 'hsl(150, 90%, 40%)';
            case 'DELETE': return 'hsl(0, 90%, 60%)';
            case 'PUT': return 'hsl(40, 90%, 60%)';
            default: return 'hsl(var(--text-muted))';
        }
    };

    return (
        <div style={{
            background: 'hsl(var(--surface))',
            borderRadius: '1rem',
            border: '1px solid hsla(255, 100%, 100%, 0.1)',
            overflow: 'hidden'
        }}>
            <div style={{ padding: '1.5rem', borderBottom: '1px solid hsla(255, 100%, 100%, 0.1)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                    <span style={{
                        background: getMethodColor(method),
                        color: 'white',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '0.5rem',
                        fontWeight: '700',
                        fontSize: '0.875rem'
                    }}>
                        {method}
                    </span>
                    <code style={{ fontSize: '1.1rem', color: 'hsl(var(--text))' }}>{path}</code>
                </div>
                <p style={{ color: 'hsl(var(--text-muted))', margin: 0 }}>{description}</p>
            </div>

            {params && params.length > 0 && (
                <div style={{ padding: '1.5rem', background: 'hsla(0, 0%, 0%, 0.2)' }}>
                    <h4 style={{ marginBottom: '1rem', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'hsl(var(--text-muted))' }}>Parameters</h4>
                    <div style={{ display: 'grid', gap: '0.75rem' }}>
                        {params.map((param, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', fontSize: '0.9rem' }}>
                                <code style={{ color: 'hsl(var(--primary))', fontWeight: 'bold' }}>{param.name}</code>
                                <span style={{ color: 'hsl(var(--text-muted))', fontSize: '0.8rem' }}>{param.type}</span>
                                {param.required && <span style={{ color: 'hsl(var(--accent))', fontSize: '0.75rem', border: '1px solid hsl(var(--accent))', padding: '0 0.4rem', borderRadius: '1rem' }}>REQUIRED</span>}
                                {param.location && <span style={{ color: 'hsl(var(--text-muted))', fontStyle: 'italic' }}>({param.location})</span>}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ApiReference;
