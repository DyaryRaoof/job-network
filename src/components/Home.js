import './Home.css';
import {Container, Row, Col, Button} from 'react-bootstrap';


const Home = () => <Container fluid="md">
    <section className="text-center">
        <h2>Job Network</h2>
        <h1>Join the world’s largest startup community</h1>
        <p>
         Experience the startup ecosystem — invest in startups,
         research the fastest-growing companies, and find a job you love
        </p>

        <Row>
            <Col>
            <h1>Talent</h1>
            <p>Apply privately to 130,000+ tech & startup jobs with one application.
                 See salary and equity upfront.</p>
                <Button variant="primary">Find Startup Jobs</Button>
            </Col>
            <Col>
            <h1>Venture</h1>
            <p>Over $1 billion deployed alongside leading venture fund managers with 36% of all top-tier U.S.
                 VC deals funded on Job Network.
            </p>
            <Button variant="primary">Apply to be an investor</Button>
            </Col>
        </Row>
    </section>
</Container>

export default Home