// StudentsList.js
import React from 'react';

// Предполагаем, что данные о студентах имеют следующую структуру:
const groupsData = [
    {
        group: 'ИУ8-101',
        students: [
            { id: 1, name: 'Иванов Иван' },
            { id: 2, name: 'Петрова Анна' },
            // ... другие студенты
        ],
    },
    // ... другие группы
];

const StudentsList = () => {
    return (
        <div>
            <h1>Список учеников</h1>
            {groupsData.map(group => (
                <div key={group.group}>
                    <h2>{group.group}</h2>
                    <ul>
                        {group.students.map(student => (
                            <li key={student.id}>{student.name}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default StudentsList;
