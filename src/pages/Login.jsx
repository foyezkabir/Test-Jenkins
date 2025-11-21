import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import Input from '../components/Input';
import Button from '../components/Button';
import { useToast } from '../components/Toast';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const { addToast } = useToast();
    const navigate = useNavigate();

    const validate = () => {
        const newErrors = {};
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email address';

        if (!formData.password) newErrors.password = 'Password is required';
        else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            if (formData.email === 'admin@example.com' && formData.password === 'password') {
                addToast('Login successful! Welcome back.', 'success');
                navigate('/dashboard');
            } else {
                addToast('Invalid credentials. Try admin@example.com / password', 'error');
            }
        }, 1500);
    };

    return (
        <div className="flex-center" style={{ minHeight: '100vh', padding: '2rem' }}>
            <div className="glass-panel" style={{ width: '100%', maxWidth: '400px', padding: '2.5rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <h2 style={{ marginBottom: '0.5rem' }}>Welcome Back</h2>
                    <p style={{ color: 'hsl(var(--text-muted))' }}>Sign in to continue your automation practice</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <Input
                        id="login-email"
                        label="Email Address"
                        type="email"
                        placeholder="admin@example.com"
                        icon={Mail}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        error={errors.email}
                    />

                    <Input
                        id="login-password"
                        label="Password"
                        type="password"
                        placeholder="••••••••"
                        icon={Lock}
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        error={errors.password}
                    />

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', fontSize: '0.875rem' }}>
                        <label htmlFor="remember-me" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0, cursor: 'pointer' }}>
                            <input id="remember-me" type="checkbox" style={{ width: 'auto', margin: 0 }} />
                            Remember me
                        </label>
                        <a href="#" style={{ color: 'hsl(var(--primary))' }}>Forgot password?</a>
                    </div>

                    <Button id="login-submit" type="submit" className="w-full" style={{ width: '100%' }} isLoading={isLoading}>
                        Sign In <ArrowRight size={18} />
                    </Button>
                </form>

                <div style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.875rem', color: 'hsl(var(--text-muted))' }}>
                    Don't have an account? <Link to="/signup" style={{ color: 'hsl(var(--primary))', fontWeight: 600 }}>Sign up</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
