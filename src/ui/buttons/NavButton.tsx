import React from 'react';
import { NavLink } from 'react-router-dom';

export interface NavButtonProps {
  /**
   * Button content
   */
  label: string,
  /**
   * Click redirects to page
   */
  to: string,
}
function NavButton({ to, label }: NavButtonProps) {
  return (
    <NavLink to={to}><span className="tertiary-btn">{label}</span> </NavLink>
  );
}

export default NavButton 