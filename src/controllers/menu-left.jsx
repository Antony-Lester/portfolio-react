import '../styling/menu.css';
import '../styling/menu-left.css';

import { menuItemsLeft } from '../utils/menu-items'
import { Link } from 'react-router-dom';

export default function MainLeft() {
    return (<div className='menu-left'>{menuItemsLeft.map((e, i) => 
        <Link key={e.alt} to={e.path}><img key={e.alt} src={e.src} alt="" className='menu menu-left-item'/></Link>  
        )}</div>)
}