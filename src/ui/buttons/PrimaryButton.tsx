import React from 'react';
import { NavLink } from 'react-router-dom';

interface Props { to: string, title: string }
function PrimaryNavButton({ to, title }: Props) {
  return (
    <NavLink to={to}><button className="primary-btn">{title}</button> </NavLink>
  );
}

export default PrimaryNavButton 