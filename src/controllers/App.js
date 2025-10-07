import '../styling/App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './header';
import Certs from './Certs';
import Footer from './footer';
import Linkin from './Linkin';
import Converter from './Converter';
import Calculator from './Calculator';
import Team from './Team'
import DateApp from './Date'
import Servers from './Servers';
import Website from './Website';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route key='root' path='/' element={<></>} />
          <Route key='certs' path='/certs' element={<Certs />} />
          <Route key='linkedin' path='/linkedin' element={<Linkin />} />
          <Route key='converter' path='/converter' element={<Converter />} />
          <Route key='calculator' path='/calculator' element={<Calculator />} />
          <Route key='team' path='/find-n-dine' element={<Team />} />
          <Route key='date' path='/dating-app' element={<DateApp />} />
          <Route key='servers' path='/servers' element={<Servers />} />
          <Route key='website' path='/website' element={<Website />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App;

//look at on hover change description in footer
//minesweeper
//terminal
//solo-project (front and back end)
//team-project
//dove??



//TODO SETUP DEPLOYMENT

//SETUP GIT REPO

//TODO CHECK RESPONSIVENESS

//TODO add functions/pages