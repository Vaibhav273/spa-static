import { useEffect, useState } from "react";

import ifoLBottom from "../assets/images/ifo-left-top.png";
import comingSoon from "../assets/images/coming-soon.png";
import globalImage from "../assets/images/global.png";

import CommonBreadcrumb from "./component/_breadcrumb";
import { Col, Row, Image } from "react-bootstrap";
import { Select } from "antd";
import { MdEmail, MdOutlineArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { TbPhoneCall } from "react-icons/tb";
import Slider from "react-slick";

function LocationPage() {
    const [dubaiFrame, setDubaiFrame] = useState(false);
    const [delhiFrame, setDelhiFrame] = useState(false);
    const [udaipurFrame, setUdaipurFrame] = useState(false);
    const [raipurFrame, setRaipurFrame] = useState(false);
    const [bilaspurFrame, setBilaspurFrame] = useState(false);
    const [bhilaiFrame, setBhilaiFrame] = useState(false);

    const onChange = (value: string) => {
        if (value == "1") {
            setDubaiFrame(true);

            setDelhiFrame(false);
            setUdaipurFrame(false);
            setRaipurFrame(false);
            setBhilaiFrame(false);
            setBilaspurFrame(false);
        } else if (value == "2") {
            setDelhiFrame(true);

            setDubaiFrame(false);
            setUdaipurFrame(false);
            setRaipurFrame(false);
            setBhilaiFrame(false);
            setBilaspurFrame(false);
        } else if (value == "3") {
            setUdaipurFrame(true);

            setDubaiFrame(false);
            setDelhiFrame(false);
            setRaipurFrame(false);
            setBhilaiFrame(false);
            setBilaspurFrame(false);
        } else if (value == "4") {
            setRaipurFrame(true);

            setDubaiFrame(false);
            setUdaipurFrame(false);
            setDelhiFrame(false);
            setBhilaiFrame(false);
            setBilaspurFrame(false);
        } else if (value == "5") {
            setBilaspurFrame(true);

            setDubaiFrame(false);
            setUdaipurFrame(false);
            setDelhiFrame(false);
            setRaipurFrame(false);
            setBhilaiFrame(false);
        } else if (value == "6") {
            setBhilaiFrame(true);
            setDubaiFrame(false);
            setUdaipurFrame(false);
            setDelhiFrame(false);
            setRaipurFrame(false);
            setBilaspurFrame(false);
        }
    };
    useEffect(() => {
        setDubaiFrame(true);
    }, []);

    const contactSliderOptions = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        slidesToShow: 2,
        slidesToScroll: 1,
        pauseOnHover: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <>
            <CommonBreadcrumb title="Our Locations" />
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
                            <Col xl={2} lg={4} md={3} className="position-relative">
                                <Image src={comingSoon} className="img-fluid coming-soon-image" alt="Coming Soon" />
                                <p>DUBAI</p>
                                <Link to="">Call Now <MdOutlineArrowRightAlt /></Link>
                            </Col>
                            <Col xl={2} lg={4} md={3}>
                                <p>DELHI</p>
                                <Link to="">Call Now <MdOutlineArrowRightAlt /></Link>
                            </Col>
                            <Col xl={2} lg={4} md={3}>
                                <p>UDAIPUR</p>
                                <Link to="">Call Now <MdOutlineArrowRightAlt /></Link>
                            </Col>
                            <Col xl={2} lg={4} md={3}>
                                <p>RAIPUR</p>
                                <Link to="">Call Now <MdOutlineArrowRightAlt /></Link>
                            </Col>
                            <Col xl={2} lg={4} md={3}>
                                <p>BILASPUR</p>
                                <Link to="">Call Now <MdOutlineArrowRightAlt /></Link>
                            </Col>
                            <Col xl={2} lg={4} md={3}>
                                <p>BHILAI</p>
                                <Link to="">Call Now <MdOutlineArrowRightAlt /></Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>

            <Col xl={12} lg={12} md={12} className="map-section">
                <div className="title text-center">
                    <h4>Find us on maps</h4>
                    <p>Currently showing
                        <Select
                            showSearch
                            defaultValue="1"
                            placeholder="Select a Location"
                            onChange={onChange}
                            options={[
                                {
                                    value: '1',
                                    label: 'Dubai',
                                },
                                {
                                    value: '2',
                                    label: 'Delhi',
                                },
                                {
                                    value: '3',
                                    label: 'Udaipur',
                                },
                                {
                                    value: '4',
                                    label: 'Raipur',
                                },
                                {
                                    value: '5',
                                    label: 'Bilaspur',
                                },
                                {
                                    value: '6',
                                    label: 'Bhilai',
                                },
                            ]}
                        />
                    </p>
                </div>
                {dubaiFrame &&
                    <div className="dubai">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231280.4131880011!2d55.0626800628456!3d25.076242447394776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1705860051577!5m2!1sen!2sin" height="450" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                }
                {delhiFrame &&
                    <div className="delhi">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224096.98009597938!2d76.9284237286891!3d28.64428520930601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1705861041944!5m2!1sen!2sin" height="450" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                }
                {udaipurFrame &&
                    <div className="udaipur">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58039.11276221142!2d73.66367256165309!3d24.608358628732898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e56550a14411%3A0xdbd8c28455b868b0!2sUdaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1705861083978!5m2!1sen!2sin" height="450" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                }
                {raipurFrame &&
                    <div className="raipur">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59491.833905101514!2d81.5778737449901!3d21.261980534061735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dda23be28229%3A0x163ee1204ff9e240!2sRaipur%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1705861103353!5m2!1sen!2sin" height="450" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                }
                {bilaspurFrame &&
                    <div className="bilaspur">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14788.852775086!2d82.1306154661845!3d22.079673661640317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a280b117b9ab6a7%3A0xc6f3f89d9eac7caf!2sBilaspur%2C%20Chhattisgarh%20495001!5e0!3m2!1sen!2sin!4v1705861125335!5m2!1sen!2sin" height="450" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                }
                {bhilaiFrame &&
                    <div className="bhilai">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59518.717525270666!2d81.29687544468709!3d21.195342882919068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a293cccec49ed45%3A0x2b3ff3bd73c91877!2sBhilai%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1705861142230!5m2!1sen!2sin" height="450" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                }
            </Col>
            <Col xl={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 1 }} md={12} className="contact-us-section">
                <Row>
                    <Col xl={6} lg={12} md={12}>
                        <div className="ps-4">
                            <h4>Get In Touch</h4>
                            <p>Experience the ultimate legacy of rituals perfectly blended with the modern technology. Not just an ultimate luxury, a pamper routine.</p>
                        </div>
                        <Col className="px-4 contact-slider">
                            <Slider {...contactSliderOptions}>
                                <div>
                                    <h5>Dubai</h5>
                                    <p><FaLocationDot /> 140 Home Street, Plano</p>
                                    <p><TbPhoneCall /> +1 234 567 890</p>
                                    <p><MdEmail /> info@relaxationareana.com</p>
                                </div>
                                <div>
                                    <h5>Delhi</h5>
                                    <p><FaLocationDot /> 140 Home Street, Plano</p>
                                    <p><TbPhoneCall /> +1 234 567 890</p>
                                    <p><MdEmail /> info@relaxationareana.com</p>
                                </div>
                                <div>
                                    <h5>Udaipur</h5>
                                    <p><FaLocationDot /> 140 Home Street, Plano</p>
                                    <p><TbPhoneCall /> +1 234 567 890</p>
                                    <p><MdEmail /> info@relaxationareana.com</p>
                                </div>
                                <div>
                                    <h5>Raipur</h5>
                                    <p><FaLocationDot /> 140 Home Street, Plano</p>
                                    <p><TbPhoneCall /> +1 234 567 890</p>
                                    <p><MdEmail /> info@relaxationareana.com</p>
                                </div>
                                <div>
                                    <h5>Bilaspur</h5>
                                    <p><FaLocationDot /> 140 Home Street, Plano</p>
                                    <p><TbPhoneCall /> +1 234 567 890</p>
                                    <p><MdEmail /> info@relaxationareana.com</p>
                                </div>
                                <div>
                                    <h5>Bhilai</h5>
                                    <p><FaLocationDot /> 140 Home Street, Plano</p>
                                    <p><TbPhoneCall /> +1 234 567 890</p>
                                    <p><MdEmail /> info@relaxationareana.com</p>
                                </div>
                            </Slider>
                        </Col>
                    </Col>
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
                                    <Col xl={6} className="mb-3">
                                        <input type="email" className="form-control" placeholder="Email" />
                                    </Col>
                                    <Col xl={6} className="mb-3">
                                        <input type="number" className="form-control" placeholder="Mobile No." />
                                    </Col>
                                    <Col xl={12} className="mb-3">
                                        <textarea rows={3} className="form-control" placeholder="Message"></textarea>
                                    </Col>
                                </Row>
                                <Col xl={12} className="text-center">
                                    <button type="submit" className="btn btn-primary">Join Membership <MdOutlineArrowRightAlt /></button>
                                </Col>
                            </form>
                            <Image src={ifoLBottom} alt="right-bottom" className="img-fluid right-bottom" />
                        </div>
                    </Col>
                </Row>
            </Col>
        </>
    );
}

export default LocationPage;