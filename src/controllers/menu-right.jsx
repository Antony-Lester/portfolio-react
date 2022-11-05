import '../styling/menu.css';
import '../styling/menu-right.css';

import { menuItemsRight } from '../utils/menu-items'

export default function MainRight() {
    return (<div className='menu-right'>{menuItemsRight.map((e, i) => <img key={e.alt} src={e.src} alt="" className='menu menu-right-item' />)}</div>)
}