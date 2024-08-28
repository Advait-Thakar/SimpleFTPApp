import React, { useEffect, useState } from 'react';
import '../styles/LandingPage.css'; // Ensure you have your CSS file for styles
import { GiCommercialAirplane } from 'react-icons/gi';
import { IoHome } from 'react-icons/io5';
import { FaHeart } from 'react-icons/fa';
import { BsStars } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
    const texts = ['on trips', 'with housemates', 'with your partner', 'with anyone'];
    const icons = [<GiCommercialAirplane />, <IoHome />, <FaHeart />, <BsStars />];
    const [index, setIndex] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % texts.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

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

    function handleClick() {
        navigate('/sign-in');
    }

    return (
        <div className='main-container'>
            <div className={`navbar ${isScrolled ? 'small-logo' : 'large-logo'}`}>
                <h1>Logo.</h1>
            </div>
            <section className='hero1'>
                <div className="hero-container">
                    <div className='landingContainer'>
                        <div className='landingHeader'>
                            <h1>
                                Less stress when <br />
                                sharing expenses <br />
                                <span>{texts[index]}.</span>
                            </h1>
                        </div>
                        <div className='landingPic'>
                            <a href="#" className="icon-link">{icons[index]}</a>
                        </div>
                    </div>
                    <div className="icons">
                        <a href="#" className={`icon ${index === 0 ? 'active' : ''}`}><GiCommercialAirplane /></a>
                        <a href="#" className={`icon ${index === 1 ? 'active' : ''}`}><IoHome /></a>
                        <a href="#" className={`icon ${index === 2 ? 'active' : ''}`}><FaHeart /></a>
                        <a href="#" className={`icon ${index === 3 ? 'active' : ''}`}><BsStars /></a>
                    </div>
                    <div className="sub-text">
                        <h4>
                            Keep track of your shared expenses and <br />
                            balances with housemates, trips, groups,<br />
                            friends, and family.
                        </h4>
                    </div>
                    <button onClick={handleClick} className="get-started">Get Started</button>
                </div>
            </section>
            <section className="hero2">
                <div className="grid-container">
                    <div className="grid-item sec1">
                        <h2>Track balances</h2>
                        <p>Keep track of shared expenses, balances, and who owes who.</p>
                    </div>
                    <div className="grid-item sec2">
                        <h2>Organize expenses</h2>
                        <p>Split expenses with any group: trips, housemates, friends, and family.</p>
                    </div>
                    <div className="grid-item sec3">
                        <h2>Add expenses easily</h2>
                        <p>Quickly add expenses on the go before you forget who paid.</p>
                    </div>
                    <div className="grid-item sec4">
                        <h2>Pay friends back</h2>
                        <p>Settle up with a friend and record any cash or online payment.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
