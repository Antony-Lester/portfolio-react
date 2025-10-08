import '../styling/App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './header';
import Certs from './Certs';
import Calculator from './Calculator';
import Apps from './Apps'
import Servers from './Servers';
import Websites from './Websites';
import Firmware from './Firmware';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route key='root' path='/' element={<></>} />
          <Route key='certs' path='/certs' element={<Certs />} />
          <Route key='calculator' path='/calculator' element={<Calculator />} />
          <Route key='date' path='/dating-app' element={<Apps />} />
          <Route key='servers' path='/servers' element={<Servers />} />
          <Route key='firmware' path='/firmware' element={<Firmware />} />
          <Route key='website' path='/website' element={<Websites />} />
        </Routes>
      </BrowserRouter>
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