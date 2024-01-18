import { Col, Container, Nav, Navbar, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";


function Header() {
    return (
        <>
            <div className="top-bg-color">
                <Col xl={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 1 }} md={12}>
                    <Navbar expand="xl">
                        <Container fluid className="px-0">
                            <Navbar.Brand href="#">
                                <Image src={logo} alt="Relaxation Arena" className="img-fluid" />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ms-auto">
                                    <Link to={"/home"} className="nav-link active">Home</Link>
                                    <Link to={"/"} className="nav-link">About Us</Link>
                                    <Link to={"/"} className="nav-link">Services</Link>
                                    <Link to={"/"} className="nav-link">Our Locations</Link>
                                    <Link to={"/"} className="nav-link contact-button">Contact</Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Col>
            </div>
        </>
    );
}

export default Header;