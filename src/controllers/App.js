import '../styling/App.css';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Header from './header';
import MenuLeft from './menu-left';
import Certs from './Certs';
import MenuRight from './menu-right';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <MenuLeft/>
      <BrowserRouter>
        <Routes>
              <Route path='/' element={<Certs/>}/>
              <Route path='/certs' element={<Certs/>} />
        </Routes>
      </BrowserRouter>
      <MenuRight/>
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