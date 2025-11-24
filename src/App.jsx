import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home, ShoppingBag, User, LogIn } from 'lucide-react';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Shop from './pages/Shop';
import FormElements from './pages/FormElements';

const Navbar = () => {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            padding: '1rem 2rem',
            background: 'hsla(var(--background), 0.8)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid hsla(255,100%,100%,0.1)',
            zIndex: 100,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <Link to="/dashboard" style={{ fontWeight: 700, fontSize: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '32px', height: '32px', background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))', borderRadius: '8px' }} />
                AutoPractice
            </Link>

            <div style={{ display: 'flex', gap: '2rem' }}>
                <NavLink to="/dashboard" icon={Home} active={isActive('/dashboard')}>Dashboard</NavLink>
                <NavLink to="/shop" icon={ShoppingBag} active={isActive('/shop')}>Shop</NavLink>
                <NavLink to="/form-elements" active={isActive('/form-elements')}>Form Elements</NavLink>
                <NavLink to="/login" icon={LogIn} active={isActive('/login')}>Login</NavLink>
                <NavLink to="/signup" icon={User} active={isActive('/signup')}>Signup</NavLink>
            </div>
        </nav>
    );
};

const NavLink = ({ to, children, icon: Icon, active }) => (
    <Link
        to={to}
        style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: active ? 'hsl(var(--primary))' : 'hsl(var(--text-muted))',
            fontWeight: active ? 600 : 500,
            transition: 'var(--transition)'
        }}
    >
        {Icon && <Icon size={18} />}
        {children}
    </Link>
);

function App() {
    return (
        <Router>
            <Navbar />
            <div style={{ paddingTop: '80px' }}>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/form-elements" element={<FormElements />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
