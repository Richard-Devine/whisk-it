import * as React from "react"
import Dropdown from "./dropdown";
import Enzyme, {shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import menuIcon from "../website-icons/menu-icon.webp";
import {Link} from "react-router-dom";

Enzyme.configure({ adapter: new Adapter() });

describe("Dropdown tests", () => {
    it("render correct divs on load", () => {
        const wrapper = shallow(<Dropdown/>);
        expect(wrapper.find(".drop-down-container").exists()).toBe(true);
        expect(wrapper.find(".drop-down-image-span").contains(<img src={menuIcon} alt="Dropdown Icon"/>)).toBe(true);
        expect(wrapper.find(".drop-down-wrapper").exists()).toBe(false);
        })
    it("onClick function works and renders correct elements", () => {
        const wrapper = shallow(<Dropdown/>);
        expect(wrapper.state("menuDisplay")).toBe(false);
        wrapper.find(".drop-down-image-span").simulate("click");
        expect(wrapper.state("menuDisplay")).toBe(true);
        expect(wrapper.find(".drop-down-wrapper").exists()).toBe(true);
        expect(wrapper.find(".drop-down-options").at(0).contains(<Link to="/">Home</Link>)).toBe(true)
        expect(wrapper.find(".drop-down-options").at(1).contains(<Link to="/Products">Products</Link>)).toBe(true)
        expect(wrapper.find(".drop-down-options").at(2).contains(<Link to="/Offers">Offers</Link>)).toBe(true)
        expect(wrapper.find(".drop-down-options").at(3).contains(<Link to="/Gallery">Gallery</Link>)).toBe(true)
    })
})