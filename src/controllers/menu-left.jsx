import '../styling/menu.css';
import '../styling/menu-left.css';

import { menuItems } from '../utils/menu-items'

export default function MainLeft() {
    const menuItems = []
    
    return (<div className='menu-left'>{menuItems.map((e, i) => <img key={e.alt} src={e.src} alt="" className='menu menu-left-item' />)}</div>)
}