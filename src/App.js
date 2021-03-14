import React, { useRef } from 'react';
import Paper from '@material-ui/core/Paper';
import { AppBar, Tab, Tabs } from '@material-ui/core';
import About from './components/About';
import Resume from './components/experience/Experience';
import Projects from './components/Projects';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  const myHome = useRef(null);
  const myAbout = useRef(null);
  const myExperience = useRef(null);
  const myProject = useRef(null);

  const handleChange = (event, newValue) => {
    if (newValue === 'home') {
      myHome.current.scrollIntoView({ behavior: 'smooth' });
    }
    else if (newValue === 'about') {
      myAbout.current.scrollIntoView({ behavior: 'smooth' });
    } else if (newValue === 'experience') {
      myExperience.current.scrollIntoView({ behavior: 'smooth' });
    } else if (newValue === 'project') {
      myProject.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <Paper ref={myHome} style={styles.container}>
      <AppBar style={styles.header} position='sticky' >
        <Tabs onChange={handleChange} centered='true' >
          <Tab style={styles.tab} value="home" label="Home" />
          <Tab style={styles.tab} value="about" label="About me" />
          <Tab style={styles.tab} value="experience" label="Experience" />
          <Tab style={styles.tab} value="project" label="Project" />
        </Tabs>
      </AppBar>

      <Paper style={{ backgroundColor: 'black' }}>
        <Home />
      </Paper>

      <Paper ref={myAbout} style={{ backgroundColor: '#303030', }}>
        <About />
      </Paper>

      <Paper ref={myExperience}>
        <Resume />
      </Paper>

      <Paper ref={myProject} style={{ backgroundColor: '#c7c7c7'}}>
        <Projects />
      </Paper>

      <Paper style={styles.footer}>
        <Footer />
      </Paper>

    </Paper>
  );
}

const styles = {
  container: {
    backgroundColor: 'black'
  },

  header: {
    backgroundColor: 'black',
    marginBottom: 250,
  },

  tab: {
    fontSize: 17,
    fontWeight: 'bold',
  },

  footer: {
    backgroundColor: 'black'
  }
};

export default App;
