import React, { useEffect, useState } from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, editUsers, getUsers, promptDelete } from '../stores/ActionCreator';
import Modal from '../components/Modal';
import Delete from '../components/Delete';
import AddUser from '../components/AddUser'
import listActions from '../stores/ActionType';


function Home() {
  const dispather = useDispatch();
  const { users, showModal, showDelete, showAdd } = useSelector((state) => state.uxReducer);
  const [ loading, setLoading ] = useState(false);
  const [ deleteId, setDeleteId ] = useState(null);
  
  useEffect(() => {
    setLoading(true);
    dispather(getUsers());
  }, [])

  useEffect(() => {
    setLoading(false);
  }, [users])

  return (
    <>
      <MDBTable align='middle'>
        <MDBTableHead>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Title</th>
            <th scope='col'>Gender</th>
            <th scope='col'>Location</th>
            <th scope='col'>Actions</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
        
        { 
          loading ? <tr><td>Loading...</td></tr> :
          users.map((user, index) => (
            <tr key={index}>
              <td>
                <div className='d-flex align-items-center'>
                  <img
                    src={user.image}
                    alt=''
                    style={{ width: '45px', height: '45px' }}
                    className='rounded-circle'
                  />
                  <div className='ms-3'>
                    <p className='fw-bold mb-1'>{user.firstName} {user.lastName.replace(/\w/g,'*')}</p>
                    <p className='text-muted mb-0'>{user.email}</p>
                  </div>
                </div>
              </td>
              <td>
                <p className='fw-normal mb-1'>{user.company.title}</p>
                <p className='text-muted mb-0'>{user.company.department}</p>
              </td>
              <td>
                <MDBBadge color={user.gender=='male'?'info':'danger'} pill>
                  {user.gender}
                </MDBBadge>
              </td>
              <td>{user.address.city}</td>
              <td>
                <MDBBtn color='warning' rounded size='sm' style={{marginRight:10}}
                  onClick={() => {
                    dispather(editUsers(user.id))
                  }
                  }>
                  Edit
                </MDBBtn>
                <MDBBtn color='danger' rounded size='sm' 
                  onClick={() => {
                    dispather(promptDelete(user.id))
                  }
                  }>
                  Delete
                </MDBBtn>
              </td>
            </tr>
          )) 
        }
          
        </MDBTableBody>
      </MDBTable>
      <Modal 
        show={showModal}
        onHide={() => dispather(closeModal())}
      />
      <Delete 
        show={showDelete}
        onHide={() => dispather(closeModal())}
      />

      <AddUser 
        show={showAdd}
        onHide={() => dispather(closeModal())}
      />
    </>
  )
}

export default Home