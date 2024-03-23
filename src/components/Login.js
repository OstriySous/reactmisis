// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Импорт стилей CSS для Login

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Здесь должна быть логика аутентификации
        // Для примера, мы просто перенаправим пользователя на главную страницу
        console.log('Login successful:', username, password);
        history.push('/'); // Перенаправление на главную страницу
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Вход в систему</h2>
                <div className="form-group">
                    <label htmlFor="username">Имя пользователя:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Пароль:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="login-button">Войти</button>
            </form>
        </div>
    );
};

export default Login;
