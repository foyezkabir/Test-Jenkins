import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, UserPlus, LogIn, LayoutDashboard, ArrowRight } from 'lucide-react';

const Dashboard = () => {
    const activities = [
        {
            title: 'Login Automation',
            description: 'Practice form filling, validation handling, and authentication flows.',
            icon: LogIn,
            path: '/login',
            color: 'var(--primary)'
        },
        {
            title: 'Registration Form',
            description: 'Complex form interactions with dropdowns, radio buttons, and validation.',
            icon: UserPlus,
            path: '/signup',
            color: 'var(--secondary)'
        },
        {
            title: 'E-commerce Flow',
            description: 'Simulate a purchase journey with cart management and coupon application.',
            icon: ShoppingBag,
            path: '/shop',
            color: 'var(--accent)'
        }
    ];

    return (
        <div className="container" style={{ padding: '4rem 1rem' }}>
            <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 className="animate-fade-in">Automation Practice</h1>
                <p style={{ fontSize: '1.25rem', color: 'hsl(var(--text-muted))', maxWidth: '600px', margin: '1rem auto' }} className="animate-fade-in">
                    A premium playground for testing your automation scripts.
                    Explore different user flows and interaction patterns.
                </p>
            </header>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem'
            }}>
                {activities.map((activity, index) => (
                    <Link
                        key={index}
                        to={activity.path}
                        className="glass-panel animate-fade-in"
                        style={{
                            padding: '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            transition: 'var(--transition)',
                            animationDelay: `${index * 100}ms`,
                            textDecoration: 'none'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-5px)';
                            e.currentTarget.style.borderColor = `hsl(${activity.color})`;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.borderColor = 'hsla(255, 100%, 100%, 0.1)';
                        }}
                    >
                        <div style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '12px',
                            background: `hsla(${activity.color}, 0.2)`,
                            color: `hsl(${activity.color})`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <activity.icon size={24} />
                        </div>

                        <h3 style={{ fontSize: '1.5rem' }}>{activity.title}</h3>
                        <p style={{ color: 'hsl(var(--text-muted))', flex: 1 }}>{activity.description}</p>

                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            color: `hsl(${activity.color})`,
                            fontWeight: 600,
                            marginTop: '1rem'
                        }}>
                            Start Practice <ArrowRight size={16} />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
