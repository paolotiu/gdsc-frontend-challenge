import { styled } from '@mui/system';
import Layout from 'components/Layout';
import React from 'react';

const Container = styled('div')`
  flex: 1;
  display: grid;
  place-items: center;

  div {
    display: grid;
    place-items: center;
  }
`;
const Settings = () => {
  return (
    <Layout>
      <Container>
        <div>
          <img src="/tools.png" width="25%" alt="tools" />
          <h2>Hi :)</h2>
        </div>
      </Container>
    </Layout>
  );
};

export default Settings;
