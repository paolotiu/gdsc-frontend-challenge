import { Button, Container as C } from '@mui/material';
import { styled } from '@mui/system';
import { ReactComponent as SettingsGirl } from 'components/Icons/SettingsGirl.svg';
import Layout from 'components/Layout';

const Container = styled(C)`
  display: grid;
  place-items: center;
  height: 100%;
  flex: 1;
  padding: 3rem 1rem;
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
  return (
    <Layout>
      <Container>
        <div>
          <SettingsGirl />
          <h2>Your dashboard's coming soon 😉</h2>
          <p>
            We’re still working on creating a big experience for you and your organization. For now,
            try adding a past event to your organization’s web page!
          </p>
          <div className="btn-container">
            <Button variant="contained">Create an event</Button>

            <Button variant="outlined">View my webpage</Button>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Dashboard;
