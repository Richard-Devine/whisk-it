import * as React from "react";
import Offers from "./offers";
import Enzyme, {shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import {data} from "../data";
import {dataProps, itemProps} from "../webpage-types";

Enzyme.configure({ adapter: new Adapter() });

const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate
}));

const offers:dataProps[] = []
data.map((product) => {
    if(product.offer){
        offers.push(product);
    }
});

describe("Offers tests", () => {
    it("render correct components and values", () => {
        const wrapper = shallow(<Offers onClick={() => null}/>);
        expect(wrapper.find(".offers-wrapper").exists()).toBe(true);
        expect(wrapper.find(".offers-img-div").at(0).exists()).toBe(true);
        expect(wrapper.find(".offers-image").at(0).prop("src")).toBe(offers[0].imageURL);
        expect(wrapper.find(".offers-image").at(0).prop("alt")).toBe(offers[0].title);
        expect(wrapper.find(".offers-info-container").at(0).exists()).toBe(true);
        expect(wrapper.find(".offers-title-div").at(0).text()).toBe(offers[0].title);
        expect(wrapper.find(".offers-description-div").at(0).text()).toBe(offers[0].description);
        expect(wrapper.find(".offers-price-div").at(0).text()).toBe("£"+(offers[0].price/100).toFixed(2));
    })
    it("should onClick call useNavigate", () => {
        const mockFunc = jest.fn();
        const wrapper = shallow(<Offers onClick={mockFunc}/>);
        wrapper.find(".offers-wrapper").at(0).simulate("click");
        expect(mockedNavigate).toBeCalledWith("/Products/"+ offers[0].title);
        expect(mockFunc).toBeCalledWith(offers[0].id);
    })
})