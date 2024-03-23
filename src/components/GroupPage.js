// GroupPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './GroupPage.css'; // Импорт стилей CSS для GroupPage

const GroupPage = () => {
    const { id } = useParams(); // Получаем ID группы из URL
    const [groupInfo, setGroupInfo] = useState(null);

    useEffect(() => {
        // Здесь мог бы быть код для получения данных о группе с сервера
        // Для примера используем моковые данные
        const fetchedGroupInfo = {
            groupName: 'ИУ8-101',
            students: [
                { id: 1, name: 'Иванов Иван Иванович' },
                { id: 2, name: 'Петров Петр Петрович' },
                // ... другие студенты
            ],
            schedule: [
                // ... расписание занятий
            ],
            // ... другие данные о группе
        };
        setGroupInfo(fetchedGroupInfo);
    }, [id]); // Обновляем данные при изменении ID группы

    if (!groupInfo) {
        return <div>Loading...</div>; // Или другой индикатор загрузки
    }

    return (
        <div className="group-page">
            <h1>Группа: {groupInfo.groupName}</h1>
            <h2>Студенты:</h2>
            <ul>
                {groupInfo.students.map(student => (
                    <li key={student.id}>{student.name}</li>
                ))}
            </ul>
            {/* Здесь может быть компонент с расписанием, если необходимо */}
        </div>
    );
};

export default GroupPage;
