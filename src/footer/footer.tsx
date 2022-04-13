import * as React from "react";
import instagramIcon from "../website-icons/Instagram.webp";
import email from "../website-icons/email.webp";

export default class Footer extends React.Component {

    render() {
        return (
            <div className="footer-wrapper">
                <div className="footer-links">
                    <div className="instagram-link">
                        <div className="instagram-link-img">
                            <a href="https://www.instagram.com/whiskit_ks/"><img src={instagramIcon} alt="Instagram icon"/></a>
                        </div>
                        <div className="instagram-link-text">
                            <a href="https://www.instagram.com/whiskit_ks/">Follow us on Instagram </a>
                        </div>
                    </div>
                    <div className="email-link">
                        <div className="email-link-img">
                            <a href="mailto:michaelaparish@hotmail.co.uk"><img src={email} alt="Email icon"/></a>
                        </div>
                        <div className="email-link-text">
                            <a href="mailto:michaelaparish@hotmail.co.uk">whisk-it@outlook.com</a>
                        </div>
                    </div>
                </div>
                <div className="footer-text">
                    <p>If you have any special requests or questions with any of our products please contact us via our
                        instagram or email above. <br/>
                        We take pride and make our products to the highest quality, if you are unhappy with the quality
                        of our products please do not hesitate to get in contact with us.</p>
                </div>
            </div>
        );
    };
};