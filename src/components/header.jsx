import React from 'react';
import { useState } from 'react';


import './header.css';

const Header = () => {

    const [navVisible, setNavVisible] = useState(false);

    const toggleNav = () => {
        setNavVisible((prev) => !prev);
    };
    const items = [
        "Home", "Shop", "AboutUS", "Services", "Blog", "ContactUs"
    ];

    return (
        <div className="header">
            <div className="header-containter">
                <div className="logo">
                    <a>Furni</a>
                    <span>.</span>
                </div>

                <div className="navlinks-containter">
                <button className="nav-toggle" onClick={toggleNav}>
                        {navVisible ? 'Close' : 'Menu'}
                    </button>
                    <ul className={`nav-links ${navVisible ? 'visible' : ''}`}>
                        {items.map((item, index) => (
                            <li key={index} className="nav-links_indi">
                                <a>{item}</a>
                            </li>
                        ))}
                    </ul>
                    <ul className='navlinks-profile'>
                        <li>
                            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </li>
                        <li>
                            <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </li>
                    </ul>
                </div>

            </div>

        </div>
    );
};

export default Header;
