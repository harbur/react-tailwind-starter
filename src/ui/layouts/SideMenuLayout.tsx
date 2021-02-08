import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdLocalMovies } from 'react-icons/md';
import { MdHome } from 'react-icons/md';

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
      <NavButton icon={<MdHome className="text-gray-500"/>} exact to='/' title="Home" />
      <NavButton icon={<MdLocalMovies className="text-gray-500"/>} to='/movies/' title="Movies" />
    </nav>
  )
}

// navigation button on menu
interface NavButtonProps { to: string, title: string, exact?: boolean, icon?: any}
function NavButton({ exact = false, to, title, icon }: NavButtonProps) {
  return <NavLink activeClassName="bg-gray-800" exact={exact} to={to} className="
  my-0.5 mx-2 px-3 py-0.5 rounded-md text-sm font-medium text-gray-300
  hover:text-white hover:bg-gray-800 flex items-center
  focus:outline-none focus:text-white focus:bg-gray-800 space-x-1
">{icon}<span>{title}</span></NavLink>
}
