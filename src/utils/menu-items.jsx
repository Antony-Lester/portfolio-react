//personal
import cert from '../images/menu/cert.svg'
import linkedin from '../images/menu/linkedin.svg'
import playStore from '../images/menu/play.svg'
//mini projects
import terminal from '../images/menu/terminal.svg'
import minesweeper from '../images/menu/minesweeper.svg'
import collatz from '../images/menu/collatz.svg'
import dove from '../images/menu/dove.svg'
import convert from '../images/menu/convert.svg'
import calculator from '../images/menu/calculator.svg'
//major projects
import project from '../images/menu/team-project.svg'

/*

{ src: terminal, alt: 'retro-terminal', path:``},
{ src: minesweeper, alt: 'minesweeper', path:`` },
{ src: collatz, alt: 'collatz-conjecture', path:`` },
{ src: dove, alt: 'dove-animation', path:`` },

*/


export const menuItemsLeft = [
    { src: cert, alt: 'Certificates', path:`/certs`},
    { src: linkedin, alt: 'LinkedIn', path: `/linkedin` },
    { src: project, alt: 'Team Project', path:`/find-n-dine` }
]
    
export const menuItemsRight = [
  { src: playStore, alt: 'Dating App', path: `/dating-app` },
  { src: terminal, alt: 'Servers', path: `/servers` },
  { src: dove, alt: 'Website', path: `/website` },
  { src: convert, alt: 'Converter', path: `/converter` },
  { src: calculator, alt: 'Calculator', path: `/calculator` },
]