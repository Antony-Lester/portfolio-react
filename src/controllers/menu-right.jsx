import '../styling/menu.css';
import '../styling/menu-right.css';

import { menuItems } from '../utils/menu-items'

export default function MainRight() {
    const menuItems = []
    return (<div className='menu-right'>{menuItems.map((e, i) => <img key={e.alt} src={e.src} alt="" className='menu menu-right-item' />)}</div>)
}