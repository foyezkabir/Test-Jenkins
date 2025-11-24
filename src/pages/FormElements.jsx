import React, { useState } from 'react';
import Checkbox from '../components/Checkbox';
import Radio from '../components/Radio';
import Select from '../components/Select';
import Toggle from '../components/Toggle';
import Slider from '../components/Slider';
import Button from '../components/Button';
import Footer from '../components/Footer';

const FormElements = () => {
    const [checkboxes, setCheckboxes] = useState({
        newsletter: false,
        marketing: false,
        updates: false
    });

    const [radioValue, setRadioValue] = useState('standard');
    const [selectValue, setSelectValue] = useState('');
    const [colorValue, setColorValue] = useState('');
    const [notifications, setNotifications] = useState(true);
    const [volume, setVolume] = useState(50);
    const [comments, setComments] = useState('');

    const handleCheckboxChange = (e) => {
        setCheckboxes({ ...checkboxes, [e.target.id]: e.target.checked });
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div className="container" style={{ flex: 1, paddingTop: '2rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Form Elements Demo</h1>
                    <p style={{ color: 'hsl(var(--text-muted))', fontSize: '1.125rem' }}>
                        Test all interactive form elements for automation
                    </p>
                </div>

                <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                    {/* Checkboxes */}
                    <section className="glass-panel" style={{ padding: '2rem' }}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Checkboxes</h3>
                        <p style={{ color: 'hsl(var(--text-muted))', marginBottom: '1.5rem', fontSize: '0.875rem' }}>Multiple selection options</p>

                        <Checkbox
                            id="newsletter"
                            label="Newsletter subscription"
                            checked={checkboxes.newsletter}
                            onChange={handleCheckboxChange}
                        />
                        <Checkbox
                            id="marketing"
                            label="Marketing emails"
                            checked={checkboxes.marketing}
                            onChange={handleCheckboxChange}
                        />
                        <Checkbox
                            id="updates"
                            label="Product updates"
                            checked={checkboxes.updates}
                            onChange={handleCheckboxChange}
                        />
                    </section>

                    {/* Radio Buttons */}
                    <section className="glass-panel" style={{ padding: '2rem' }}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Radio Buttons</h3>
                        <p style={{ color: 'hsl(var(--text-muted))', marginBottom: '1.5rem', fontSize: '0.875rem' }}>Single selection from multiple options</p>

                        <Radio
                            id="standard"
                            name="delivery"
                            label="Standard Delivery (5-7 days)"
                            checked={radioValue === 'standard'}
                            onChange={() => setRadioValue('standard')}
                        />
                        <Radio
                            id="express"
                            name="delivery"
                            label="Express Delivery (2-3 days)"
                            checked={radioValue === 'express'}
                            onChange={() => setRadioValue('express')}
                        />
                        <Radio
                            id="overnight"
                            name="delivery"
                            label="Overnight Delivery (1 day)"
                            checked={radioValue === 'overnight'}
                            onChange={() => setRadioValue('overnight')}
                        />
                    </section>

                    {/* Dropdown Select */}
                    <section className="glass-panel" style={{ padding: '2rem' }}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Dropdown Select</h3>
                        <p style={{ color: 'hsl(var(--text-muted))', marginBottom: '1.5rem', fontSize: '0.875rem' }}>Select from dropdown menus</p>

                        <Select
                            id="country"
                            label="Country"
                            value={selectValue}
                            onChange={(e) => setSelectValue(e.target.value)}
                            placeholder="Select a country"
                            options={[
                                { value: 'us', label: 'United States' },
                                { value: 'uk', label: 'United Kingdom' },
                                { value: 'ca', label: 'Canada' },
                                { value: 'au', label: 'Australia' }
                            ]}
                        />

                        <Select
                            id="color"
                            label="Preferred Color"
                            value={colorValue}
                            onChange={(e) => setColorValue(e.target.value)}
                            placeholder="Choose a color"
                            options={[
                                { value: 'red', label: 'Red' },
                                { value: 'blue', label: 'Blue' },
                                { value: 'green', label: 'Green' },
                                { value: 'purple', label: 'Purple' }
                            ]}
                            style={{ marginBottom: 0 }}
                        />
                    </section>

                    {/* Toggle Switch */}
                    <section className="glass-panel" style={{ padding: '2rem' }}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Toggle Switch</h3>
                        <p style={{ color: 'hsl(var(--text-muted))', marginBottom: '1.5rem', fontSize: '0.875rem' }}>On/off toggle controls</p>

                        <Toggle
                            id="notifications"
                            label="Enable Notifications"
                            checked={notifications}
                            onChange={(e) => setNotifications(e.target.checked)}
                        />
                    </section>

                    {/* Slider */}
                    <section className="glass-panel" style={{ padding: '2rem' }}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Slider</h3>
                        <p style={{ color: 'hsl(var(--text-muted))', marginBottom: '1.5rem', fontSize: '0.875rem' }}>Adjust value using slider</p>

                        <Slider
                            label="Volume"
                            value={volume}
                            onChange={(e) => setVolume(e.target.value)}
                        />
                    </section>

                    {/* Text Area */}
                    <section className="glass-panel" style={{ padding: '2rem' }}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Text Area</h3>
                        <p style={{ color: 'hsl(var(--text-muted))', marginBottom: '1.5rem', fontSize: '0.875rem' }}>Multi-line text input</p>

                        <label htmlFor="comments" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'hsl(var(--text-muted))' }}>Comments</label>
                        <textarea
                            id="comments"
                            value={comments}
                            onChange={(e) => setComments(e.target.value)}
                            placeholder="Enter your comments here..."
                            rows={4}
                            style={{
                                width: '100%',
                                padding: '0.75rem 1rem',
                                background: 'hsla(var(--surface-hover), 0.5)',
                                border: '1px solid hsla(255, 100%, 100%, 0.1)',
                                borderRadius: 'var(--radius-md)',
                                color: 'hsl(var(--text-main))',
                                fontFamily: 'inherit',
                                resize: 'vertical'
                            }}
                        />
                    </section>

                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                        <Button variant="primary" size="lg">Submit Form</Button>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default FormElements;
