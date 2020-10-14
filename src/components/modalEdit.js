import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import 'react-notifications/lib/notifications.css';
import { ToastContainer } from 'react-toastify';
const ModalEdit = (props) => {

    const [item, setItem] = useState(props.data);
    const [modalShow, setModalShow] = useState(false);
    const [validated, setValidated] = useState(false);
    const [images, setImage] = useState('');
    const onHide = () => { setModalShow(false) }
    const handleShow = () => setModalShow(true);
    const valueEnter = {
        id: item.id,
        classify: item.classify,
        title: item.title,
        description: item.description,
        datetime: item.datetime,
        image: images.name,
        body: item.body,
        tag: item.tag
    };
    const handleOnchange = (key) => (event) => {
        setItem({ ...item, [key]: event.target.value });
    }
    const UpdateBlog = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            
            e.stopPropagation();
            setValidated(true);
        }
        
        else{
            props.UpdateBlog(valueEnter);
            onHide();
            setValidated(false)
        }
           
       
    }
    return (
        <div>
            <Button className="btn-edit" type="button" onClick={handleShow}><i className="fa fa-pencil" aria-hidden="true"></i></Button>
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
                <Form noValidate validated={validated} onSubmit={UpdateBlog}>
                <Modal.Body>
                    
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Label >Classify Blog</Form.Label>
                            <Form.Control required as="select" value={item.classify} custom onChange={handleOnchange("classify")}>
                                <option value="">Choose option</option>
                                <option value="sport">Sport</option>
                                <option value="entertainment">Entertainment</option>
                                <option value="information">Information</option>
                                <option value="other">Others</option>

                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid state.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control required type="text-muted" value={item.title} onChange={handleOnchange("title")} placeholder="title" />
                            <Form.Text className="text-muted">
                                We'll never share content blog with anyone else.
                            </Form.Text>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid state.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Desciption</Form.Label>
                            <Form.Control required type="text-muted" value={item.description} onChange={handleOnchange("description")} placeholder="description" />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid state.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Image</Form.Label>
                            <Form.Control required type="file" onChange={(e) => setImage(e.target.files[0])} placeholder="image" />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid state.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Body</Form.Label>
                            <Form.Control required type="text-muted" value={item.body} onChange={handleOnchange("body")} as="textarea" rows="6" placeholder="body" />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid state.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Tag</Form.Label>
                            <Form.Control required type="text-muted" value={item.tag} onChange={handleOnchange("tag")} placeholder="tag" />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid state.
                            </Form.Control.Feedback>
                        </Form.Group>

                   
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <ToastContainer />
                    <Button variant="danger" onClick={onHide}>Close</Button>
                </Modal.Footer>
                </Form>
            </Modal>
        </div>

    )
};
export default React.memo(ModalEdit);
