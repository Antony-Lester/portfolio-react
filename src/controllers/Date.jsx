import '../styling/Date.css'
import login from '../images/dating/amore_login.png'
import mvp from '../images/dating/mvp.png'
export default function DateApp() {
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
      <h1 style={{ color: '#4B4B4B' }}> Native Android App</h1>
      <p style={{ color: '#4B4B4B' }}>
        This dating app was built using The Kotlin Programming Language, being
        the successor to Java. For time management, the decision was made to
        mothball while partly complete and move to cross-platform development.
        <br /> <br />
        Displayed colouring is a Android Standard placeholder for the final
        design.
        <br /> <br />
        This app was developed prior to learning correct industry practices
        regarding version management, hense the majority code is not available
        for public viewing at this time.
      </p>
      <a
        href='https://github.com/Antony-Lester/amore'
        target='_blank'
        rel='noopener noreferrer'
      >
        Front-end Code Git Repository
      </a>
      <br />
      <br />
      <div className='video-container'>
        <iframe
          width='100%'
          height='450'
          src='https://www.youtube.com/embed/cv_OB9Uoi0k'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        ></iframe>
      </div>
      <br /> <br />
      <h5 style={{ color: '#4B4B4B' }}> Colouring of Final Design</h5>
      <img className='screenshot-container' src={login} alt='amore login' />
      <h1 style={{ color: '#4B4B4B' }}> Cross Platform App</h1>
      <p style={{ color: '#4B4B4B' }}>
        I Decided to move to cross-platform development using React Native
        Framework, <br />
        With TypeScript rather then JavaScript due to static typing enhancing
        code quality and understandablity by enabling type checking at compile
        time, and reducing runtime errors compared to JavaScript.
        <br /> <br />
        To avoid the need to configure seperate build processes and compatable
        componets for each platform. (Android, iOS and Web) I decided the Expo
        build platform would be approprate
        <br />
        <br />
        This project is still in development, Currently paused while I focus on
        other projects.
      </p>
      <a
        href='https://github.com/Antony-Lester/Dating-App'
        target='_blank'
        rel='noopener noreferrer'
      >
        Front-end Code Git Repository
      </a>
      <img className='cert' src={mvp} alt='northcoders bootcamp cert' />
    </div>
  )
}
