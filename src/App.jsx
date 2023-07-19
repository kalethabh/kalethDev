import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import { useLocation } from 'react-router-dom';

import './App.css';

const App = () => {

  const location = useLocation()

  useEffect(()=>{
    console.log(location.pathname);
  })
  return (
    <Routes>
      <Route
        path="/"
        element={
          <TransitionGroup>
            <CSSTransition classNames="fade" timeout={500}>
              <LandingPage />
            </CSSTransition>
          </TransitionGroup>
        }
      />
      <Route
        path="/home"
        element={
          <TransitionGroup>
            <CSSTransition classNames="fade" timeout={500}>
              <Home />
            </CSSTransition>
          </TransitionGroup>
        }
      />
      <Route
        path="/skills"
        element={
          <TransitionGroup>
            <CSSTransition classNames="fade" timeout={500}>
              <Skills />
            </CSSTransition>
          </TransitionGroup>
        }
      />
      <Route
        path="/projects"
        element={
          <TransitionGroup>
            <CSSTransition classNames="fade" timeout={500}>
              <Projects />
            </CSSTransition>
          </TransitionGroup>
        }
      />
      <Route
        path="/contact"
        element={
          <TransitionGroup>
            <CSSTransition classNames="fade" timeout={500}>
              <Contact />
            </CSSTransition>
          </TransitionGroup>
        }
      />
    </Routes>
  );
};

export default App;
