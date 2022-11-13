import '../styling/menu.css';
import '../styling/menu-right.css';

import { menuItemsRight } from '../utils/menu-items'
import { Link } from 'react-router-dom';

export default function MainRight() {
    return (<div className='menu-right'>
        {menuItemsRight.map((e, i) => 
        <Link to={e.path}><img key={e.alt + i} src={e.src} alt="" className='menu menu-left-item'/></Link>  
        )}</div>)
}