import Enzyme, {shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Menu from "./menu";
import * as React from "react";
import {Link} from "react-router-dom";
import Dropdown from "../dropdown-menu/dropdown";
import basket from "../website-icons/shopping-cart.webp";

Enzyme.configure({ adapter: new Adapter() });

const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate
}));

describe("Menu tests", () => {
    it("should render correct divs", () => {
        const wrapper = shallow(<Menu  myBasket={1000}/>);
        expect(wrapper.find(".menu-wrapper").exists()).toBe(true);
        expect(wrapper.find(".menu-options").at(0).contains(<Link to="/">Home</Link>)).toBe(true);
        expect(wrapper.find(".menu-options").at(1).contains(<Link to="/Products">Products</Link>)).toBe(true);
        expect(wrapper.find(".menu-options").at(2).contains(<Link to="/Offers">Offers</Link>)).toBe(true);
        expect(wrapper.find(".menu-options").at(3).contains(<Link to="/Gallery">Gallery</Link>)).toBe(true);
        expect(wrapper.find(".drop-down-container").contains(<Dropdown/>)).toBe(true);
        expect(wrapper.find(".basket-div").contains(<img src={basket} alt="My Basket" className="basket-image"/>)).toBe(true);
        expect(wrapper.find(".basket-total").text()).toBe("£10.00");
    })
    it("should call useNavigate onClick", () => {
        const wrapper = shallow(<Menu  myBasket={1000}/>);
        wrapper.find(".basket-button").simulate("click");
        expect(mockedNavigate).toBeCalledWith("/Basket");
    })
})