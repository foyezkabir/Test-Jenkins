import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{
            background: 'hsl(var(--surface))',
            padding: '4rem 0 2rem',
            marginTop: '4rem',
            borderTop: '1px solid hsla(255, 100%, 100%, 0.1)'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '3rem',
                    marginBottom: '3rem'
                }}>
                    <div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            marginBottom: '1.5rem',
                            fontWeight: 700,
                            fontSize: '1.25rem'
                        }}>
                            <div style={{ width: '24px', height: '24px', background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))', borderRadius: '6px' }} />
                            AutoTest Hub
                        </div>
                        <p style={{ color: 'hsl(var(--text-muted))', marginBottom: '1.5rem', maxWidth: '300px' }}>
                            The complete automation testing playground. Practice and perfect your testing skills with real-world scenarios.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <SocialIcon icon={Github} />
                            <SocialIcon icon={Twitter} />
                            <SocialIcon icon={Linkedin} />
                            <SocialIcon icon={Mail} />
                        </div>
                    </div>

                    <FooterColumn
                        title="Product"
                        links={['Features', 'Documentation', 'API Reference', 'Changelog']}
                    />
                    <FooterColumn
                        title="Testing"
                        links={['Login Tests', 'Form Elements', 'CRUD Operations', 'E-commerce Flow']}
                    />
                    <FooterColumn
                        title="Resources"
                        links={['Tutorials', 'Best Practices', 'Community', 'Support']}
                    />
                    <FooterColumn
                        title="Company"
                        links={['About', 'Blog', 'Careers', 'Contact']}
                    />
                </div>

                <div style={{
                    borderTop: '1px solid hsla(255, 100%, 100%, 0.1)',
                    paddingTop: '2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    color: 'hsl(var(--text-muted))',
                    fontSize: '0.875rem'
                }}>
                    <p>© 2025 AutoTest Hub. All rights reserved.</p>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <a href="#" style={{ transition: 'color 0.2s' }}>Privacy Policy</a>
                        <a href="#" style={{ transition: 'color 0.2s' }}>Terms of Service</a>
                        <a href="#" style={{ transition: 'color 0.2s' }}>Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const FooterColumn = ({ title, links }) => (
    <div>
        <h4 style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>{title}</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {links.map(link => (
                <a
                    key={link}
                    href="#"
                    style={{
                        color: 'hsl(var(--text-muted))',
                        fontSize: '0.875rem',
                        transition: 'color 0.2s'
                    }}
                    onMouseEnter={e => e.target.style.color = 'hsl(var(--primary))'}
                    onMouseLeave={e => e.target.style.color = 'hsl(var(--text-muted))'}
                >
                    {link}
                </a>
            ))}
        </div>
    </div>
);

const SocialIcon = ({ icon: Icon }) => (
    <a
        href="#"
        style={{
            width: '36px',
            height: '36px',
            borderRadius: '8px',
            background: 'hsla(var(--surface-hover), 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'hsl(var(--text-muted))',
            transition: 'all 0.2s'
        }}
        onMouseEnter={e => {
            e.currentTarget.style.background = 'hsl(var(--primary))';
            e.currentTarget.style.color = 'white';
        }}
        onMouseLeave={e => {
            e.currentTarget.style.background = 'hsla(var(--surface-hover), 0.5)';
            e.currentTarget.style.color = 'hsl(var(--text-muted))';
        }}
    >
        <Icon size={18} />
    </a>
);

export default Footer;
