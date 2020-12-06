import React from 'react';
import { NavLink } from 'react-router-dom';

interface Props { to: string, title: string }
function NavButton({ to, title }: Props) {
  return (
    <NavLink to={to}><span className="tertiary-btn">{title}</span> </NavLink>
  );
}

export default NavButton 