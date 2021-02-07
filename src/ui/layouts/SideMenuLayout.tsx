import React from 'react';
import { NavLink } from 'react-router-dom';

interface SideMenuLayoutProps { children: any }
export default function SideMenuLayout({ children }: SideMenuLayoutProps) {
  return (
    <div className="flex h-screen">
      <Menu />
      <div className="p-4">
        {children}
      </div>
    </div>
  )
}

// Menu at the top with navigation buttons
function Menu() {
  return (
    <nav className="bg-gray-900 w-32 flex flex-col h-full pt-10">
        <NavButton exact to='/' title="Home" />
        <NavButton to='/movies/' title="Movies" />
    </nav>
  )
}

// navigation button on menu
interface NavButtonProps { to: string, title: string, exact?: boolean }
function NavButton({ exact = false, to, title }: NavButtonProps) {
  return <NavLink exact={exact} to={to} className="
  px-6 py-0.5 rounded-md text-sm font-medium text-gray-300
  hover:text-white hover:bg-gray-700
  focus:outline-none focus:text-white focus:bg-gray-700
">{title}</NavLink>
}
