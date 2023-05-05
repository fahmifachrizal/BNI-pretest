import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteUser } from '../stores/ActionCreator';
import { useDispatch, useSelector } from 'react-redux';

function Example(props) {
  const dispather = useDispatch();
  const { deleteId } = useSelector((state) => state.uxReducer);
  
  return (
    <>
      <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>Warning, Are you sure to delete this user?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Cancel
          </Button>
          <Button variant="danger" onClick={()=>dispather(deleteUser(deleteId))}>
            Delete User
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;