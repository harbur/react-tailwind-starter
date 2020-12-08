import React from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  /**
   * Button content
   */
  label: string
  /**
   * Click redirects to page
   */
  to: string,
}
function PrimaryNavButton({ to, label }: Props) {
  return (
    <NavLink to={to}><button className="primary-btn">{label}</button> </NavLink>
  );
}

export default PrimaryNavButton 