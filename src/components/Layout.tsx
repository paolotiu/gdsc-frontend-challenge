import { useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

interface Props {
  children: React.ReactNode;
}
// This fails on when building in vercel/netlify kinda weird
// @ts-ignore
const Main = styled('main')<{ shouldHaveMargin?: boolean }>(({ shouldHaveMargin }) => ({
  transition: 'all 225ms cubic-bezier(0, 0, 0.2, 1) 0ms',
  marginLeft: shouldHaveMargin && '200px',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
}));

const Layout = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(true);

  const matches = useMediaQuery('(min-width:728px)');

  useEffect(() => {
    if (!matches) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, [matches]);
  return (
    <>
      <Main shouldHaveMargin={matches && isOpen}>
        <Header onMenuClick={() => setIsOpen((p) => !p)} />
        {children}
      </Main>

      <Sidebar isOpen={isOpen} closeSidebar={() => setIsOpen(false)} />
    </>
  );
};

export default Layout;
