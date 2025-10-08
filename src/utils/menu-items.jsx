//personal
import cert from '../images/menu/cert.svg'
import playStore from '../images/menu/play.svg'
//mini projects
import terminal from '../images/menu/terminal.svg'
import minesweeper from '../images/menu/minesweeper.svg'
import dove from '../images/menu/dove.svg'

/*

{ src: terminal, alt: 'retro-terminal', path:``},
{ src: minesweeper, alt: 'minesweeper', path:`` },
{ src: collatz, alt: 'collatz-conjecture', path:`` },
{ src: dove, alt: 'dove-animation', path:`` },

*/


export const menuItemsLeft = [
    { src: cert, alt: 'Certificates', path:`/certs`}
]
    
export const menuItemsRight = [
  { src: playStore, alt: 'Apps', path: `/dating-app` },
  { src: terminal, alt: 'Servers', path: `/servers` },
  { src: minesweeper, alt: 'Firmware', path: `/firmware` },
  { src: dove, alt: 'Websites', path: `/website` },
]