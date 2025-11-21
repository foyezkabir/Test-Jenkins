import React, { useState } from 'react';
import { ShoppingCart, Tag, Trash2, Plus, Minus } from 'lucide-react';
import Button from '../components/Button';
import Input from '../components/Input';
import { useToast } from '../components/Toast';

const products = [
    { id: 1, name: 'Premium Plan', price: 29.99, description: 'Monthly subscription' },
    { id: 2, name: 'Automation Course', price: 49.99, description: 'Video tutorials' },
    { id: 3, name: 'Consultation', price: 99.99, description: '1 hour expert session' },
];

const Shop = () => {
    const [cart, setCart] = useState([]);
    const [coupon, setCoupon] = useState('');
    const [discount, setDiscount] = useState(0);
    const { addToast } = useToast();

    const addToCart = (product) => {
        setCart(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
            }
            return [...prev, { ...product, quantity: 1 }];
        });
        addToast(`Added ${product.name} to cart`, 'success');
    };

    const removeFromCart = (id) => {
        setCart(prev => prev.filter(item => item.id !== id));
    };

    const updateQuantity = (id, delta) => {
        setCart(prev => prev.map(item => {
            if (item.id === id) {
                const newQty = Math.max(0, item.quantity + delta);
                return newQty === 0 ? null : { ...item, quantity: newQty };
            }
            return item;
        }).filter(Boolean));
    };

    const applyCoupon = () => {
        if (coupon.toUpperCase() === 'SAVE20') {
            setDiscount(0.2);
            addToast('Coupon applied! 20% off.', 'success');
        } else {
            setDiscount(0);
            addToast('Invalid coupon code', 'error');
        }
    };

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const total = subtotal * (1 - discount);

    return (
        <div className="container" style={{ padding: '4rem 1rem', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
            <div>
                <h2 style={{ marginBottom: '2rem' }}>Available Products</h2>
                <div style={{ display: 'grid', gap: '1rem' }}>
                    {products.map(product => (
                        <div key={product.id} className="glass-panel" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <h3>{product.name}</h3>
                                <p style={{ color: 'hsl(var(--text-muted))' }}>{product.description}</p>
                                <p style={{ color: 'hsl(var(--primary))', fontWeight: 'bold', marginTop: '0.5rem' }}>${product.price}</p>
                            </div>
                            <Button id={`add-to-cart-${product.id}`} onClick={() => addToCart(product)}>Add to Cart</Button>
                        </div>
                    ))}
                </div>
            </div>

            <div className="glass-panel" style={{ padding: '2rem', height: 'fit-content' }}>
                <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <ShoppingCart /> Your Cart
                </h3>

                {cart.length === 0 ? (
                    <p id="cart-empty-msg" style={{ color: 'hsl(var(--text-muted))', textAlign: 'center', padding: '2rem 0' }}>Cart is empty</p>
                ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {cart.map(item => (
                            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '1rem', borderBottom: '1px solid hsla(255,100%,100%,0.1)' }}>
                                <div>
                                    <p style={{ fontWeight: 500 }}>{item.name}</p>
                                    <p style={{ fontSize: '0.875rem', color: 'hsl(var(--text-muted))' }}>${item.price} x {item.quantity}</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <button id={`decrease-qty-${item.id}`} onClick={() => updateQuantity(item.id, -1)} style={{ padding: '0.25rem', background: 'hsla(255,100%,100%,0.1)', borderRadius: '4px' }}><Minus size={14} /></button>
                                    <button id={`increase-qty-${item.id}`} onClick={() => updateQuantity(item.id, 1)} style={{ padding: '0.25rem', background: 'hsla(255,100%,100%,0.1)', borderRadius: '4px' }}><Plus size={14} /></button>
                                    <button id={`remove-item-${item.id}`} onClick={() => removeFromCart(item.id)} style={{ color: 'hsl(var(--error))', marginLeft: '0.5rem' }}><Trash2 size={16} /></button>
                                </div>
                            </div>
                        ))}

                        <div style={{ marginTop: '1rem' }}>
                            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                                <Input
                                    id="coupon-input"
                                    placeholder="Coupon Code (SAVE20)"
                                    value={coupon}
                                    onChange={(e) => setCoupon(e.target.value)}
                                    style={{ marginBottom: 0 }}
                                />
                                <Button id="apply-coupon" variant="secondary" onClick={applyCoupon} style={{ padding: '0 1rem' }}><Tag size={18} /></Button>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                <span>Subtotal</span>
                                <span id="cart-subtotal">${subtotal.toFixed(2)}</span>
                            </div>
                            {discount > 0 && (
                                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'hsl(var(--success))', marginBottom: '0.5rem' }}>
                                    <span>Discount</span>
                                    <span id="cart-discount">-${(subtotal * discount).toFixed(2)}</span>
                                </div>
                            )}
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.25rem', fontWeight: 'bold', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid hsla(255,100%,100%,0.1)' }}>
                                <span>Total</span>
                                <span id="cart-total">${total.toFixed(2)}</span>
                            </div>

                            <Button id="checkout-btn" variant="white" className="w-full" style={{ width: '100%', marginTop: '1.5rem' }} onClick={() => addToast('Checkout feature coming soon!', 'info')}>Checkout</Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Shop;
