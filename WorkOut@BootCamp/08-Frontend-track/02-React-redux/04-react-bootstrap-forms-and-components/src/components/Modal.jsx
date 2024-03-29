import { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';

const AdModal = () => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowModal(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Modal className='text-dark' show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Daily News</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src="https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/f62f350336924cad7556374f3541d7a5?_a=AQAEufR" width='100%' height='100%' alt="Advertisement" />
                <p>Goodbye Electron. Hello Tauri!</p>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
            </Modal.Footer>
        </Modal>
    );
};

export default AdModal;
