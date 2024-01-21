import { Col, Row, Image } from "react-bootstrap";
import CommonBreadcrumb from "./component/_breadcrumb";

import spSCImage1 from "../assets/images/sp-image-1.png";
import spSCImage2 from "../assets/images/sp-image-2.png";

import storyTextBottom1 from "../assets/images/text-bottom-vector-1.png";
import ifoLBottom from "../assets/images/ifo-left-top.png";

import customerImage from "../assets/images/customer-bg.png";

import globalImage from "../assets/images/global.png";
import comingSoon from "../assets/images/coming-soon.png";

import { Link } from "react-router-dom";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Slider from "react-slick";
import { IoCheckmark } from "react-icons/io5";

function ServicePage() {
    const settingTestimonial = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        arrows: true,
    }

    return (
        <>
            <CommonBreadcrumb title="Our Services" />
            <div className="service-services">
                <Col xl={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 1 }} md={12} className="sp-service-section">
                    <Row>
                        <Col md={12} className="title">
                            <h3>Special Service from Relaxation Arena</h3>
                            <p> helping you reconnect with your foot, mind, and spirit.  Each treatment is a testament to our commitment to excellence, ensuring that every guest receives a personalized experience tailored to their unique needs.</p>
                        </Col>
                        <Col xl={{ span: 8, offset: 2 }} lg={12} md={12}>
                            <Row>
                                <Col xl={6} lg={6} className="content">
                                    <Image src={spSCImage1} alt="left" className="img-fluid" />
                                    <Col xl={12} className="px-4">
                                        <div className="content-text">
                                            <h5>Foot Massage</h5>
                                            <p>A haven where foot meets renewal in foot massage delight. A sanctuary merging luxury and ultimate renewal.</p>
                                            <Link to="">Book Today <MdOutlineArrowRightAlt /></Link>
                                        </div>
                                    </Col>
                                </Col>
                                <Col xl={6} lg={6} className="content">
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
                    </Row>
                </Col>
                <Col xl={12} className="customer-say-section">
                    <Row>
                        <Col xl={6} className="d-flex flex-column justify-content-center">
                            <div className="slider-testimonial">
                                <h4>Here's what our customers say</h4>
                                <Image src={storyTextBottom1} alt="right-bottom" className="img-fluid text-bottom" />

                                <Slider {...settingTestimonial}>
                                    <div className="slider-text">
                                        <p>“Had an amazing experience at Relaxation arena, beautiful place, great service, this is the place I move to for weekend relaxation.”</p>
                                        <h5>Swadha Mittal</h5>
                                        <h6>Customer</h6>
                                    </div>
                                    <div className="slider-text">
                                        <p>“Enjoyed my foot massage here after my family trip, must say was the most relaxing hour of my journey.”</p>
                                        <h5>Sumedh Agarwal</h5>
                                        <h6>Customer</h6>
                                    </div>
                                    <div className="slider-text">
                                        <p>“Relaxation Arena is beautiful place to relax with professional massage providers and beautiful ambience. Trusted by my whole family. Highly recommended for everyone.”</p>
                                        <h5>Sarfaraaz</h5>
                                        <h6>Customer</h6>
                                    </div>
                                </Slider>
                            </div>
                            <Image src={ifoLBottom} alt="right-bottom" className="img-fluid right-bottom" />
                        </Col>
                        <Col xl={6} className="p-0">
                            <Image src={customerImage} alt="Customer Image" className="img-fluid" />
                        </Col>
                    </Row>
                </Col>
            </div>
            <Col xl={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 1 }} md={12} className="global-section">
                <Row>
                    <Col lg={4} className="position-relative d-flex flex-column align-items-center">
                        <Image src={globalImage} alt="right" className="img-fluid" />
                    </Col>
                    <Col lg={8} className="position-relative global-content">
                        <div className="title">
                            <h4>Find us accross the Globe</h4>
                            {/* <Image src={globeTextBg} alt="right" className="img-fluid text-bg" /> */}
                            <p className="mb-5">Our perfect craftsmanship of ancient therapies perfectly blended with the modern technology is serving the world today.</p>
                        </div>
                        <Row>
                            <Col xl={2} lg={4} className="position-relative">
                                <Image src={comingSoon} className="img-fluid coming-soon-image" alt="Coming Soon" />
                                <p>DUBAI</p>
                                <Link to="">Call Now <MdOutlineArrowRightAlt /></Link>
                            </Col>
                            <Col xl={2} lg={4}>
                                <p>DELHI</p>
                                <Link to="">Call Now <MdOutlineArrowRightAlt /></Link>
                            </Col>
                            <Col xl={2} lg={4}>
                                <p>UDAIPUR</p>
                                <Link to="">Call Now <MdOutlineArrowRightAlt /></Link>
                            </Col>
                            <Col xl={2} lg={4}>
                                <p>RAIPUR</p>
                                <Link to="">Call Now <MdOutlineArrowRightAlt /></Link>
                            </Col>
                            <Col xl={2} lg={4}>
                                <p>BILASPUR</p>
                                <Link to="">Call Now <MdOutlineArrowRightAlt /></Link>
                            </Col>
                            <Col xl={2} lg={4}>
                                <p>BHILAI</p>
                                <Link to="">Call Now <MdOutlineArrowRightAlt /></Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Col xl={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 1 }} md={12} className="membership-section">
                <Row>
                    <Col xl={6} lg={12} md={12}>
                        <div className="form-section">
                            <Image src={ifoLBottom} alt="right-bottom" className="img-fluid top-left" />
                            <form>
                                <Row>
                                    <Col xl={6} className="mb-3">
                                        <input
                                            type="text"
                                            placeholder="First Name"
                                            className="form-control"
                                        />
                                    </Col>
                                    <Col xl={6} className="mb-3">
                                        <input
                                            type="text"
                                            placeholder="Last Name"
                                            className="form-control"
                                        />
                                    </Col>
                                    <Col xl={6} className="form-group">
                                        <input type="email" className="form-control" placeholder="Email" />
                                    </Col>
                                    <Col xl={6} className="form-group">
                                        <input type="number" className="form-control" placeholder="Mobile No." />
                                    </Col>
                                </Row>
                                <Col xl={12} className="text-center">
                                    <button type="submit" className="btn btn-primary">Join Membership <MdOutlineArrowRightAlt /></button>
                                </Col>
                            </form>
                            <Image src={ifoLBottom} alt="right-bottom" className="img-fluid right-bottom" />
                        </div>
                    </Col>
                    <Col xl={6} lg={12} md={12}>
                        <div className="ps-4">
                        <h4>Join Membership</h4>
                        <p>Experience the ultimate legacy of rituals perfectly blended with the modern technology. Not just an ultimate luxury, a pamper routine.</p>

                        <ul>
                            <li><IoCheckmark /> Annual membership discounts.</li>
                            <li><IoCheckmark /> Time-to-time care</li>
                            <li><IoCheckmark /> All natural ingredients</li>
                            <li><IoCheckmark /> Family Discounts</li>
                            <li><IoCheckmark /> Routine massages</li>
                        </ul>
                        </div>
                    </Col>
                </Row>
            </Col>
        </>
    )
}
export default ServicePage;