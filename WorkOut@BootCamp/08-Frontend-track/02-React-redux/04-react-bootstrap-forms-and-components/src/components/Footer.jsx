import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4">
            <Container>
                <Row>
                    <Col md={4} className="mb-4 mb-md-0">
                        <h5>About Me</h5>
                        <p>I&apos;m a Front-End Developer and aspiring Software Engineer, born in the Philippines and having lived and worked in various places in Mindanao. I&apos;m a passionate coder, driven by my love of tech innovation.</p>
                    </Col>
                    <Col md={4} className="mb-4 mb-md-0">
                        <h5>Contact Me</h5>
                        <p>Email: montenegrodiussantos1@gmail.com</p>
                        <p>Phone: +639704607775</p>
                    </Col>
                    <Col md={4}>
                        <h5>Follow Me</h5>
                        <ul className="list-inline">
                            <li className="list-inline-item"><a href="https://www.facebook.com/Dreaultimate/">Facebook</a></li>
                            <li className="list-inline-item"><a href="https://www.linkedin.com/in/dius-santos-iii-montenegro-86707428b/">LinkedIn</a></li>
                            <li className="list-inline-item"><a href="https://github.com/DreaUltimate">Github</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <div className="text-center py-3 bg-secondary">
                <Container>
                    <p className="m-0">© 2024 daily.dev/Dius. All rights reserved.</p>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;
