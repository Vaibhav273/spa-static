import { Col, Row, Image } from "react-bootstrap";

import ifoLeft from "../assets/images/ifo-left.png";
import ifoRight from "../assets/images/ifo-right.png";

import ifoLBottom from "../assets/images/ifo-left-top.png";
import ifoRBottom from "../assets/images/ifo-right-bottom.png";

import spSCImage1 from "../assets/images/sp-image-1.png";
import spSCImage2 from "../assets/images/sp-image-2.png";
// import spSCImage3 from "../assets/images/sp-image-3.png";

import globalImage from "../assets/images/global.png";
import globeTextBg from "../assets/images/globe-text-bg.png";

import storyImage from "../assets/images/story-image.png";
import storyTextBottom from "../assets/images/text-bottom-vector.png";
import storyTextBottom1 from "../assets/images/text-bottom-vector-1.png";

import customerImage from "../assets/images/customer-bg.png";

import expertImage from "../assets/images/expert-body.png";
import expertImage1 from "../assets/images/expert-body-1.png";
import expertTextImage from "../assets/images/export-text-bg.png";

import slider1 from "../assets/images/top-slider-1.png";
import slider2 from "../assets/images/top-slider-2.png";
import slider3 from "../assets/images/top-slider-3.png";

import comingSoon from "../assets/images/coming-soon.png";

import footerTopImage from "../assets/images/footer-top.png";
import { IoCheckmark } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdOutlineArrowRightAlt } from "react-icons/md";

