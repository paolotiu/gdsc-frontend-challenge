import { Button } from '@mui/material';
import { styled } from '@mui/system';
import Layout from 'components/Layout';
import SearchBar from 'components/SearchBar';
import { ReactComponent as BlankCanvas } from 'components/Icons/BlankCanvas.svg';
const Container = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 2rem 3rem;
  flex: 1;

  .title {
    font-size: 24px;
  }

  .actions {
    margin-top: 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    button {
      padding: 0.625rem 2rem;
      font-size: 14px;
    }
  }

  .empty {
    border-radius: 4px;
    background-color: #f8f9ff;
    flex: 1;
    height: 100%;
    margin-top: 3rem;
    margin-bottom: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding: 3rem;

    h4 {
      font-size: 20px;
      font-weight: 500;
    }
    button {
      padding: 1rem 2rem;
    }
  }
`;

const Event = () => {
  return (
    <Layout>
      <Container>
        <h1 className="title">Events</h1>
        <div className="actions">
          <SearchBar />
          <Button variant="contained">Create an event</Button>
        </div>
        <div className="empty">
          <BlankCanvas />
          <h4>You don't have an event yet!</h4>

          <Button variant="contained">Create an event</Button>
        </div>
      </Container>
    </Layout>
  );
};

export default Event;
