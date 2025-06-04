import React from 'react';

const Progress = () => {
    const tasks = [
        { 
            id: 1, 
            task: 'Research\n- Detailed Study of overall solutions', 
            completionTime: '10 March 2025 (Submission deadline for Detailed Project Proposal)', 
            status: 'Completed' 
        },
        { 
            id: 2, 
            task: 'Research\n- Specify the user requirements for each module\n- Define detailed task list for each module\n- Develop the website for project progress tracking', 
            completionTime: '17 March 2025', 
            status: 'Completed' 
        },
        { 
            id: 3, 
            task: 'Development\n- Data preparation\n- Frontend website design\n- Adding role-based access control on the frontend website\n- Incident input form design', 
            completionTime: '24 March 2025', 
            status: 'Completed' 
        },
        { 
            id: 4, 
            task: 'Development\n- Model preparation: Incident severity classification model', 
            completionTime: '30 April 2025', 
            status: 'Completed' 
        },
        { 
            id: 5, 
            task: 'Development\n- Further enhancing functionality of website and report generation functions.', 
            completionTime: '31 May 2025 (Submission deadline for Interim Report and presentation)', 
            status: 'Completed' 
        },
        { 
            id: 6, 
            task: 'Development\n- Evaluation of pre-reporting evaluation framework.', 
            completionTime: '31 May 2025 (Submission deadline for Interim Report and presentation)', 
            status: 'Completed' 
        },
        { 
            id: 7, 
            task: 'Development\n- Exploring practicality of additional features including Chatbot and IPFS.', 
            completionTime: '31 May 2025 (Submission deadline for Interim Report and presentation)', 
            status: 'Completed' 
        },
        { 
            id: 8, 
            task: 'Report\n- Interim Report preparation including\n  - Entire project processes\n  - Challenges and solutions\n  - Testing results analysis\n  - Future work and enhancements', 
            completionTime: '31 May 2025 (Submission deadline for Interim Report and presentation)', 
            status: 'Completed' 
        },
        { 
            id: 9, 
            task: 'Testing & Evaluation\n- Testing such as User acceptance testing (UAT)\n- Defined new task list after the UAT', 
            completionTime: '16 June 2025', 
            status: 'Pending' 
        },
        { 
            id: 10, 
            task: 'Testing & Evaluation\n- Necessary adjustments to address the issues found from the testing\n- AI chatbot accuracy and reliability fine-tune\n- Any adjustments on the models', 
            completionTime: '7 July 2025 (Project Progress Updates 4)', 
            status: 'Pending' 
        },
        { 
            id: 11, 
            task: 'Report\n- Final Report preparation\n- Project Website', 
            completionTime: '15 July 2025', 
            status: 'Pending' 
        },
        { 
            id: 12, 
            task: 'Report\n- Presentation preparation', 
            completionTime: 'End of July 2025', 
            status: 'Pending' 
        },
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