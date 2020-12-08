import React from 'react';
import { NavLink } from 'react-router-dom';

export interface PrimaryNavButtonProps {
  /**
   * Button content
   */
  label: string
  /**
   * Click redirects to page
   */
  to: string,
}

function PrimaryNavButton({ to, label }: PrimaryNavButtonProps) {
  return (
    <NavLink to={to}><button className="primary-btn">{label}</button> </NavLink>
  );
}

export default PrimaryNavButton 