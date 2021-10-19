import { styled } from '@mui/material';
import Grid from '@mui/material/Grid';
import LoginCard from 'components/LoginCard';
import React from 'react';

const BgMain = styled('div')`
  width: 100%;
  height: 100vh;
  text-align: center;
  position: absolute;
  font-size: 36px;
  background: gray;
  color: #fff;
  background: linear-gradient(90deg, #1a73e8 0%, #498af4 100%);
  clip-path: polygon(0 0, 100% 0, 100% 19%, 0 70%);
`;

const Container = styled(Grid)`
  direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  position: relative;

  background: #f8f9ff;
`;

const Login = () => {
  return (
    <>
      <Container
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh', zIndex: 1 }}
      >
        <BgMain />
        <Grid item xs={3} zIndex="1">
          <LoginCard />
        </Grid>
      </Container>
    </>
  );
};

export default Login;
