import React from 'react'
import { Row, Col } from 'react-bootstrap';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

function Footer() {
    return (
        <div className='footer'>
            <div className="containerOne">
                <Row className="footerRowOne">
                    <Col md={6} className="footerColOne">
                        <h5>Subscribe to Black World History via Email</h5>
                        <p>Subscribe to our website and enjoy unlimited and constant update on Black world History.</p>
                        <form action="submit">
                            <input placeholder='Email Address' type="text" />
                            <button>SUBSCRIBE</button>
                        </form>
                    </Col>
                    <Col md={2} className="footerColOne">
                        <h5>Services</h5>
                        <ul>
                            <li>Blog</li>
                            <li>Trending</li>
                            <li>Latest Information</li>
                            <li>Category</li>
                        </ul>
                    </Col>
                    <Col md={2} className="footerColOne">
                        <h5>Contact Us</h5>
                        <ul>
                            <li>Subscription Issue</li>
                            <li>Settings</li>
                            <li>FAQ</li>
                            <li>Close Account</li>
                        </ul>
                    </Col>
                    <Col md={2} className="footerColOne">
                        <h5>About Our Blog</h5>
                        <ul>
                            <li>Who we are</li>
                            <li>What we do</li>
                            <li>Terms and Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </Col>
                </Row>
            </div>
            <div className="containerTwo">
                <div className="subContainer">
                    <h6>@ourblog 2020 all right reserved</h6>
                    <div className="socialMedia">
                        <FacebookIcon className='socialIcon'/>
                        <InstagramIcon className='socialIcon'/>
                        <TwitterIcon className='socialIcon'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
