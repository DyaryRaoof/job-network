import { Form, Button, Container } from 'react-bootstrap';

const Signup = () => (
  <section>
    <Container>
      <h1>Sign up</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  </section>
);

export default Signup;
