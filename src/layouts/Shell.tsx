import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Menu from 'components/Menu';
import Transition from './Transition';

interface Props { children: any }
function Shell({ children }: Props) {
  const [showProfile, setShowProfile] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className="flex flex-col h-screen">
      <Menu />
      <div className="p-2">
        {children}
      </div>
    </div>
  )
}

export default Shell