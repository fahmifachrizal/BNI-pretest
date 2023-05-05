import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import Container from 'react-bootstrap/Container';

const MainLayout = () => {
  return (
    <div style={{minHeight:'100vh'}}>
      <Navbar />
      <Container className='d-flex' style={{paddingTop:40, paddingBottom:40, minHeight:'100%'}}>
        <Sidebar />
        <Outlet />
      </Container>
      <Footer />
    </div>
  )
}

export default MainLayout