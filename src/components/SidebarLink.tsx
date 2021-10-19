import { styled } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  label: string;
  /**
   * In the form of '/<path>'
   */
  href: `/${string}`;
}

const StyledNavLink = styled(NavLink)`
  padding: 1.6rem 2rem;
  text-decoration: none;
  color: #fff;
`;

const SidebarLink = ({ label, href }: Props) => {
  return (
    <StyledNavLink
      to={href}
      activeStyle={{
        backgroundColor: '#1A73E8',
      }}
    >
      {label}
    </StyledNavLink>
  );
};

export default SidebarLink;
