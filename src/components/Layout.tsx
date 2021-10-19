import { styled } from '@mui/system';
import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

interface Props {
  children: React.ReactNode;
}
const Main = styled('main')<{ shouldHaveMargin?: boolean }>(({ shouldHaveMargin }) => ({
  transition: 'all 225ms cubic-bezier(0, 0, 0.2, 1) 0ms',
  marginLeft: shouldHaveMargin && '200px',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
}));

const Layout = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <Main shouldHaveMargin={isOpen}>
        <Header />
        {children}
      </Main>

      <Sidebar isOpen={isOpen} />
    </>
  );
};

export default Layout;
