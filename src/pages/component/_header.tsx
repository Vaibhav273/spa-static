import { Col, Container, Nav, Navbar, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
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
                                    <NavLink to={"/"} className="nav-link">Home</NavLink>
                                    <NavLink to={"/about-us"} className="nav-link">About Us</NavLink>
                                    <NavLink to={"/service"} className="nav-link">Services</NavLink>
                                    <NavLink to={"/our-locations"} className="nav-link">Our Locations</NavLink>
                                    <NavLink to={"/contact-us"} className="nav-link contact-button">Contact</NavLink>
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