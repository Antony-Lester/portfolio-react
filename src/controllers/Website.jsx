export default function Website() {
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
      <h2 style={{ color: '#4B4B4B', textAlign: 'center' }}>
        Vanilla JavaScript Website
      </h2>
      <p style={{ color: '#4B4B4B', textAlign: 'center' }}>
        This website was built using Vanilla JavaScript, HTML5, CSS3 and hosted
        on Firebase (google) <br /> The website was designed to be a portfolio
        of my work. It is a mutiple page website with complex anamations during
        page transitions.
        <br /> <br />
        In Comparison to This Portfolio Website, That was built using the{' '}
        <a href='https://react.dev/' target='_blank' rel='noopener noreferrer'>
          React.js
        </a>{' '}
        framework, It is maily a single page web app with minimal animations.
        <br /> <br />
        I have enbedded the website below for you to view (inside my new
        portfolio).
        <br />
        <br /> It can be viewed directly{' '}
        <a
          href='https://portfolio-f4791.web.app'
          target='_blank'
          rel='noopener noreferrer'
        >
          here.
        </a>{' '}
        <br />
        <br /> I am most pleased with the Projects Button open/close animation
        <br />
        <br />
      </p>
      <iframe
        src='https://portfolio-f4791.web.app'
        title='Embedded Site'
        width='90%'
        height='180%'
        style={{ border: 'none' }}
      ></iframe>
    </div>
  )
}
