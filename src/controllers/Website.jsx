import '../styling/Website.css'

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
      <div className='website-container'>
        <iframe
          src='https://portfolio-f4791.web.app'
          title='Embedded Site'
          width='100%' // Use 100% to make it responsive and fit the container's width
          height='100%' // Adjust the height to maintain a fair size, e.g., 75% of the viewport height
          style={{ border: 'none', maxWidth: '100vw', maxHeight: '100vh' }} // Ensure it doesn't exceed the viewport's dimensions// Ensure it doesn't exceed the viewport's dimensions
        ></iframe>
      </div>
    </div>
  )
}
