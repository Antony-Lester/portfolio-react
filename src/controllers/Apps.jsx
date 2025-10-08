import '../styling/Apps.css'
import { useState, useEffect } from 'react'
import { SiKotlin, SiReact, SiTypescript, SiRedux, SiExpo } from 'react-icons/si'
import { FaAndroid, FaMobile } from 'react-icons/fa'
import login from '../images/dating/amore_login.png'
import mvp from '../images/dating/mvp.png'
import swipe1 from '../images/dating/swipe1.png'
import swipe2 from '../images/dating/swipe2.png'
import northcoders from '../images/team/logo-northcoders.png'
import main from '../images/team/main.png'
import team from '../images/team/team.png'
import strengths from '../images/team/strengths.png'
import vision from '../images/team/vision.png'
import frontend from '../images/team/frontend.png'

export default function Apps() {
  const [activeTab, setActiveTab] = useState('dating')
  const [fullscreenImage, setFullscreenImage] = useState(null)

  const openFullscreen = (imageSrc, imageAlt) => {
    setFullscreenImage({ src: imageSrc, alt: imageAlt })
  }

  const closeFullscreen = () => {
    setFullscreenImage(null)
  }

  // Handle Escape key to close fullscreen
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && fullscreenImage) {
        closeFullscreen()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [fullscreenImage])

  const renderDatingApp = () => (
    <div className="app-section">
      <h2>Native Android Dating App</h2>
      
      <div className="tech-stack">
        <h4>Technology Stack:</h4>
        <div className="tech-tags">
          <span className="tech-tag kotlin"><SiKotlin className="tech-icon" />Kotlin</span>
          <span className="tech-tag android"><FaAndroid className="tech-icon" />Android</span>
          <span className="tech-tag mobile"><FaMobile className="tech-icon" />Mobile Native</span>
        </div>
      </div>
      
      <p>
        This dating app was built using the Kotlin programming language, being
        the successor to Java. For time management, the decision was made to
        mothball while partly complete and move to cross-platform development.
      </p>
      <p>
        The displayed coloring is an Android standard placeholder for the final
        design.
      </p>
      <p>
        This app was developed prior to learning correct industry practices
        regarding version management, hence the majority of code is not available
        for public viewing at this time.
      </p>
      <a
        href='https://github.com/Antony-Lester/amore'
        target='_blank'
        rel='noopener noreferrer'
        className="repo-link"
      >
        Android App Code Repository
      </a>
      
      <div className='video-container'>
        <iframe
          width='100%'
          height='450'
          src='https://www.youtube.com/embed/cv_OB9Uoi0k'
          title='Android Dating App Demo'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </div>

      <div className="image-gallery">
        <div className="image-item">
          <img 
            src={login} 
            alt="Dating app login screen" 
            onClick={() => openFullscreen(login, "Dating app login screen")}
            style={{ cursor: 'pointer' }}
          />
          <p>Login Screen</p>
        </div>
        <div className="image-item">
          <img 
            src={mvp} 
            alt="Dating app MVP features" 
            onClick={() => openFullscreen(mvp, "Dating app MVP features")}
            style={{ cursor: 'pointer' }}
          />
          <p>MVP Features</p>
        </div>
        <div className="image-item">
          <img 
            src={swipe1} 
            alt="Dating app swipe interface 1" 
            onClick={() => openFullscreen(swipe1, "Dating app swipe interface 1")}
            style={{ cursor: 'pointer' }}
          />
          <p>Swipe Interface</p>
        </div>
        <div className="image-item">
          <img 
            src={swipe2} 
            alt="Dating app swipe interface 2" 
            onClick={() => openFullscreen(swipe2, "Dating app swipe interface 2")}
            style={{ cursor: 'pointer' }}
          />
          <p>Match Interface</p>
        </div>
      </div>
    </div>
  )

  const renderTeamProject = () => (
    <div className="app-section">
      <div className="team-header">
        <img src={northcoders} alt="Northcoders bootcamp logo" className="northcoders-logo" />
        <h2>Team Project: "Find n' Dine"</h2>
        <h3>A convenient cross-platform app for curious foodies</h3>
      </div>
      
      <div className="tech-stack">
        <h4>Technology Stack:</h4>
        <div className="tech-tags">
          <span className="tech-tag react"><SiReact className="tech-icon" />React Native</span>
          <span className="tech-tag typescript"><SiTypescript className="tech-icon" />TypeScript</span>
          <span className="tech-tag expo"><SiExpo className="tech-icon" />Expo</span>
          <span className="tech-tag redux"><SiRedux className="tech-icon" />Redux</span>
          <span className="tech-tag mobile"><FaMobile className="tech-icon" />Cross-Platform</span>
        </div>
      </div>
      
      <div className="team-description">
        <p>
          This project was a time-limited (five-day) <strong>team project</strong>, used to test
          our project management skills while showing the best industry practices
          of Agile methodology, Test-Driven Development (TDD), pair programming,
          Scrum, spiking, and documentation.
        </p>
        
        <div className="repo-links">
          <a
            href='https://github.com/Antony-Lester/find-and-dine-frontend'
            target='_blank'
            rel='noopener noreferrer'
            className="repo-link"
          >
            Frontend Code Repository
          </a>
          <a
            href='https://github.com/Antony-Lester/find-and-dine-backend'
            target='_blank'
            rel='noopener noreferrer'
            className="repo-link"
          >
            Backend Code Repository
          </a>
        </div>
      </div>

      <div className="image-gallery">
        <div className="image-item">
          <img 
            src={main} 
            alt="Find n' Dine main app interface" 
            onClick={() => openFullscreen(main, "Find n' Dine main app interface")}
            style={{ cursor: 'pointer' }}
          />
          <p>Main App Interface</p>
        </div>
        <div className="image-item">
          <img 
            src={team} 
            alt="Team project overview" 
            onClick={() => openFullscreen(team, "Team project overview")}
            style={{ cursor: 'pointer' }}
          />
          <p>Team Project Overview</p>
        </div>
        <div className="image-item">
          <img 
            src={strengths} 
            alt="Team strengths analysis" 
            onClick={() => openFullscreen(strengths, "Team strengths analysis")}
            style={{ cursor: 'pointer' }}
          />
          <p>Team Strengths</p>
        </div>
        <div className="image-item">
          <img 
            src={vision} 
            alt="Project vision and goals" 
            onClick={() => openFullscreen(vision, "Project vision and goals")}
            style={{ cursor: 'pointer' }}
          />
          <p>Project Vision</p>
        </div>
        <div className="image-item">
          <img 
            src={frontend} 
            alt="Frontend architecture diagram" 
            onClick={() => openFullscreen(frontend, "Frontend architecture diagram")}
            style={{ cursor: 'pointer' }}
          />
          <p>Frontend Architecture</p>
        </div>
      </div>

      <div className='video-container'>
        <iframe
          src='https://www.youtube.com/embed/6QSYPx_6oE0?feature=oembed'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
          title="Find n' Dine Demo Video | Northcoders Project Presentations"
        ></iframe>
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
      <div className="apps-header">
        <h1>Mobile Applications</h1>
        <p>A showcase of mobile applications I've developed</p>
      </div>
      
      <div className="apps-navigation">
        <button 
          className={`nav-button ${activeTab === 'dating' ? 'active' : ''}`}
          onClick={() => setActiveTab('dating')}
        >
          Android Dating App
        </button>
        <button 
          className={`nav-button ${activeTab === 'team' ? 'active' : ''}`}
          onClick={() => setActiveTab('team')}
        >
          Find n' Dine (Team Project)
        </button>
      </div>

      <div className="apps-content">
        {activeTab === 'dating' && renderDatingApp()}
        {activeTab === 'team' && renderTeamProject()}
      </div>

      {/* Fullscreen Image Modal */}
      {fullscreenImage && (
        <div className="fullscreen-modal" onClick={closeFullscreen}>
          <div className="fullscreen-content">
            <img 
              src={fullscreenImage.src} 
              alt={fullscreenImage.alt}
              onClick={(e) => e.stopPropagation()}
            />
            <button className="close-button" onClick={closeFullscreen}>
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
