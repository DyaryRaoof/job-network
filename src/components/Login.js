import { Button, Container, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import history from '../history';
import { login } from '../redux/ducks/registration';

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login());
    history.push('/jobs');
  };

  return (
    <section>
      <Container>
        <h1>Login</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We&apos;ll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleLogin}>
            Submit
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default Login;
