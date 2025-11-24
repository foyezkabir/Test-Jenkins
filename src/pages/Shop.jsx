import React, { useState } from 'react';
import { ShoppingCart, Tag, Trash2, Plus, Minus, MoreVertical, Edit2, Image as ImageIcon } from 'lucide-react';
import Button from '../components/Button';
import Input from '../components/Input';
import ProductModal from '../components/ProductModal';
import DeleteModal from '../components/DeleteModal';
import { useToast } from '../components/Toast';

const initialProducts = [
    { id: 1, name: 'Premium Plan', price: 29.99, description: 'Monthly subscription for advanced features', image: '' },
    { id: 2, name: 'Automation Course', price: 49.99, description: 'Complete video tutorials series', image: '' },
    { id: 3, name: 'Consultation', price: 99.99, description: '1 hour expert session with our team', image: '' },
];

const Shop = () => {
    const [products, setProducts] = useState(initialProducts);
    const [cart, setCart] = useState([]);
    const [coupon, setCoupon] = useState('');
    const [discount, setDiscount] = useState(0);
    const { addToast } = useToast();

    // Modal States
    const [isProductModalOpen, setIsProductModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [deletingProduct, setDeletingProduct] = useState(null);
    const [activeMenu, setActiveMenu] = useState(null);

    // Cart Logic
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

    // CRUD Logic
    const handleSaveProduct = (productData) => {
        if (editingProduct) {
            setProducts(prev => prev.map(p => p.id === editingProduct.id ? { ...productData, id: p.id } : p));
            addToast('Product updated successfully', 'success');
        } else {
            const newProduct = {
                ...productData,
                id: Math.max(...products.map(p => p.id), 0) + 1
            };
            setProducts(prev => [...prev, newProduct]);
            addToast('Product added successfully', 'success');
        }
        setEditingProduct(null);
    };

    const handleDeleteProduct = () => {
        if (deletingProduct) {
            setProducts(prev => prev.filter(p => p.id !== deletingProduct.id));
            // Also remove from cart if present
            setCart(prev => prev.filter(item => item.id !== deletingProduct.id));
            addToast('Product deleted successfully', 'success');
            setDeletingProduct(null);
            setIsDeleteModalOpen(false);
        }
    };

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const total = subtotal * (1 - discount);

    return (
        <div className="container" style={{ padding: '4rem 1rem', display: 'grid', gridTemplateColumns: '1fr 350px', gap: '2rem' }}>
            <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <h2>Available Products</h2>
                    <Button onClick={() => { setEditingProduct(null); setIsProductModalOpen(true); }}>
                        <Plus size={18} /> Add Product
                    </Button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem' }}>
                    {products.map(product => (
                        <div key={product.id} className="glass-panel" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                            {/* Product Image */}
                            <div style={{
                                height: '160px',
                                background: 'hsla(var(--surface-hover), 0.5)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                overflow: 'hidden'
                            }}>
                                {product.image ? (
                                    <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                ) : (
                                    <ImageIcon size={48} color="hsl(var(--text-muted))" />
                                )}
                            </div>

                            {/* 3-Dot Menu */}
                            <div style={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}>
                                <button
                                    onClick={() => setActiveMenu(activeMenu === product.id ? null : product.id)}
                                    style={{
                                        padding: '0.5rem',
                                        background: 'rgba(0,0,0,0.5)',
                                        borderRadius: '50%',
                                        color: 'white',
                                        cursor: 'pointer',
                                        backdropFilter: 'blur(4px)'
                                    }}
                                >
                                    <MoreVertical size={16} />
                                </button>

                                {activeMenu === product.id && (
                                    <div style={{
                                        position: 'absolute',
                                        top: '100%',
                                        right: 0,
                                        background: 'hsl(var(--surface))',
                                        border: '1px solid hsla(255,100%,100%,0.1)',
                                        borderRadius: 'var(--radius-md)',
                                        padding: '0.5rem',
                                        zIndex: 10,
                                        minWidth: '120px',
                                        boxShadow: 'var(--shadow-lg)'
                                    }}>
                                        <button
                                            onClick={() => {
                                                setEditingProduct(product);
                                                setIsProductModalOpen(true);
                                                setActiveMenu(null);
                                            }}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.5rem',
                                                width: '100%',
                                                padding: '0.5rem',
                                                color: 'hsl(var(--text-main))',
                                                fontSize: '0.875rem',
                                                cursor: 'pointer',
                                                textAlign: 'left',
                                                borderRadius: '4px'
                                            }}
                                            onMouseEnter={e => e.target.style.background = 'hsla(var(--surface-hover), 0.5)'}
                                            onMouseLeave={e => e.target.style.background = 'transparent'}
                                        >
                                            <Edit2 size={14} /> Edit
                                        </button>
                                        <button
                                            onClick={() => {
                                                setDeletingProduct(product);
                                                setIsDeleteModalOpen(true);
                                                setActiveMenu(null);
                                            }}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.5rem',
                                                width: '100%',
                                                padding: '0.5rem',
                                                color: 'hsl(var(--error))',
                                                fontSize: '0.875rem',
                                                cursor: 'pointer',
                                                textAlign: 'left',
                                                borderRadius: '4px'
                                            }}
                                            onMouseEnter={e => e.target.style.background = 'hsla(var(--error), 0.1)'}
                                            onMouseLeave={e => e.target.style.background = 'transparent'}
                                        >
                                            <Trash2 size={14} /> Delete
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Product Info */}
                            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>{product.name}</h3>
                                <p style={{ color: 'hsl(var(--text-muted))', fontSize: '0.875rem', marginBottom: '1rem', flex: 1 }}>
                                    {product.description}
                                </p>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                                    <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'hsl(var(--primary))' }}>
                                        ${product.price.toFixed(2)}
                                    </span>
                                    <Button size="sm" onClick={() => addToCart(product)}>Add</Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Cart Section */}
            <div className="glass-panel" style={{ padding: '2rem', height: 'fit-content', position: 'sticky', top: '100px' }}>
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
                                    <button onClick={() => updateQuantity(item.id, -1)} style={{ padding: '0.25rem', background: 'hsla(255,100%,100%,0.1)', borderRadius: '4px', cursor: 'pointer', color: 'white' }}><Minus size={14} /></button>
                                    <button onClick={() => updateQuantity(item.id, 1)} style={{ padding: '0.25rem', background: 'hsla(255,100%,100%,0.1)', borderRadius: '4px', cursor: 'pointer', color: 'white' }}><Plus size={14} /></button>
                                    <button onClick={() => removeFromCart(item.id)} style={{ color: 'hsl(var(--error))', marginLeft: '0.5rem', cursor: 'pointer', background: 'none', border: 'none' }}><Trash2 size={16} /></button>
                                </div>
                            </div>
                        ))}

                        <div style={{ marginTop: '1rem' }}>
                            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                                <Input
                                    id="coupon-input"
                                    placeholder="Coupon (SAVE20)"
                                    value={coupon}
                                    onChange={(e) => setCoupon(e.target.value)}
                                    style={{ marginBottom: 0 }}
                                />
                                <Button variant="secondary" onClick={applyCoupon} style={{ padding: '0 1rem' }}><Tag size={18} /></Button>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            {discount > 0 && (
                                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'hsl(var(--success))', marginBottom: '0.5rem' }}>
                                    <span>Discount</span>
                                    <span>-${(subtotal * discount).toFixed(2)}</span>
                                </div>
                            )}
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.25rem', fontWeight: 'bold', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid hsla(255,100%,100%,0.1)' }}>
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>

                            <Button variant="primary" className="w-full" style={{ width: '100%', marginTop: '1.5rem' }} onClick={() => addToast('Checkout feature coming soon!', 'info')}>Checkout</Button>
                        </div>
                    </div>
                )}
            </div>

            <ProductModal
                isOpen={isProductModalOpen}
                onClose={() => { setIsProductModalOpen(false); setEditingProduct(null); }}
                onSave={handleSaveProduct}
                product={editingProduct}
            />

            <DeleteModal
                isOpen={isDeleteModalOpen}
                onClose={() => { setIsDeleteModalOpen(false); setDeletingProduct(null); }}
                onConfirm={handleDeleteProduct}
                itemName={deletingProduct?.name}
            />
        </div>
    );
};

export default Shop;
