import React, { useRef } from 'react';
import Home from './components/Home';
import Introduction from './components/Introduction';
import Progress from './components/Progress';
import Documentation from './components/Documentation';
import TeamMembers from './components/TeamMembers';
import Navigation from './components/Navigation';
import './styles/App.css';

function App() {
  const homeRef = useRef(null);
  const introRef = useRef(null);
  const progressRef = useRef(null);
  const docRef = useRef(null);
  const teamRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Navigation 
        scrollToHome={() => scrollToSection(homeRef)}
        scrollToIntroduction={() => scrollToSection(introRef)}
        scrollToProgress={() => scrollToSection(progressRef)}
        scrollToDocumentation={() => scrollToSection(docRef)}
        scrollToTeamMembers={() => scrollToSection(teamRef)}
      />
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={introRef}>
        <Introduction />
      </div>
      <div ref={progressRef}>
        <Progress />
      </div>
      <div ref={docRef}>
        <Documentation />
      </div>
      <div ref={teamRef}>
        <TeamMembers />
      </div>
    </div>
  );
}

export default App;