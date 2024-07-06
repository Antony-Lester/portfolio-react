import northcoders from '../images/team/logo-northcoders.png'
import '../styling/Team.css'

import backend from '../images/team/backend.png'
import frontend from '../images/team/frontend.png'
import learning from '../images/team/learning.png'
import main from '../images/team/main.png'
import scope from '../images/team/scope.png'
import strengths from '../images/team/strengths.png'
import team from '../images/team/team.png'
import vision from '../images/team/vision.png'

export default function Team() {
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
      <div className='slide' style={{ textAlign: 'center' }}>
        <img style={{ height: '30%' }} src={northcoders} alt='northcoders' />
        <h3 style={{ textAlign: 'center' }}>Team Project: "Find n' Dine"</h3>
        <h4>A convenient Cross Platform App for curious foodies.</h4>
        <p>
          This Project Was a Time Limited (Five Day) Team Project, Used to test
          our project magement skills, while showing the best industry practices
          of Agile Methodology, Test-Driven-Development (TDD), pair programming,
          Scrum, Spiking, & Documentation.
        </p>
        <p>
          <a
            href='https://github.com/Antony-Lester/find-and-dine-frontend'
            target='_blank'
            rel='noopener noreferrer'
          >
            Front-end Code Git Repository
          </a>
          <br />
          <a
            href='https://github.com/Antony-Lester/find-and-dine-backend'
            target='_blank'
            rel='noopener noreferrer'
          >
            Back-end Code Git Repository
          </a>
        </p>
      </div>
      <img className='slide' src={main} alt='' />
      <img className='slide' src={team} alt='' />
      <img className='slide' src={strengths} alt='' />
      <img className='slide' src={vision} alt='' />
      <img className='slide' src={frontend} alt='' />
      <img className='slide' src={backend} alt='' />
      <div className='slide'>
        <iframe
          style={{
            width: '100%',
            height: '100%',
          }}
          src='https://www.youtube.com/embed/6QSYPx_6oE0?feature=oembed&amp;autoplay=1'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
          title="Find n' Dine Demo Video | Northcoders Project Presentations"
        ></iframe>
      </div>
      <img className='slide' src={learning} alt='' />
      <img className='slide' src={scope} alt='' />
    </div>
  )
}
