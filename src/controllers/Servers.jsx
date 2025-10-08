import { useState, useEffect } from 'react'
import '../styling/Servers.css'
import backend from '../images/team/backend.png'
import learning from '../images/team/learning.png'
import scope from '../images/team/scope.png'

export default function Servers() {
  const [activeTab, setActiveTab] = useState('api')
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

  const renderAPI = () => (
    <div className="server-section">
      <h2>Complete CRUD RESTful API</h2>
      <p>
        This project was built using JavaScript to run on Node.js, using
        Express as the endpoint, and PostgreSQL for the database. Jest was
        used for unit testing prior to the CI/CD pipeline.
      </p>
      <p>
        The project was built to demonstrate my ability to create a RESTful
        API using correct industry practices, for example{' '}
        <a
          href='https://github.com/Antony-Lester/backend-news/pull/7'
          target='_blank'
          rel='noopener noreferrer'
          className="repo-link"
        >
          Pull Requests
        </a>
        {' and '}
        <a
          href='https://github.com/Antony-Lester/backend-news/blob/main/__tests__/utils.test.js'
          target='_blank'
          rel='noopener noreferrer'
          className="repo-link"
        >
          Testing
        </a>
        .
      </p>
      <p>
        I am no longer hosting this project, but the code is available
        for public viewing.
      </p>
      
      <div className="repo-links">
        <a
          href='https://github.com/Antony-Lester/backend-news'
          target='_blank'
          rel='noopener noreferrer'
          className="repo-link"
        >
          RESTful API Code Repository
        </a>
      </div>

      <div className="features-list">
        <h3>API Features:</h3>
        <ul>
          <li>Complete CRUD operations (Create, Read, Update, Delete)</li>
          <li>RESTful endpoint design</li>
          <li>PostgreSQL database integration</li>
          <li>Comprehensive unit testing with Jest</li>
          <li>Error handling and validation</li>
          <li>Industry-standard project structure</li>
        </ul>
      </div>
    </div>
  )

  const renderTeamBackend = () => (
    <div className="server-section">
      <h2>Find n' Dine Backend (Team Project)</h2>
      <p>
        This was the backend component of our <strong>team project</strong> "Find n' Dine", 
        a five-day collaborative project that tested our project management skills 
        while implementing industry best practices.
      </p>
      <p>
        The backend was built using Node.js and Express, with PostgreSQL for data persistence.
        We implemented Test-Driven Development (TDD), pair programming, and followed 
        Agile methodology throughout the development process.
      </p>
      
      <div className="repo-links">
        <a
          href='https://github.com/Antony-Lester/find-and-dine-backend'
          target='_blank'
          rel='noopener noreferrer'
          className="repo-link"
        >
          Team Project Backend Repository
        </a>
        <a
          href='https://github.com/Antony-Lester/find-and-dine-frontend'
          target='_blank'
          rel='noopener noreferrer'
          className="repo-link"
        >
          Team Project Frontend Repository
        </a>
      </div>

      <div className="image-gallery">
        <div className="image-item">
          <img 
            src={backend} 
            alt="Backend architecture diagram" 
            onClick={() => openFullscreen(backend, "Backend architecture diagram")}
            style={{ cursor: 'pointer' }}
          />
          <p>Backend Architecture</p>
        </div>
        <div className="image-item">
          <img 
            src={learning} 
            alt="Learning outcomes from team project" 
            onClick={() => openFullscreen(learning, "Learning outcomes from team project")}
            style={{ cursor: 'pointer' }}
          />
          <p>Learning Outcomes</p>
        </div>
        <div className="image-item">
          <img 
            src={scope} 
            alt="Project scope and requirements" 
            onClick={() => openFullscreen(scope, "Project scope and requirements")}
            style={{ cursor: 'pointer' }}
          />
          <p>Project Scope</p>
        </div>
      </div>

      <div className="features-list">
        <h3>Team Project Backend Features:</h3>
        <ul>
          <li>RESTful API for restaurant and user data</li>
          <li>PostgreSQL database with complex relationships</li>
          <li>Authentication and authorization systems</li>
          <li>Comprehensive testing suite</li>
          <li>Git workflow with pull requests and code reviews</li>
          <li>Agile development methodology</li>
          <li>Pair programming implementation</li>
          <li>Test-Driven Development (TDD)</li>
        </ul>
      </div>
    </div>
  )

  return (
    <div
      className='main'
      style={{
        display: 'flex',
        flexDirection: 'column',
        overflow: 'auto',
        height: '100vh',
        paddingBottom: '75%',
        color: '#4B4B4B',
      }}
    >
      <div className="servers-header">
        <h1>Server Development</h1>
        <p>Backend services and API development projects</p>
      </div>
      
      <div className="servers-navigation">
        <button 
          className={`nav-button ${activeTab === 'api' ? 'active' : ''}`}
          onClick={() => setActiveTab('api')}
        >
          RESTful API
        </button>
        <button 
          className={`nav-button ${activeTab === 'team' ? 'active' : ''}`}
          onClick={() => setActiveTab('team')}
        >
          Team Project Backend
        </button>
      </div>

      <div className="servers-content">
        {activeTab === 'api' && renderAPI()}
        {activeTab === 'team' && renderTeamBackend()}
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