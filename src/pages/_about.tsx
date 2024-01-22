import { Col, Row, Image } from "react-bootstrap";

import ifoLeft from "../assets/images/ifo-left.png";
import ifoRight from "../assets/images/ifo-right.png";

import ifoLBottom from "../assets/images/ifo-left-top.png";
import ifoRBottom from "../assets/images/ifo-right-bottom.png";

import spSCImage1 from "../assets/images/sp-image-1.png";
import spSCImage2 from "../assets/images/sp-image-2.png";

import storyTextBottom from "../assets/images/text-bottom-vector.png";
import storyImage from "../assets/images/story-image.png";

import speclist1 from "../assets/images/specialist-1.png";
import socialImage from "../assets/images/socialImage.png";

import { Link } from "react-router-dom";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import CommonBreadcrumb from "./component/_breadcrumb";

function AboutPage() {
    return (
        <>
            <CommonBreadcrumb title="About Us" />
            <Col xl={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 1 }} md={12} className="ifo-section about-ifo-section">
                <Row>
                    <Col xl={3} lg={3} className="position-relative d-flex flex-column align-items-center">
                        <Image src={ifoLeft} alt="left" className="img-fluid" />
                        <Image src={ifoLBottom} alt="left-top" className="img-fluid top-left" />
                    </Col>
                    <Col xl={6} lg={6} className="content">
                        <h6>Alive every moment</h6>
                        <h4>India's First Open Foot Massage Centre</h4>
                        <p>Welcome to Relaxation Arena, where indulgence meets rejuvenation, and self-care is elevated to an art form.</p>
                    </Col>
                    <Col xl={3} lg={3} className="position-relative d-flex flex-column align-items-center">
                        <Image src={ifoRight} alt="right" className="img-fluid" />
                        <Image src={ifoRBottom} alt="right-bottom" className="img-fluid right-bottom" />
                    </Col>
                </Row>
            </Col>
            <div className="about-service-story">
                <Col xl={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 1 }} md={12} className="story-section">
                    <Row>
                        <Col lg={5} className="position-relative">
                            <div className="story-text">
                                <h3>Our Story</h3>
                                <Image src={storyTextBottom} alt="right-bottom" className="img-fluid text-bottom" />
                                <p>Our story begins with a passion for wellness and a deep-rooted commitment to creating a haven where self-care is not just a luxury but a fundamental part of a balanced life.
                                    Relaxation Arena was born out of a vision to offer a sanctuary where individuals could escape the hustle and bustle of everyday life and embark on a transformative journey of rejuvenation.</p>
                                <Link to="" className="btn btn-custom">Read More <MdOutlineArrowRightAlt /></Link>

                                <Image src={ifoLBottom} alt="right-bottom" className="img-fluid right-bottom" />
                            </div>
                            <div className="count-text">
                                <div className="reach-text">
                                    <h4>955 +</h4>
                                    <p>Happy Customer</p>
                                </div>
                                <div className="reach-text">
                                    <h4>5 +</h4>
                                    <p>Locations</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={7} className="position-relative">
                            <Image src={storyImage} alt="right" className="img-fluid" />
                            <Image src={ifoRBottom} alt="left-top" className="img-fluid top-left" />
                        </Col>
                    </Row>
                </Col>
                <Col xl={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 1 }} md={12} className="sp-service-section">
                    <Row>
                        <Col md={12} className="title">
                            <h3>Special Service from Relaxation Arena</h3>
                            <p> helping you reconnect with your foot, mind, and spirit.  Each treatment is a testament to our commitment to excellence, ensuring that every guest receives a personalized experience tailored to their unique needs.</p>
                        </Col>
                        <Col xl={{ span: 8, offset: 2 }} lg={12} md={12}>
                            <Row>
                                <Col xl={6} lg={6} md={6} className="content">
                                    <Image src={spSCImage1} alt="left" className="img-fluid" />
                                    <Col xl={12} className="px-4">
                                        <div className="content-text">
                                            <h5>Foot Massage</h5>
                                            <p>A haven where foot meets renewal in foot massage delight. A sanctuary merging luxury and ultimate renewal.</p>
                                            <Link to="">Book Today <MdOutlineArrowRightAlt /></Link>
                                        </div>
                                    </Col>
                                </Col>
                                <Col xl={6} lg={6} md={6} className="content">
                                    <Image src={spSCImage2} alt="left" className="img-fluid" />
                                    <Col xl={12} className="px-4">
                                        <div className="content-text">
                                            <h5>Head Massage</h5>
                                            <p>Lavish head massage sanctuary offering opulence, tranquility, and personalized rejuvenation bliss.</p>
                                            <Link to="">Book Today <MdOutlineArrowRightAlt /></Link>
                                        </div>
                                    </Col>
                                </Col>
                            </Row>
                        </Col>
                        {/* <Col xl={4} className="content">
                        <Image src={spSCImage3} alt="right" className="img-fluid" />
                        <Col xl={12} className="px-4">
                            <div className="content-text">
                                <h5>Shoulder Massage</h5>
                                <p>Embark on a journey at Serene Shoulders, a retreat blending luxury and revitalization.</p>
                                <Link to="">Book Today <MdOutlineArrowRightAlt /></Link>
                            </div>
                        </Col>
                    </Col> */}
                    </Row>
                </Col>
            </div>
            <Col xl={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 1 }} md={12} className="specialist-section">
                <Row>
                    <Col xl={12} className="content">
                        <h4>Meet Our Specialist</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis sed sapien in pretium. Donec tincidunt, quam vestibulum ultricies egestas.</p>
                    </Col>
                    <Col xl={3} lg={4} md={12}>
                        <Image src={speclist1} alt="left" className="img-fluid" />
                        <Col xl={12} className="px-4">
                            <div className="content-text">
                                <h5>Melisa Lauren</h5>
                                <p>Specialist</p>
                                <Image src={socialImage} className="img-fluid" />
                            </div>
                        </Col>
                    </Col>
                    <Col xl={3} lg={4} md={12}>
                        <Image src={speclist1} alt="left" className="img-fluid" />
                        <Col xl={12} className="px-4">
                            <div className="content-text">
                                <h5>Melisa Lauren</h5>
                                <p>Specialist</p>
                                <Image src={socialImage} className="img-fluid" />
                            </div>
                        </Col>
                    </Col>
                    <Col xl={3} lg={4} md={12}>
                        <Image src={speclist1} alt="left" className="img-fluid" />
                        <Col xl={12} className="px-4">
                            <div className="content-text">
                                <h5>Melisa Lauren</h5>
                                <p>Specialist</p>
                                <Image src={socialImage} className="img-fluid" />
                            </div>
                        </Col>
                    </Col>
                    <Col xl={3} lg={4} md={12}>
                        <Image src={speclist1} alt="left" className="img-fluid" />
                        <Col xl={12} className="px-4">
                            <div className="content-text">
                                <h5>Melisa Lauren</h5>
                                <p>Specialist</p>
                                <Image src={socialImage} className="img-fluid" />
                            </div>
                        </Col>
                    </Col>
                </Row>
            </Col>
        </>
    );
}

export default AboutPage;