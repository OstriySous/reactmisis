// TeachersList.js
import React from 'react';

// Предполагаем, что данные о преподавателях имеют следующую структуру:
const departmentsData = [
    {
        department: 'Кафедра информатики',
        teachers: [
            { id: 1, name: 'Иванов Иван Иванович', subjects: ['Программирование'] },
            { id: 2, name: 'Петров Петр Петрович', subjects: ['Алгоритмы'] },
            // ... другие преподаватели
        ],
    },
    // ... другие кафедры
];

const TeachersList = () => {
    return (
        <div>
            <h1>Список преподавателей</h1>
            {departmentsData.map((department) => (
                <div key={department.department}>
                    <h2>{department.department}</h2>
                    <ul>
                        {department.teachers.map((teacher) => (
                            <li key={teacher.id}>
                                {teacher.name}
                                <ul>
                                    {teacher.subjects.map((subject, index) => (
                                        <li key={index}>{subject}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default TeachersList;
