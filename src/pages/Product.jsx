import React from 'react';
import { Package, Shield, Zap, Globe } from 'lucide-react';

const Product = () => {
    return (
        <div className="container" style={{ padding: '2rem 0' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem', background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    The Ultimate Testing Playground
                </h1>
                <p style={{ fontSize: '1.25rem', color: 'hsl(var(--text-muted))', maxWidth: '800px', margin: '0 auto' }}>
                    TestDojo provides a comprehensive environment for mastering automation testing tools. From basic form interactions to complex e-commerce flows.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
                <FeatureCard
                    icon={Package}
                    title="All-in-One Platform"
                    description="Practice with every major element you'll encounter in real web applications: forms, modals, sliders, and more."
                />
                <FeatureCard
                    icon={Shield}
                    title="Framework Agnostic"
                    description="Perfect for Selenium, Cypress, Playwright, or any other automation tool you want to master."
                />
                <FeatureCard
                    icon={Zap}
                    title="Real-time Feedback"
                    description="Instant visual feedback for your actions helps you debug and refine your automation scripts faster."
                />
            </div>
        </div>
    );
};

const FeatureCard = ({ icon: Icon, title, description }) => (
    <div style={{
        padding: '2rem',
        background: 'hsl(var(--surface))',
        borderRadius: '1rem',
        border: '1px solid hsla(255, 100%, 100%, 0.1)',
        transition: 'transform 0.2s'
    }}>
        <div style={{
            width: '48px',
            height: '48px',
            background: 'hsla(var(--primary), 0.1)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'hsl(var(--primary))',
            marginBottom: '1.5rem'
        }}>
            <Icon size={24} />
        </div>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{title}</h3>
        <p style={{ color: 'hsl(var(--text-muted))', lineHeight: '1.6' }}>{description}</p>
    </div>
);

export default Product;
