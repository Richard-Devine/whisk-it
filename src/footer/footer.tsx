import * as React from "react";
import instagramIcon from "../website-icons/Instagram.webp";
import email from "../website-icons/email.webp";

export default class Footer extends React.Component {

    render() {
        return (
            <div data-testid="footer-wrapper" className="footer-wrapper">
                <div data-testid="footer-links" className="footer-links">
                    <div data-testid="instagram-link" className="instagram-link">
                        <div data-testid="instagram-link-img" className="instagram-link-img">
                            <a href="https://www.instagram.com/whiskit_ks/"><img src={instagramIcon}
                                                                                 alt="Instagram icon"/></a>
                        </div>
                        <div data-testid="instagram-link-text" className="instagram-link-text">
                            <a href="https://www.instagram.com/whiskit_ks/">Follow us on Instagram </a>
                        </div>
                    </div>
                    <div data-testid="email-link" className="email-link">
                        <div data-testid="email-link-img" className="email-link-img">
                            <a href="mailto:michaelaparish@hotmail.co.uk"><img src={email} alt="Email icon"/></a>
                        </div>
                        <div data-testid="email-link-text" className="email-link-text">
                            <a href="mailto:michaelaparish@hotmail.co.uk">whisk-it@outlook.com</a>
                        </div>
                    </div>
                </div>
                <div data-testid="footer-text" className="footer-text">
                    <p>If you have any special requests or questions with any of our products please contact us via our
                        instagram or email above. <br/>
                        We take pride and make our products to the highest quality, if you are unhappy with the quality
                        of our products please do not hesitate to get in contact with us.</p>
                </div>
            </div>
        );
    };
};