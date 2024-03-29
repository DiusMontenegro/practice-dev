import { Container } from 'react-bootstrap';
import { Navbar, Carousel, Form, Modal, Cards, Footer } from './imports';

function App() {
  return (
    <>
      <Navbar />
      <Modal/>
      <Container className="mt-4">
        <Carousel/>
        <Cards/>
        <Form/>
      </Container>
      <Footer/>
    </>
  );
}

export default App;
