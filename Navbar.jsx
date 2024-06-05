import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaHome } from "react-icons/fa"
import { FaRegUser } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { FaNewspaper } from "react-icons/fa6";
const Nav_bar=()=>{
    return(
        <>
        <Navbar  expand="lg" className='navbaroutline' >
      <Container>
        <Navbar.Brand href="home">
            <img style={{color:"white" , height:"50px", width:"50px"}} src="https://raw.githubusercontent.com/soumyajit4419/Portfolio/24d955cf6cd4ce5ff8a9a8071f0c87dfa4aaacec/src/Assets/avatar.svg"  alt="LoGo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='navbarlinks' >
            <Nav.Link style={{color:"white" , marginLeft:"20px"}} href="home"><FaHome/> Home</Nav.Link>
            <Nav.Link style={{color:"white" , marginLeft:"20px"}} href="about"><FaRegUser/> About</Nav.Link>
            <Nav.Link style={{color:"white" , marginLeft:"20px"}} href="project"><GoProjectSymlink/> Projects</Nav.Link>
            <Nav.Link style={{color:"white" , marginLeft:"20px"}} href="resume"><FaNewspaper/> Resume</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        <span className='socialnav'>
        <img style={{height:"20px",width:"20px",marginRight:"10px"}} src="./src/images/facebook.png"  alt="fb" />
        <img style={{height:"20px",width:"20px",marginRight:"10px"}} src="./src/images/instagram.png"  alt="insta" />
        <img style={{height:"20px",width:"20px",marginRight:"10px"}} src="./src/images/linkedin.png"  alt="linkedin" />
        </span>
      </Container>
    </Navbar>
        </>
    )
}
export default Nav_bar;