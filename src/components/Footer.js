// Footer.js
import React from 'react';
import './Footer.css'; // Импорт стилей CSS для Footer

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>Университет МИСиС</p>
                <p>Контакты: info@misis.ru</p>
                <p>&copy; {new Date().getFullYear()} Университет МИСиС. Все права защищены.</p>
            </div>
        </footer>
    );
};

export default Footer;
