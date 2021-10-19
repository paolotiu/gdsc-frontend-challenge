import { Box, Button, Card, CardContent, FormControl, TextField } from '@mui/material';
import { styled } from '@mui/material';
import { getBlankObject, transformErrorMessages } from 'lib/formHelpers';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';

const Schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const Heading = styled('h1')(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '2rem',
  margin: 0,
  lineHeight: '48px',
  paddingBottom: '1rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
  },
}));

const Container = styled(Card)`
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  width: 465px;
  max-width: 90vw;
  padding: 2rem 1.5rem;
`;

const Content = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: unset !important;
`;

const FormContent = styled(FormControl)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginButton = styled(Button)`
  width: 100%;
  padding: 1rem 2rem;
  text-transform: none;
  margin-top: 2rem;
`;

const Input = styled(TextField)`
  width: 100%;
  margin-top: 16px;
`;

const LoginCard = () => {
  const history = useHistory();

  const [fields, setFields] = useState({
    email: '',
    password: '',
  });

  const [errorMessages, setErrorMessages] = useState({ email: '', password: '' });

  return (
    <Container>
      <Content>
        <Heading>Log in to the Pavilion</Heading>
        <Box
          component="form"
          sx={{ width: '100%' }}
          noValidate
          onSubmit={(e: any) => {
            e.preventDefault();

            // For now this satsifies our needs, but a library would be better later
            // https://react-hook-form.com/
            Schema.validate(fields, { abortEarly: false })
              .then(() => {
                setErrorMessages((prev) => getBlankObject(prev));
                history.push('/dashboard');
              })
              .catch((e: yup.ValidationError) => {
                const messages = transformErrorMessages(e);
                setErrorMessages((prev) => ({ ...getBlankObject(prev), ...messages }));
              });
          }}
        >
          <FormContent>
            <Input
              error={!!errorMessages.email}
              label="Organization Email"
              type="email"
              helperText={errorMessages.email}
              required
              value={fields.email}
              onChange={(e) => setFields((prev) => ({ ...prev, email: e.target.value }))}
            />
            <Input
              error={!!errorMessages.password}
              helperText={errorMessages.password}
              label="Password"
              type="password"
              required
              value={fields.password}
              onChange={(e) => setFields((prev) => ({ ...prev, password: e.target.value }))}
            />
            <LoginButton variant="contained" type="submit">
              Log in
            </LoginButton>
          </FormContent>
        </Box>
      </Content>
    </Container>
  );
};

export default LoginCard;
