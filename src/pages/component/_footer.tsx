import { Col, Image, Row } from "react-bootstrap";
import logo from "../../assets/images/logo.png";

function Footer() {
    return (
        <>
            <div className="footer">
                <Col xl={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 1 }} md={12}>
                    <Row>
                        <Col xl={4} className="footer-content">
                            <Image src={logo} className="img-fluid" alt="Logo" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis sed sapien in pretium. </p>
                        </Col>
                        <Col xl={3} className="footer-link">
                            <h4>Products</h4>
                            <ul>
                                <li>Skincare</li>
                                <li>Make Up</li>
                                <li>Shampoo</li>
                            </ul>
                        </Col>
                        <Col xl={3} className="footer-link">
                            <h4>About Us</h4>
                            <ul>
                                <li>Our Shop</li>
                                <li>Career</li>
                                <li>Specialist</li>
                            </ul>
                        </Col>
                        <Col xl={2} className="footer-link">
                            <h4>Support</h4>
                            <ul>
                                <li>Blog</li>
                                <li>Help</li>
                                <li>FAQs</li>
                            </ul>
                        </Col>
                    </Row>
                    <div className="footer-bottom">
                        <p>Copyright &copy; {new Date().getFullYear()} Relaxation Arena.</p>
                    </div>
                </Col>
            </div>
        </>
    );
}

export default Footer;