import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CollapsibleExample() {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home" className="text-white">
                    daily.dev/Dius
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                            href="https://app.daily.dev/upvoted"
                            className="text-white"
                        >
                            Featured
                        </Nav.Link>
                        <Nav.Link
                            href="https://app.daily.dev/popular"
                            className="text-white"
                        >
                            Popular
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link
                            eventKey={2}
                            href="#Discussions"
                            className="text-white"
                        >
                            Discussions
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleExample;
