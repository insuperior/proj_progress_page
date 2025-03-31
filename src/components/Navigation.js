import React from 'react';

const Navigation = ({ scrollToHome, scrollToIntroduction, scrollToProgress, scrollToDocumentation, scrollToTeamMembers }) => {
    return (
        <nav>
            <button onClick={scrollToHome}>Home</button>
            <button onClick={scrollToIntroduction}>Introduction</button>
            <button onClick={scrollToProgress}>Progress</button>
            <button onClick={scrollToDocumentation}>Documentation</button>
            <button onClick={scrollToTeamMembers}>Team Members</button>
        </nav>
    );
};

export default Navigation;