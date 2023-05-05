import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../stores/ActionCreator';
import { InputGroup } from 'react-bootstrap';

function ModalComponent(props) {
  const dispatcher = useDispatch();
  const [ user, setUser ] = useState({firstName:'', lastName:'', email:'', company:{title:'Trainee', department:'HR'}, address:{city:'Jakarta'}, gender:'male', image:'https://robohash.org/hicveldicta.png?size=50x50&set=set1'});

  useEffect(() => {

  },[user])

  const handleSubmit = ()=>{
    console.log(user)
    dispatcher(addUser(user))
  }

  return (
    <>
      <Modal
        show={props.show}
        onHide={props.onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add User
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div style={{paddingBottom:10}}>
                <Form.Label>First Name</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    aria-describedby="inputGroupPrepend"
                    required
                    value={user.firstName} defaultValue={''} onChange={(e)=>{setUser({...user, firstName:e.target.value})}}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please Enter Your First Name
                  </Form.Control.Feedback>
                </InputGroup>
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <div style={{paddingBottom:10}}>
                <Form.Label>Last Name</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    aria-describedby="inputGroupPrepend"
                    required
                    value={user.lastName} defaultValue={''} onChange={(e)=>{setUser({...user, lastName:e.target.value})}}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please Enter Your Last Name
                  </Form.Control.Feedback>
                </InputGroup>
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <div style={{paddingBottom:10}}>
                <Form.Label>Email address</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    aria-describedby="inputGroupPrepend"
                    required
                    value={user.email} defaultValue={''} onChange={(e)=>{setUser({...user, email:e.target.value})}}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please Enter Your Email
                  </Form.Control.Feedback>
                </InputGroup>
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button disabled={ (!user.firstName && !user.lastName && !user.email)? true:false} onClick={handleSubmit}>Save</Button>
        </Modal.Footer>
      </Modal>
    </>

  )
}

export default ModalComponent