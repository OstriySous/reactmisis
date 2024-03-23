import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import StudentsList from './components/StudentsList';
import TeachersList from './components/TeachersList';
import GroupPage from './components/GroupPage';
import TeacherPage from './components/TeacherPage';
import Login from './components/Login';
// Импортируйте другие необходимые компоненты

function App() {
    return (
        <Router>
            <Header />
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/students" element={<StudentsList />} />
                    <Route path="/teachers" element={<TeachersList />} />
                    <Route path="/group/:id" element={<GroupPage />} />
                    <Route path="/teacher/:id" element={<TeacherPage />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
