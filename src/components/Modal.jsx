import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { putUser } from '../stores/ActionCreator';

function ModalComponent(props) {
  const dispatcher = useDispatch();
  const { editUser } = useSelector((state) => state.uxReducer);
  const [ user, setUser ] = useState({});

  useEffect(() => {
    setUser({...editUser})
  }, [editUser])

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit User
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <div style={{paddingBottom:10}}>
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="First Name" value={user.firstName} defaultValue={''} onChange={(e)=>{setUser({...user, firstName:e.target.value})}}/>
            </div>
            <div style={{paddingBottom:10}}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Last Name" value={user.lastName} defaultValue={''} onChange={(e)=>{setUser({...user, lastName:e.target.value})}}/>
            </div>
            <div style={{paddingBottom:10}}>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" value={user.email} defaultValue={''} onChange={(e)=>{setUser({...user, email:e.target.value})}}/>
            </div>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button disabled={ (!editUser.firstName || !editUser.lastName || !editUser.email)? true:false} onClick={()=>{dispatcher(putUser(user.id, user))}}>Save</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalComponent