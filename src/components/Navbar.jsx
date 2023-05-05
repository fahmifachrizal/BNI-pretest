import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { promptAdd } from '../stores/ActionCreator';

function NavbarComponent() {
  const dispather = useDispatch();
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#" className="me-auto">User Management System</Navbar.Brand>
        <Form className="d-flex d-flex justify-content-end">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="success">Search</Button>
          <Button variant="primary" size="lg" style={{marginLeft:20, width:'100%'}} onClick={()=>{dispather(promptAdd())}}>
            Add User
          </Button>
        </Form>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent