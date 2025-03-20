import {NavLink} from 'react-router-dom'
import './Header.css'

export const Header = () => {
  return (
    <div className='nav'>
        <div className='logo'>
          SWIGGY</div>
        <ul className='nav-ul'>
            <li><NavLink to="/">Home</NavLink>
            </li>
            <li><NavLink to="/menu-card">MenuCard</NavLink>
            </li>
            <li><NavLink to="/view cart">ViewCart</NavLink>
            </li>
        </ul>
    </div>
  )
}
