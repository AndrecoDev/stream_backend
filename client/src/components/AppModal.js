import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import useForm from '../hooks/useForm';

const AppModal = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const modal = () => {
        fetch('api/stream/camera', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: inputsModal.name,
                streamUrl: inputsModal.streamUrl
            })
        }).then(x => x.text())
            .then(x => {
                if (x === 'stream url exists') {
                    return alert('Error: stream url exists')
                }else if (x === 'Camera add successfully'){
                    return alert('Camera add successfully !!')
                }
            })
    }

    const { inputs: inputsModal, handleInputChange: handleImputChangeModal, handleSubmit: handleSubmitModal } = useForm(modal)

    return (
        <>
            <Button variant="success" className="camera_add" onClick={handleShow}>
                + Add Camera
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Camera info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmitModal}>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Camera name</Form.Label>
                            <Form.Control type="text" name="name" placeholder="Enter name" style={styles.app_input} required="required" onChange={handleImputChangeModal} value={inputsModal.name} />
                        </Form.Group>

                        <Form.Group controlId="formBasicStream">
                            <Form.Label>Stream url</Form.Label>
                            <Form.Control type="text" name="streamUrl" placeholder="Enter url" required="required" style={styles.app_input} onChange={handleImputChangeModal} value={inputsModal.streamUrl} />
                            <Form.Text className="text-muted">
                                example: rtsp://admin:admin123@192.168.29.39:554/streaming/channels/301
                            </Form.Text>
                        </Form.Group>
                        <Modal.Footer>
                            <Button variant="warning" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="success" type="submit">
                                Save
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>

            </Modal>
        </>
    )
}
const styles = {
    app_input: {
        color: '#000',
        'input[type="text"]': "#000"
    }
}


export default AppModal;