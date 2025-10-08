import '../styling/Websites.css'
import { useState } from 'react'
import { SiJavascript, SiReact, SiHtml5, SiCss3, SiFirebase } from 'react-icons/si'
import { FaGlobe, FaCalculator } from 'react-icons/fa'
import Calculator from './Calculator'

export default function Websites() {
  const [activeSection, setActiveSection] = useState('javascript')

  const renderJavaScriptWebsite = () => (
    <div className="website-section">
      <h3>Vanilla JavaScript Portfolio</h3>
      
      <div className="tech-stack">
        <h4>Technology Stack:</h4>
        <div className="tech-tags">
          <span className="tech-tag javascript"><SiJavascript className="tech-icon" />JavaScript</span>
          <span className="tech-tag html"><SiHtml5 className="tech-icon" />HTML5</span>
          <span className="tech-tag css"><SiCss3 className="tech-icon" />CSS3</span>
          <span className="tech-tag firebase"><SiFirebase className="tech-icon" />Firebase</span>
          <span className="tech-tag web"><FaGlobe className="tech-icon" />Multi-Page</span>
        </div>
      </div>
      
      <p>
        This website was built using Vanilla JavaScript, HTML5, CSS3 and hosted
        on Firebase (google). The website was designed to be a portfolio
        of my work. It is a multiple page website with complex animations during
        page transitions.
      </p>
      <p>
        In comparison to this Portfolio Website, that was built using the{' '}
        <a href='https://react.dev/' target='_blank' rel='noopener noreferrer'>
          React.js
        </a>{' '}
        framework, it is mainly a single page web app with minimal animations.
      </p>
      <p>
        I have embedded the website below for you to view (inside my new
        portfolio). It can be viewed directly{' '}
        <a
          href='https://portfolio-f4791.web.app'
          target='_blank'
          rel='noopener noreferrer'
        >
          here.
        </a>
      </p>
      <p>I am most pleased with the Projects Button open/close animation.</p>
      <div className='website-container'>
        <iframe
          src='https://portfolio-f4791.web.app'
          title='Vanilla JavaScript Portfolio'
          width='100%'
          height='100%'
          style={{ border: 'none', maxWidth: '100vw', maxHeight: '100vh' }}
        ></iframe>
      </div>
    </div>
  )

  const renderCalculator = () => (
    <div className="website-section">
      <h3>React Calculator</h3>
      
      <div className="tech-stack">
        <h4>Technology Stack:</h4>
        <div className="tech-tags">
          <span className="tech-tag react"><SiReact className="tech-icon" />React.js</span>
          <span className="tech-tag javascript"><SiJavascript className="tech-icon" />JavaScript</span>
          <span className="tech-tag css"><SiCss3 className="tech-icon" />CSS3</span>
          <span className="tech-tag calculator"><FaCalculator className="tech-icon" />Interactive</span>
        </div>
      </div>
      
      <p>
        A fully functional calculator built with React.js featuring a modern design
        and smooth animations. The calculator handles basic arithmetic operations
        with a clean, intuitive interface inspired by modern calculator apps.
      </p>
      <p>
        Features include number formatting, error handling, and a responsive design
        that works across all devices. The calculator maintains calculation history
        and provides visual feedback for user interactions.
      </p>
      <div className="calculator-embed">
        <Calculator />
      </div>
    </div>
  )

  return (
    <div
      className='main'
      style={{
        flexDirection: 'column',
        overflow: 'auto',
        height: '100vh',
        paddingBottom: '75%',
        color: '#4B4B4B',
      }}
    >
      <div className="websites-header">
        <h2>My Websites & Web Applications</h2>
        <p>A collection of websites and web applications I've built using different technologies</p>
      </div>
      
      <div className="websites-navigation">
        <button 
          className={`nav-button ${activeSection === 'javascript' ? 'active' : ''}`}
          onClick={() => setActiveSection('javascript')}
        >
          JavaScript Website
        </button>
        <button 
          className={`nav-button ${activeSection === 'calculator' ? 'active' : ''}`}
          onClick={() => setActiveSection('calculator')}
        >
          Calculator
        </button>
      </div>

      <div className="websites-content">
        {activeSection === 'javascript' && renderJavaScriptWebsite()}
        {activeSection === 'calculator' && renderCalculator()}
      </div>
    </div>
  )
}
