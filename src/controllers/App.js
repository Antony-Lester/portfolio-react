import '../styling/App.css';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Header from './header';
import MenuLeft from './menu-left';
import Certs from './Certs';
import MenuRight from './menu-right';
import Footer from './footer';
import Linkin from './Linkin';
import Converter from './Converter';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <MenuLeft/>
      
        <Routes>
          <Route path='/' element={<></>}/>
          <Route path='/certs' element={<Certs/>}/>
          <Route path='/linkedin' element={<Linkin/>}/>
          <Route path='/converter' element={<Converter/>}/>
        </Routes>
        <MenuRight />
        </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;

//look at on hover change description in footer

//linkedin
//minesweeper
//terminal
//solo-project (front and back end)
//team-project
//dove??



//TODO SETUP DEPLOYMENT

//SETUP GIT REPO

//TODO CHECK RESPONSIVENESS

//TODO add functions/pages