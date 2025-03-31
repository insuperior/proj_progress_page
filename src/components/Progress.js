import React from 'react';

const Progress = () => {
    const tasks = [
        { id: 1, task: 'Detailed Study of overall solutions', completionTime: '10 March 2025', status: 'Completed' },
        
        { id: 2, task: 'Research', completionTime: '17 March 2025', status: 'Completed' },

        { id: 3, task: 'Development', completionTime: '24 March 2025', status: 'Pending' },
        // Add more tasks as needed
    ];

    return (
        <section id="progress">
            <h2 id="sub-title">
                Progress
            </h2>
            <table>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Estimated Completion Time</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(task => (
                        <tr key={task.id}>
                            <td>{task.task}</td>
                            <td>{task.completionTime}</td>
                            <td>{task.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default Progress;