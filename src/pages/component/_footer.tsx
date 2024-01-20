import { Col, Image, Row } from "react-bootstrap";
import logo from "../../assets/images/logo.png";

function Footer() {
    return (
        <>
            <div className="footer">
                <Col xl={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 1 }} md={12}>
                    <Row>
                        <Col xl={5} className="footer-content">
                            <Image src={logo} className="img-fluid" alt="Logo" />
                            <p>Immerse yourself in a world of serenity and pampering, where every detail is designed to enhance your well-being and elevate your senses.</p>
                        </Col>
                        <Col xl={2} className="footer-link"></Col>
                        <Col xl={3} lg={6} className="footer-link">
                            <h4>About Us</h4>
                            <ul>
                                <li>Contact Us</li>
                                <li>Email Us</li>
                                <li>Our Center</li>
                            </ul>
                        </Col>
                        <Col xl={2} lg={6} className="footer-link">
                            <h4>Support</h4>
                            <ul>
                                <li>0771 4060063</li>
                                <li>info@relaxationareana.com</li>
                            </ul>
                        </Col>
                    </Row>
                    <div className="footer-bottom">
                        <p>Copyright &copy; {new Date().getFullYear()} Relaxation Arena. Developed by - Younicorn.club</p>
                    </div>
                </Col>
            </div>
        </>
    );
}

export default Footer;