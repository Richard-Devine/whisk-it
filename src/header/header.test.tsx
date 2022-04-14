import Enzyme, {shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Header from "./header";
import * as React from "react";
import whiskItLogo from "../website-icons/Whisk it banner transparent.webp";
import {Link} from "react-router-dom";
import Menu from "../menu/menu";

Enzyme.configure({adapter: new Adapter()});

describe("header component tests", () => {
    it("renders logo-container and menu component", () => {
        let wrapper = shallow(<Header myBasket={10}/>);
        expect(wrapper.find(".header-banner-div").contains(<Link to="/"><img src={whiskItLogo} alt="Whisk It logo"
                                                                             className="header-banner-image"/></Link>)).toBe(true);
        expect(wrapper.find(".menu-container").exists()).toBe(true);
        expect(wrapper.find(Menu).prop("myBasket")).toBe(10);
    })
})