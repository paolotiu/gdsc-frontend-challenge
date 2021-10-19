import { styled } from '@mui/system';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import { useState } from 'react';

const Main = styled('main')<{ shouldHaveMargin?: boolean }>(({ shouldHaveMargin }) => ({
  transition: 'all 225ms cubic-bezier(0, 0, 0.2, 1) 0ms',
  marginLeft: shouldHaveMargin && '200px',
}));

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <Main shouldHaveMargin={isOpen}>
        <Header />
      </Main>

      <Sidebar isOpen={isOpen} />
    </div>
  );
};

export default Dashboard;
