import '../styling/menu.css';
import '../styling/menu-left.css';

import { menuItemsLeft } from '../utils/menu-items'

export default function MainLeft() {
    return (<div className='menu-left'>{menuItemsLeft.map((e, i) => 
        <img key={e.alt + i} src={e.src} alt="" className='menu menu-left-item'/>   
        )}</div>)
}