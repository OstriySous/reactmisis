// Footer.js
import React from 'react';
import './Footer.css';
import logo from './misis_logo_white_rus.svg'; // Импорт изображения

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <img src={logo} alt="Логотип МИСиС" className="footer-logo" />
                <p>Университет МИСиС</p>
                <p>Контакты: info@misis.ru</p>
                <p>&copy; {new Date().getFullYear()} Университет МИСиС. Все права защищены.</p>
            </div>
        </footer>
    );
};

export default Footer;
