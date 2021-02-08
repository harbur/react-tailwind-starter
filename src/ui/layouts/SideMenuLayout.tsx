import React from 'react';
import { MdHome, MdLocalMovies } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import SplitPane from 'react-split-pane';
import { useLocalStorage } from 'react-use';

interface SideMenuLayoutProps { children: any }
export default function SideMenuLayout({ children }: SideMenuLayoutProps) {
  const [value, setValue] = useLocalStorage('sidemenu.size', 200);
  return (
    <div className="flex h-screen">
      <SplitPane onDragFinished={setValue} split="vertical" minSize={130} defaultSize={value} maxSize={400}>
        <Menu />
        <div className="p-4">
          {children}
        </div>
      </SplitPane>
    </div>
  )
}

// Menu at the top with navigation buttons
function Menu() {
  return (
    <nav className="bg-gray-900 w-full flex flex-col h-full pt-10 text-gray-500">
      <NavButton icon={<MdHome className="text-current" />} exact to='/' title="Home" />
      <NavButton icon={<MdLocalMovies className="text-current" />} to='/movies/' title="Movies" />
    </nav>
  )
}

// navigation button on menu
interface NavButtonProps { to: string, title: string, exact?: boolean, icon?: any }
function NavButton({ exact = false, to, title, icon }: NavButtonProps) {
  return <NavLink activeClassName="text-blue-400  bg-gray-800" exact={exact} to={to} className="
  my-1 mx-4 px-3 py-2 rounded-lg text-sm font-medium
 hover:bg-gray-800 flex items-center
  focus:outline-none space-x-1
">{icon}<span className="text-gray-300">{title}</span></NavLink>
}
