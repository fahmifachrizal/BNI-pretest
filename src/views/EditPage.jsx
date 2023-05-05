import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { editUsers, putUser } from '../stores/ActionCreator';

function EditPage() {
  const dispatcher = useDispatch();
  const { editUser } = useSelector((state) => state.uxReducer);
  const [ user, setUser ] = useState({});
  const [ userId, setUserId ] =useState(null)

  useEffect(()=>{
    setUser(editUser)
  },[editUser])

  return (
    <>
    <div className=''>

      <Form className="">
          <Form.Control
            type="text"
            placeholder="Input user id"
            className="me-2"
            aria-label="User Id"
            value={userId}
            onChange={(e)=>setUserId(e.target.value)}
          />
        <Button disabled={userId?false:true} onClick={()=>dispatcher(editUsers(userId))}>Get User</Button>
      </Form>
      
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
      <Button disabled={ (!editUser.firstName || !editUser.lastName || !editUser.email)? true:false} onClick={()=>{dispatcher(putUser(userId, user))}}>Save</Button>
    </div>
    </>

  )
}

export default EditPage