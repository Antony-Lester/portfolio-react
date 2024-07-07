export default function Servers() {
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
          <h1 style={{ textAlign: 'center' }}>Servers</h1>
          <h4>A complete CRUD RESTFUL API</h4>
          <p>
            This project was built using JavaScript, To Run on Node.js, Using
            Express as the EndPoint, and Postgres SQL for the database. Jest was
            used for unit testing. prior to CI/CD pipeline.
            <br />
            <br />
            The project was built to demonstrate my ability to create a RESTful
            API. Using Correct Industry Practices,For example{' '}
            <a
              href='https://github.com/Antony-Lester/backend-news/pull/7'
              target='_blank'
              rel='noopener noreferrer'
            >
              Pull Request's,
            </a>
            {'  '}
            <a
              href='https://github.com/Antony-Lester/backend-news/blob/main/__tests__/utils.test.js'
              target='_blank'
              rel='noopener noreferrer'
            >
              Testing.
            </a>
            {'  '}
            <br />
            <br />I am no longer hosting this project, but the code is available
            for public viewing.
            <br /> <br />
            <a
              href='https://github.com/Antony-Lester/backend-news/pull/7'
              target='_blank'
              rel='noopener noreferrer'
            >
              Code Repository
            </a>
          </p>
          <h4>Stock Market Data Capture for Machine Learning</h4>
          <p>
            This project was built using TypeScript due to the Advantages of
            Static Typing, Designed to Run on Node.js, Being Fed from{' '}
            <a
              href='https://docs.alpaca.markets/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Alpaca API
            </a>{' '}
            and{' '}
            <a
              href='https://www.postgresql.org/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Postgres SQL
            </a>{' '}
            for the database.
            <br />
            <br />
            <a
              href='https://github.com/Antony-Lester/stocks-postgres'
              target='_blank'
              rel='noopener noreferrer'
            >
              Code Repository
            </a>{' '}
            <br />
            <br />
            <p>
              Due to the nested nature of the data, I decided to use a Migrate
              from a SQL database to a NoSQL database, using{' '}
              <a
                href='https://www.mongodb.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                MongoDb
              </a>{' '}
              . This was to avoid the need to create multiple tables for
              singular data points, and to allow for easier querying of the
              data.
              <br /> <br />
              On review found the development speed increased, the schema was
              more flexible, and the data was easier to manage.
              <br /> <br />
              During development, I found limitations with Node.js for data
              heavy tasks being that it runs on googles open source v8 engine
              which has a engrained heap memory limit of 4GB. <br /> <br />
              I decided to maintain the core code control with Node/Typescript
              and spawn off Python scripts (Multi Core & Multi Threading) when
              needed for intensive tasks.
              <br /> <br />
              After Data Metrics Calculation, I use{' '}
              <a
                href='https://www.tensorflow.org/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Tensorflow
              </a>{' '}
              to create prediction models. for each financial instrument, I
              store the results in a MongoDb database, and automaticly use &
              update them when required.
              <br /> <br />
              To Monitor the System I have created a simple Dashboard Graphical
              User Interface GUI, using React Currently I am not serving
              sensitive data outsie of my local network. <br /> <br />
              <a
                href='http://antonylester.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                the GUI can be viewed by entering the pin code 123321
              </a>{' '}
              <br />
              SSL is not currently enabled on this site, so you may get a
              warning.
              <br /> <br />
              Due to the nature of the subject, I am unable to provide the code
              to view.
            </p>
          </p>
        </div>
      </div>
    )}