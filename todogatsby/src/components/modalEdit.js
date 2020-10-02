import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import 'react-notifications/lib/notifications.css';
import { ToastContainer, toast } from 'react-toastify';
const ModalEdit = (props) => {
  
    const [item, setItem] = useState(props.data);
    const [modalShow, setModalShow] = useState(false);
    const [image, setImage] = useState('');
    const onHide = () => { setModalShow(false) }
    const handleShow = () => setModalShow(true);
    const valueEnter = {
        id: item.id,
        classify: item.classify,
        title: item.title,
        description: item.description,
        datetime: item.datetime,
        image: image.name,
        body: item.body,
        tag: item.tag
    };
    const handleOnchange = (key) => (event) => {
        setItem({ ...item, [key]: event.target.value });
    }
    const UpdateBlog = () => {
        if (valueEnter.classify,valueEnter.title,valueEnter.description,valueEnter.datetime,valueEnter.image,valueEnter.body,valueEnter.tag) {
            props.UpdateBlog(valueEnter);
            
            onHide();
            
        }
        else {
            toast.error('Update fail')
        }
    }
    return (
        <div>
            <button className="btn-edit ml-3" type="button" onClick={handleShow}><i className="fa fa-pencil" aria-hidden="true"></i></button>
            <Modal
                show={modalShow} onHide={onHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Edit Blog
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Label >Classify Blog</Form.Label>
                            <Form.Control as="select" value={item.classify} custom onChange={handleOnchange("classify")}>
                                <option value="">Choose option</option>
                                <option value="sport">Sport</option>
                                <option value="entertainment">Entertainment</option>
                                <option value="information">Information</option>
                                <option value="other">Others</option>

                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text-muted" value={item.title} onChange={handleOnchange("title")} placeholder="title" />
                            <Form.Text className="text-muted">
                                We'll never share content blog with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Desciption</Form.Label>
                            <Form.Control type="text-muted" value={item.description} onChange={handleOnchange("description")} placeholder="description" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="file" onChange={(e) => setImage(e.target.files[0])} placeholder="image" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Body</Form.Label>
                            <Form.Control type="text-muted" value={item.body} onChange={handleOnchange("body")} as="textarea" rows="6" placeholder="body" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Tag</Form.Label>
                            <Form.Control type="text-muted" value={item.tag} onChange={handleOnchange("tag")} placeholder="tag" />
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={UpdateBlog} type="button">
                        Submit
                    </Button>
                    <ToastContainer />
                    <Button variant="danger" onClick={onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>

    )
};
export default ModalEdit;
