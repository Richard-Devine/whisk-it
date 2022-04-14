import * as React from "react";
import Footer from "./footer";
import Enzyme, {shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import instagramIcon from "../website-icons/Instagram.webp";
import email from "../website-icons/email.webp";

Enzyme.configure({adapter: new Adapter()});

describe("Footer tests", () => {
    it("renders correct elements and content", () => {
        const wrapper = shallow(<Footer/>);
        expect(wrapper.find(".footer-wrapper").exists()).toBe(true);
        expect(wrapper.find(".footer-links").exists()).toBe(true);
        expect(wrapper.find(".instagram-link").exists()).toBe(true);
        expect(wrapper.find(".instagram-link-img").contains(<a href="https://www.instagram.com/whiskit_ks/"><img
            src={instagramIcon} alt="Instagram icon"/></a>)).toBe(true);
        expect(wrapper.find(".instagram-link-text").contains(<a href="https://www.instagram.com/whiskit_ks/">Follow us
            on Instagram </a>)).toBe(true);
        expect(wrapper.find(".email-link").exists()).toBe(true);
        expect(wrapper.find(".email-link-img").contains(<a href="mailto:michaelaparish@hotmail.co.uk"><img src={email}
                                                                                                           alt="Email icon"/></a>)).toBe(true);
        expect(wrapper.find(".email-link-text").contains(<a
            href="mailto:michaelaparish@hotmail.co.uk">whisk-it@outlook.com</a>)).toBe(true);
        expect(wrapper.find(".footer-text").contains(<p>If you have any special requests or questions with any of our
            products please contact us via our instagram or email above. <br/>
            We take pride and make our products to the highest quality, if you are unhappy with the quality of our
            products please do not hesitate to get in contact with us.</p>)).toBe(true);
    });
})