function HomeScreen() {

    return (
        <>
            <Col xl={12} className="top-slider-section">
                <Col xl={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 1 }} md={12}>
                    <Row>
                        <Col xl={4} lg={6} md={12} className="left-side-content">
                            <h4>A whole <span>new world,</span> a whole body care</h4>
                            <Image src={globeTextBg} alt="right" className="img-fluid text-bg" />
                            <p>Immerse yourself in a world of serenity and pampering, where every detail is designed to enhance your well-being and elevate your senses.</p>
                            <Link to="" className="btn btn-custom">Book an appointment today <MdOutlineArrowRightAlt /></Link>
                        </Col>
                        <Col xl={8} lg={6} md={12} className="side-slider-image">
                            <Col lg={12} className="slider-images">
                                <Image src={slider1} className="img-fluid" alt="Slider" />
                                <Image src={slider2} className="img-fluid" alt="Slider" />
                                <Image src={slider1} className="img-fluid" alt="Slider" />
                                <Image src={slider3} className="img-fluid" alt="Slider" />
                            </Col>
                            <Image src={ifoLBottom} alt="right-bottom" className="img-fluid top-left" />
                            <Image src={ifoLBottom} alt="right-bottom" className="img-fluid bottom-left" />
                        </Col>
                    </Row>
                </Col>
            </Col>
            <Col xl={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 1 }} md={12} className="ifo-section">
                <Row>
                    <Col xl={3} className="position-relative">
                        <Image src={ifoLeft} alt="left" className="img-fluid" />
                        <Image src={ifoLBottom} alt="left-top" className="img-fluid top-left" />
                    </Col>
                    <Col xl={6} className="content">
                        <h6>Alive every moment</h6>
                        <h4>India's First Open Foot Massage Centre</h4>
                        <p>Welcome to Relaxation Arena, where indulgence meets rejuvenation, and self-care is elevated to an art form.</p>
                    </Col>
                    <Col xl={3} className="position-relative">
                        <Image src={ifoRight} alt="right" className="img-fluid" />
                        <Image src={ifoRBottom} alt="right-bottom" className="img-fluid right-bottom" />
                    </Col>
                </Row>
            </Col>

            <Col xl={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 1 }} md={12} className="sp-service-section">
                <Row>
                    <Col md={12} className="title">
                        <h3>Special Service from Relaxation Arena</h3>
                        <p> helping you reconnect with your body, mind, and spirit.  Each treatment is a testament to our commitment to excellence, ensuring that every guest receives a personalized experience tailored to their unique needs.</p>
                    </Col>
                    <Col xl={{ span: 8, offset: 2 }} lg={{ span: 10, offset: 1 }} md={12}>
                        <Row>
                            <Col xl={6} className="content">
                                <Image src={spSCImage1} alt="left" className="img-fluid" />
                                <Col xl={12} className="px-4">
                                    <div className="content-text">
                                        <h5>Foot Massage</h5>
                                        <p>A haven where body meets renewal in foot therapy delight. A sanctuary merging luxury and ultimate renewal.</p>
                                        <Link to="">Book Today <MdOutlineArrowRightAlt /></Link>
                                    </div>
                                </Col>
                            </Col>
                            <Col xl={6} className="content">
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

            <Col xl={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 1 }} md={12} className="global-section">
                <Row>
                    <Col lg={4} className="position-relative">
                        <Image src={globalImage} alt="right" className="img-fluid" />
                    </Col>
                    <Col lg={8} className="position-relative global-content">
                        <div className="title">
                            <h4>Find us accross the Globe</h4>
                            <Image src={globeTextBg} alt="right" className="img-fluid text-bg" />
                            <p className="mb-5">Our perfect craftsmanship of ancient therapies perfectly blended with the modern technology is serving the world today.</p>
                        </div>
                        <Row>
                            <Col xl={2} className="position-relative">
                                <Image src={comingSoon} className="img-fluid coming-soon-image" alt="Coming Soon" />
                                <p>DUBAI</p>
                                <Link to="">Call Now <MdOutlineArrowRightAlt /></Link>
                            </Col>
                            <Col xl={2}>
                                <p>DELHI</p>
                                <Link to="">Call Now <MdOutlineArrowRightAlt /></Link>
                            </Col>
                            <Col xl={2}>
                                <p>UDAIPUR</p>
                                <Link to="">Call Now <MdOutlineArrowRightAlt /></Link>
                            </Col>
                            <Col xl={2}>
                                <p>RAIPUR</p>
                                <Link to="">Call Now <MdOutlineArrowRightAlt /></Link>
                            </Col>
                            <Col xl={2}>
                                <p>BILASPUR</p>
                                <Link to="">Call Now <MdOutlineArrowRightAlt /></Link>
                            </Col>
                            <Col xl={2}>
                                <p>BHILAI</p>
                                <Link to="">Call Now <MdOutlineArrowRightAlt /></Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>

            <Col xl={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 1 }} md={12} className="story-section">
                <Row>
                    <Col lg={7} className="position-relative">
                        <Image src={storyImage} alt="right" className="img-fluid" />
                        <Image src={ifoRBottom} alt="left-top" className="img-fluid top-left" />
                    </Col>
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
                </Row>
            </Col>

            <Col xl={12} className="customer-say-section">
                <Row>
                    <Col xl={6}>
                        <div className="slider-testimonial">
                            <h4>Here's what our customers say</h4>
                            <Image src={storyTextBottom1} alt="right-bottom" className="img-fluid text-bottom" />

                            <div className="slider-text">
                                <p>“Had an amazing experience at Relaxation arena, beautiful place, great service, this is the place I move to for weekend relaxation.”</p>
                                <h5>Swadha Mittal</h5>
                                <h6>Customer</h6>
                            </div>
                        </div>
                        <Image src={ifoLBottom} alt="right-bottom" className="img-fluid right-bottom" />
                    </Col>
                    <Col xl={6} className="p-0">
                        <Image src={customerImage} alt="Customer Image" className="img-fluid" />
                    </Col>
                </Row>
            </Col>

            <Col xl={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 1 }} md={12} className="expert-section">
                <Row>
                    <Col xl={6} className="expert-images">
                        <Image src={ifoRBottom} alt="left-top" className="img-fluid top-left" />
                        <Image src={expertImage} alt="right-bottom" className="img-fluid" />
                        <Image src={expertImage1} alt="right-bottom" className="img-fluid" />
                    </Col>
                    <Col xl={6} className="expert-content">
                        <h4>Expert Body care for Your Beautiful Souls</h4>
                        <Image src={expertTextImage} alt="right-bottom" className="img-fluid" />
                        <p>We want our guests to feel a sense of escape from the outside world the moment they step through our doors.</p>
                        <ul>
                            <li><IoCheckmark /> Skilled therapy and experts.</li>
                            <li><IoCheckmark /> Finest natural ingredients.</li>
                            <li><IoCheckmark /> Discover Signature rituals</li>
                            <li><IoCheckmark /> ancient healing practices. </li>
                            <li><IoCheckmark /> modern therapeutic techniques</li>
                        </ul>

                        <Link to="" className="btn btn-custom">Discover More <MdOutlineArrowRightAlt /></Link>
                    </Col>
                </Row>
            </Col>

            <Col xl={12} className="visit-section">
                <Row>
                    <Col xl={6}>
                        <div className="slider-testimonial">
                            <h4>Visit Our Centre and explore the best of you</h4>
                            <p>The design of our spa reflects our desire to provide a serene and inviting atmosphere. From the calming color palette to the soothing soundscape, every element is carefully curated to create an environment that promotes relaxation and introspection. We want our guests to feel a sense of escape from the outside world the moment they step through our doors.</p>
                            <Link to="" className="btn btn-custom">Book an appointment now <MdOutlineArrowRightAlt /></Link>
                        </div>
                        <Image src={ifoLBottom} alt="right-bottom" className="img-fluid top-left" />
                    </Col>
                    <Col xl={6} className="p-0">
                        <Image src={footerTopImage} alt="visit Image" className="img-fluid visit-image" />
                        <Image src={ifoLBottom} alt="right-bottom" className="img-fluid right-bottom" />
                    </Col>
                </Row>
            </Col>
        </>
    );
}

export default HomeScreen;