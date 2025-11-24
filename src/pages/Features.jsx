import React from 'react';
import { CheckCircle, Code, Layout, Database, Lock, MousePointer } from 'lucide-react';

const Features = () => {
    return (
        <div className="container" style={{ padding: '2rem 0' }}>
            <div style={{ marginBottom: '4rem' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Platform Features</h1>
                <p style={{ fontSize: '1.125rem', color: 'hsl(var(--text-muted))' }}>
                    Explore the capabilities designed to challenge and improve your automation skills.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                <FeatureSection
                    icon={Layout}
                    title="Complex Form Elements"
                    items={[
                        "Dynamic dropdowns and select menus",
                        "Interactive sliders and range inputs",
                        "Custom checkboxes and radio buttons",
                        "Form validation scenarios"
                    ]}
                />
                <FeatureSection
                    icon={Lock}
                    title="Authentication Flows"
                    items={[
                        "Login and Registration forms",
                        "Session management testing",
                        "Protected route handling",
                        "Error state verification"
                    ]}
                />
                <FeatureSection
                    icon={Database}
                    title="CRUD Operations"
                    items={[
                        "Create, Read, Update, Delete products",
                        "Modal interactions for data entry",
                        "Table data verification",
                        "State persistence testing"
                    ]}
                />
                <FeatureSection
                    icon={MousePointer}
                    title="Interactive UI"
                    items={[
                        "Hover states and tooltips",
                        "Drag and drop capabilities",
                        "Dynamic content loading",
                        "Toast notifications and alerts"
                    ]}
                />
            </div>
        </div>
    );
};

const FeatureSection = ({ icon: Icon, title, items }) => (
    <div style={{
        background: 'hsl(var(--surface))',
        padding: '2rem',
        borderRadius: '1rem',
        border: '1px solid hsla(255, 100%, 100%, 0.1)'
    }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <Icon size={28} style={{ color: 'hsl(var(--primary))' }} />
            <h2 style={{ fontSize: '1.5rem', margin: 0 }}>{title}</h2>
        </div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {items.map((item, index) => (
                <li key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '1rem',
                    color: 'hsl(var(--text-muted))'
                }}>
                    <CheckCircle size={16} style={{ color: 'hsl(var(--success))' }} />
                    {item}
                </li>
            ))}
        </ul>
    </div>
);

export default Features;
