import { Button, Card, styled } from '@mui/material';
import React, { ReactElement } from 'react';

interface Props {}

const BgMain = styled('div')`
  width: 100%;
  height: 100vh;
  text-align: center;
  position: absolute;
  font-size: 36px;
  background: gray;
  color: #fff;
  position: relative;
  background: linear-gradient(90deg, #1a73e8 0%, #498af4 100%);
  clip-path: polygon(0 0, 100% 0, 100% 19%, 0 70%);
`;

const BgWhite = styled('div')`
  background: #f8f9ff;
`;

const CenteredCard = styled();

function Login({}: Props): ReactElement {
  return (
    <BgWhite>
      <BgMain>
        <Card></Card>
      </BgMain>
    </BgWhite>
  );
}

export default Login;
