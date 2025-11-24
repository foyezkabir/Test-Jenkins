import React, { useState, useEffect } from 'react';
import { X, Upload } from 'lucide-react';
import Button from './Button';
import Input from './Input';

const ProductModal = ({ isOpen, onClose, onSave, product }) => {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        description: '',
        image: ''
    });

    useEffect(() => {
        if (product) {
            setFormData({
                name: product.name,
                price: product.price,
                description: product.description,
                image: product.image || ''
            });
        } else {
            setFormData({
                name: '',
                price: '',
                description: '',
                image: ''
            });
        }
    }, [product, isOpen]);

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ ...formData, price: parseFloat(formData.price) });
        onClose();
    };

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
        }}>
            <div className="glass-panel" style={{ width: '100%', maxWidth: '500px', padding: '2rem', position: 'relative' }}>
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        color: 'hsl(var(--text-muted))',
                        cursor: 'pointer'
                    }}
                >
                    <X size={24} />
                </button>

                <h2 style={{ marginBottom: '1.5rem' }}>{product ? 'Edit Product' : 'Add New Product'}</h2>

                <form onSubmit={handleSubmit}>
                    <Input
                        id="product-name"
                        label="Product Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                    />

                    <Input
                        id="product-price"
                        label="Price"
                        type="number"
                        step="0.01"
                        value={formData.price}
                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                        required
                    />

                    <div style={{ marginBottom: '1rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'hsl(var(--text-muted))' }}>Description</label>
                        <textarea
                            id="product-description"
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            rows={3}
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
                            required
                        />
                    </div>

                    <Input
                        id="product-image"
                        label="Image URL"
                        placeholder="https://example.com/image.jpg"
                        icon={Upload}
                        value={formData.image}
                        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    />

                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '2rem' }}>
                        <Button type="button" variant="ghost" onClick={onClose}>Cancel</Button>
                        <Button type="submit" variant="primary">{product ? 'Update Product' : 'Add Product'}</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProductModal;
