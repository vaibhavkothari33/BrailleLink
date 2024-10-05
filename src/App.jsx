import React from 'react';
import Navbar from './components/Navbar';
import ProjectInfo from './components/ProjectInfo';
import About from './components/About';
import Action from './components/Action';

function App() {
  return (
    <div>
      <Navbar/>
      <ProjectInfo/>
      <About/>
      <Action/>
    </div>
  );
}

export default App;
