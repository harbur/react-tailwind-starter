import React from 'react';
import { NavLink } from 'react-router-dom';

// Menu at the top with navigation buttons
function Menu() {
  return (
    <nav className="bg-gray-800 flex items-center h-16">
      <div className="ml-10 flex items-baseline">
        <NavButton exact to='/' title="Home" />
        <NavButton to='/movies/' title="Movies" />
      </div>
    </nav>
  )
}

// navigation button on menu
interface NavButtonProps { to: string, title: string, exact?: boolean }
function NavButton({ exact = false, to, title }: NavButtonProps) {
  return <NavLink exact={exact} to={to} className="nav-btn">{title}</NavLink>
}

export default Menu