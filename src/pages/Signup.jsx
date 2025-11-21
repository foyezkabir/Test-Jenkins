import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Lock, Phone, MapPin, ArrowRight } from 'lucide-react';
import Input from '../components/Input';
import Select from '../components/Select';
import Button from '../components/Button';
import { useToast } from '../components/Toast';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        gender: '',
        phone: ''
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const { addToast } = useToast();
    const navigate = useNavigate();

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email address';

        if (!formData.password) newErrors.password = 'Password is required';
        else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';

        if (!formData.gender) newErrors.gender = 'Please select a gender';
        if (!formData.phone) newErrors.phone = 'Phone number is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            addToast('Account created successfully!', 'success');
            navigate('/login');
        }, 1500);
    };

    return (
        <div className="flex-center" style={{ minHeight: '100vh', padding: '2rem' }}>
            <div className="glass-panel" style={{ width: '100%', maxWidth: '500px', padding: '2.5rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <h2 style={{ marginBottom: '0.5rem' }}>Create Account</h2>
                    <p style={{ color: 'hsl(var(--text-muted))' }}>Join the automation practice community</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <Input
                        label="Full Name"
                        icon={User}
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        error={errors.name}
                    />

                    <Input
                        label="Email Address"
                        type="email"
                        icon={Mail}
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        error={errors.email}
                    />

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <Select
                            label="Gender"
                            options={[
                                { label: 'Male', value: 'male' },
                                { label: 'Female', value: 'female' },
                                { label: 'Other', value: 'other' }
                            ]}
                            value={formData.gender}
                            onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                            error={errors.gender}
                        />

                        <Input
                            label="Phone"
                            icon={Phone}
                            placeholder="+1 234 567 890"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            error={errors.phone}
                        />
                    </div>

                    <Input
                        label="Password"
                        type="password"
                        icon={Lock}
                        placeholder="Create a strong password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        error={errors.password}
                    />

                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem' }}>Interests</label>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', color: 'hsl(var(--text-main))', fontWeight: 'normal' }}>
                                <input type="radio" name="role" value="student" style={{ width: 'auto' }} /> Student
                            </label>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', color: 'hsl(var(--text-main))', fontWeight: 'normal' }}>
                                <input type="radio" name="role" value="professional" style={{ width: 'auto' }} /> Professional
                            </label>
                        </div>
                    </div>

                    <Button type="submit" className="w-full" style={{ width: '100%' }} isLoading={isLoading}>
                        Create Account <ArrowRight size={18} />
                    </Button>
                </form>

                <div style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.875rem', color: 'hsl(var(--text-muted))' }}>
                    Already have an account? <Link to="/login" style={{ color: 'hsl(var(--primary))', fontWeight: 600 }}>Sign in</Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;
