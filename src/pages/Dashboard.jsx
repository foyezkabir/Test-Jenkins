import React from 'react';
import { Link } from 'react-router-dom';
import {
    Code,
    MousePointerClick,
    Database,
    ShoppingCart,
    ArrowRight,
    CheckCircle,
    Zap,
    Layers
} from 'lucide-react';
import Button from '../components/Button';
import Footer from '../components/Footer';
import heroCardImage from '../assets/hero-card.png';

const Dashboard = () => {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {/* Hero Section */}
            <section style={{
                padding: '6rem 0',
                background: 'radial-gradient(circle at 50% 0%, hsla(var(--primary), 0.15), transparent 50%)'
            }}>
                <div className="container">
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '4rem',
                        flexWrap: 'wrap'
                    }}>
                        <div style={{ flex: '1', minWidth: '300px' }}>
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.5rem 1rem',
                                background: 'hsla(var(--primary), 0.1)',
                                borderRadius: '9999px',
                                color: 'hsl(var(--primary))',
                                fontWeight: 600,
                                fontSize: '0.875rem',
                                marginBottom: '1.5rem'
                            }}>
                                <Zap size={16} /> #1 Automation Testing Platform
                            </div>
                            <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                                Complete Test <br />
                                <span style={{ color: 'hsl(var(--primary))' }}>Automation</span> Playground
                            </h1>
                            <p style={{
                                fontSize: '1.25rem',
                                color: 'hsl(var(--text-muted))',
                                marginBottom: '2.5rem',
                                maxWidth: '500px',
                                lineHeight: 1.6
                            }}>
                                Practice automation testing with real-world scenarios. From login forms to complete e-commerce workflows, master all aspects of Web automation.
                            </p>
                            <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem' }}>
                                <Link to="/login">
                                    <Button variant="primary" size="lg">Get Started</Button>
                                </Link>
                                <Button variant="secondary" size="lg">Learn More</Button>
                            </div>
                            <div style={{ display: 'flex', gap: '3rem' }}>
                                <Stat number="50+" label="Scenarios" icon={Code} />
                                <Stat number="20+" label="Tools" icon={Layers} />
                                <Stat number="100+" label="Elements" icon={Zap} />
                            </div>
                        </div>

                        <div style={{ flex: '1', minWidth: '300px', display: 'flex', justifyContent: 'center' }}>
                            <img
                                src={heroCardImage}
                                alt="Test Automation Hub"
                                style={{
                                    width: '100%',
                                    maxWidth: '500px',
                                    height: 'auto',
                                    borderRadius: '32px',
                                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Modules Section */}
            <section style={{ padding: '4rem 0', flex: 1 }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <div style={{
                            display: 'inline-block',
                            padding: '0.5rem 1.5rem',
                            background: 'hsl(var(--primary))',
                            color: 'white',
                            borderRadius: '9999px',
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            marginBottom: '1.5rem'
                        }}>
                            Features
                        </div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                            Comprehensive <br />
                            Automation <span style={{ color: 'hsl(var(--primary))' }}>Modules</span>
                        </h2>
                        <p style={{ color: 'hsl(var(--text-muted))' }}>Everything you need to practice and master web automation testing</p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
                        <ModuleSection
                            title="Master Element Locators"
                            description="Learn how to identify and interact with web elements using various locator strategies. Our platform provides real-world examples with ID, class, CSS selectors, XPath, and data attributes."
                            features={['CSS Selectors & XPath', 'Auto-generated IDs', 'Dynamic element handling', 'Shadow DOM elements']}
                            link="/form-elements"
                            linkText="Practice Locators"
                            imageColor="var(--secondary)"
                            align="left"
                            moduleId="1"
                        />
                        <ModuleSection
                            title="Complex User Interactions"
                            description="Practice automating complex user workflows including multi-step forms, dynamic content, file uploads, and drag-and-drop operations."
                            features={['Form validation & submission', 'AJAX & dynamic content', 'File upload handling', 'Multi-step workflows']}
                            link="/signup"
                            linkText="Try Interactions"
                            imageColor="var(--accent)"
                            align="right"
                            moduleId="2"
                        />
                        <ModuleSection
                            title="Full CRUD Operations"
                            description="Test complete Create, Read, Update, and Delete operations with our product management system. Practice handling tables, modals, confirmations, and real-time updates."
                            features={['Create & edit records', 'Delete with confirmation', 'Search & filter data', 'Pagination handling']}
                            link="/shop" // Placeholder, maybe should be a CRUD page but using Shop for now
                            linkText="Start CRUD"
                            imageColor="var(--success)"
                            align="left"
                            moduleId="3"
                        />
                        <ModuleSection
                            title="E-Commerce Workflow"
                            description="Automate end-to-end e-commerce scenarios including product browsing, cart management, coupon application, and checkout process."
                            features={['Add to cart functionality', 'Promo code validation', 'Checkout process', 'Order confirmation']}
                            link="/shop"
                            linkText="Shop Automation"
                            imageColor="var(--warning)"
                            align="right"
                            moduleId="4"
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

const Stat = ({ number, label, icon: Icon }) => (
    <div>
        <div style={{
            width: '40px',
            height: '40px',
            background: 'hsla(var(--primary), 0.1)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '0.5rem',
            color: 'hsl(var(--primary))'
        }}>
            <Icon size={20} />
        </div>
        <div style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.25rem' }}>{number}</div>
        <div style={{ color: 'hsl(var(--text-muted))', fontSize: '0.875rem', fontWeight: 500 }}>{label}</div>
    </div>
);

const ModuleSection = ({ title, description, features, link, linkText, imageColor, align, moduleId }) => (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '4rem',
        flexDirection: align === 'right' ? 'row-reverse' : 'row',
        flexWrap: 'wrap'
    }}>
        <div style={{ flex: 1, minWidth: '300px' }}>
            <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.25rem 0.75rem',
                background: `hsla(${imageColor}, 0.1)`,
                color: `hsl(${imageColor})`,
                borderRadius: '9999px',
                fontSize: '0.75rem',
                fontWeight: 700,
                marginBottom: '1rem'
            }}>
                <Layers size={12} /> Module {moduleId}
            </div>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{title}</h3>
            <p style={{ color: 'hsl(var(--text-muted))', marginBottom: '2rem', lineHeight: 1.6 }}>{description}</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                {features.map((feature, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <CheckCircle size={18} color={`hsl(${imageColor})`} />
                        <span style={{ fontWeight: 500 }}>{feature}</span>
                    </div>
                ))}
            </div>

            <Link to={link}>
                <Button variant="primary" style={{ background: `hsl(${imageColor})` }}>
                    {linkText} <ArrowRight size={16} />
                </Button>
            </Link>
        </div>

        <div style={{ flex: 1, minWidth: '300px' }}>
            <div className="glass-panel" style={{
                aspectRatio: '16/9',
                background: `linear-gradient(135deg, hsla(${imageColor}, 0.1), hsla(var(--surface), 0.5))`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Abstract visual representation */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: 0.3,
                    backgroundImage: `radial-gradient(circle at 50% 50%, hsla(${imageColor}, 0.5), transparent 70%)`
                }} />
                <div style={{
                    position: 'relative',
                    padding: '0.5rem 1rem',
                    background: 'white',
                    color: 'black',
                    borderRadius: '8px',
                    fontWeight: 600,
                    boxShadow: '0 10px 25px -5px rgba(0,0,0,0.2)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem', fontSize: '0.75rem', color: '#666' }}>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff5f57' }} />
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#febc2e' }} />
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#28c840' }} />
                    </div>
                    Ready to Test
                </div>
            </div>
        </div>
    </div>
);

export default Dashboard;
