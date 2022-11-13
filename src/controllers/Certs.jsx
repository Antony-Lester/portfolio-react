import freeCodeCamp from '../images/certs/js_cert.png'
import playStore from '../images/certs/play_store_cert.png'

import '../styling/Certs.css'

export default function Certs() { 
    return (
        <div className='main border scroll'>
            <a href="https://www.freecodecamp.org/certification/fcc9288cd5c-bf80-4647-928c-882c4fc224c3/javascript-algorithms-and-data-structures">
                    <img className="cert" src={freeCodeCamp} alt="free code camp js cert"/>
            </a>
            <img className="cert" src={playStore} alt="google play store cert" />   
        </div>)
}