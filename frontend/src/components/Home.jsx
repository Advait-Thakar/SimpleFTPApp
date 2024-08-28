// src/components/Home.jsx
import React from 'react';
import { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { IoPersonSharp } from "react-icons/io5";
import '../styles/Home.css';

export const Home = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight / 2) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    function onHomeClick() {
        navigate('/home');
    }

    return (
        <div className="home-container">
            <div className={`main-nav ${isScrolled ? 'small-logo' : 'large-logo'}`}>
                <h1>Logo.</h1>
                <div className="btn-container">
                    <button className="home-button" onClick={onHomeClick}>Home</button>
                    <button className="profile"><IoPersonSharp /></button>
                </div>
            </div>
            <main className="dashboard-container">
                <Outlet />
            </main> 
            <footer className="footer">
                {/* Your footer component goes here! */}
            </footer>
        </div>
    );
}
