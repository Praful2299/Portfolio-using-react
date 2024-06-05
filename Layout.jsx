import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav_bar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

const Layout=()=>{
    return(
        <>
        <Container className='layoutback' fluid>
      <Row>
        <Col>
        <Nav_bar/>
        <Outlet/>
        <Footer/>
        </Col>
      </Row>
    </Container>
        </>
    )
}
export default Layout;