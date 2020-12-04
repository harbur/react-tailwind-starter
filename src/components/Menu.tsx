import React from 'react';
import { NavLink } from 'react-router-dom';

function Menu() {
  return (
    <nav className="bg-gray-800 flex items-center h-16">
      <div className="ml-10 flex items-baseline">
        <MenuItem exact to='/' title="Home" />
        <MenuItem to='/movies' title="Movies" />
      </div>
    </nav>
  )
}

interface MenuItemProps { to: string, title: string, exact?: boolean }
function MenuItem({ exact = false, to, title }: MenuItemProps) {
  return <NavLink exact={exact} to={to} className="nav-btn">{title}</NavLink>
}

export default Menu