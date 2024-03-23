// Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'; // Импорт стилей CSS для Header

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <NavLink to="/">Университет</NavLink>
            </div>
            <nav className="navigation">
                <ul>
                    <li><NavLink to="/students" activeClassName="active">Студенты</NavLink></li>
                    <li><NavLink to="/teachers" activeClassName="active">Преподаватели</NavLink></li>
                    {/* Добавьте дополнительные ссылки по мере необходимости */}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
