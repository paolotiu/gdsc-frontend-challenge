import { Button, Container as C } from '@mui/material';
import { styled } from '@mui/system';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import { ReactComponent as SettingsGirl } from 'components/Icons/SettingsGirl.svg';
import { useState } from 'react';

const Main = styled('main')<{ shouldHaveMargin?: boolean }>(({ shouldHaveMargin }) => ({
  transition: 'all 225ms cubic-bezier(0, 0, 0.2, 1) 0ms',
  marginLeft: shouldHaveMargin && '200px',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
}));

const Container = styled(C)`
  display: grid;
  place-items: center;
  height: 100%;
  flex: 1;
  div {
    margin: auto;
    padding-bottom: 2rem;
    h2 {
      font-size: 40px;
      color: #498af4;
    }
    p {
      max-width: 65ch;
      font-size: 20px;
    }

    .btn-container {
      display: flex;
      gap: 1rem;
      margin-top: 3rem;
      button {
        padding: 0.8rem 1.4rem;
      }
    }
  }
`;

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <Main shouldHaveMargin={isOpen}>
        <Header />

        <Container>
          <div>
            <SettingsGirl />
            <h2>Your dashboard's coming soon 😉</h2>
            <p>
              We’re still working on creating a big experience for you and your organization. For
              now, try adding a past event to your organization’s web page!
            </p>
            <div className="btn-container">
              <Button variant="contained">Create an event</Button>

              <Button variant="outlined">View my webpage</Button>
            </div>
          </div>
        </Container>
      </Main>

      <Sidebar isOpen={isOpen} />
    </div>
  );
};

export default Dashboard;
