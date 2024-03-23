// TeacherPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './TeacherPage.css'; // Импорт стилей CSS для TeacherPage

const TeacherPage = () => {
    const { id } = useParams(); // Получаем ID преподавателя из URL
    const [teacherInfo, setTeacherInfo] = useState(null);

    useEffect(() => {
        // Здесь мог бы быть код для получения данных о преподавателе с сервера
        // Для примера используем моковые данные
        const fetchedTeacherInfo = {
            name: 'Иванов Иван Иванович',
            subjects: ['Программирование', 'Алгоритмы и структуры данных'],
            email: 'ivanov@misis.ru',
            // ... другие данные о преподавателе
        };
        setTeacherInfo(fetchedTeacherInfo);
    }, [id]); // Обновляем данные при изменении ID преподавателя

    if (!teacherInfo) {
        return <div>Loading...</div>; // Или другой индикатор загрузки
    }

    return (
        <div className="teacher-page">
            <h1>{teacherInfo.name}</h1>
            <h2>Предметы:</h2>
            <ul>
                {teacherInfo.subjects.map((subject, index) => (
                    <li key={index}>{subject}</li>
                ))}
            </ul>
            <p>Email: <a href={`mailto:${teacherInfo.email}`}>{teacherInfo.email}</a></p>
            {/* Здесь может быть дополнительная информация о преподавателе */}
        </div>
    );
};

export default TeacherPage;
