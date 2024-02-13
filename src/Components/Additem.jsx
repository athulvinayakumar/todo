import { Modal } from 'react-bootstrap';
import React, { useContext, useState } from 'react'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { addItemAPI } from '../Services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { additemContext } from '../Context/ContextShare';

function Additem() {
    const { addItemResponse, setAddItemResponse } = useContext(additemContext)
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => {
        setShow(false);
    };
    const [addDetails, setAddDetails] = useState({
        title: "",
        description: ""
    });
    console.log(addDetails);

    const handleAdd = async (e) => {
        e.preventDefault()
        const { title, description } = addDetails
        if (!title || !description) {
            toast.warning('Please Fill the form Completely')
        } else {

            const reqBody = new FormData()
            reqBody.append("title", title)
            reqBody.append("description", description)

            const reqHeader = {
                "Content-Type": "application/json",
            }
            const result = await addItemAPI(reqBody, reqHeader)
            console.log(result);
            if (result.status === 200) {
                console.log(result.data);
                toast.success("item added Succesfully")
                handleClose()
                setAddItemResponse(result.data)
            }
            else {
                toast.error(result.response.data);
            }
        }


    }
    return (
        <>
            <button className="btn text-white mt-3 btn-primary" onClick={handleShow} style={{ width: '100%' }}>New Task</button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size='md'
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className='mb-3' controlId="validationCustom02">
                        <Form.Control type="text" placeholder='Enter title' value={addDetails.title}
                            onChange={(e) => setAddDetails({ ...addDetails, title: e.target.value })} />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId="validationCustom02">
                        <textarea className="form-control" placeholder='Description' value={addDetails.description}
                            onChange={(e) => setAddDetails({ ...addDetails, description: e.target.value })} rows="4" ></textarea>
                    </Form.Group>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary">
                        Cancel
                    </Button>
                    <Button variant="success" onClick={handleAdd} >update</Button>
                </Modal.Footer>
                <ToastContainer position='top-center' theme='colored' autoClose={1000} />
            </Modal>
        </>
    )
}

export default Additem