import Enzyme, {shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Product from "./product";
import * as React from "react";

Enzyme.configure({ adapter: new Adapter() });

const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate
}));

describe("Product tests", () => {
    it("renders divs for properties and their values are displayed", () => {
        const wrapper = shallow(<Product description={"description"} price={3400} title={"title"} imageURL={"some/src"} onClick={() => null} id={392}/>);
        expect(wrapper.find(".product-list-image-div").exists()).toBe(true);
        expect(wrapper.find(".product-list-image").prop("src")).toBe("some/src");
        expect(wrapper.find(".product-list-image").prop("alt")).toBe("title");
        expect(wrapper.find(".product-list-info-container").exists()).toBe(true);
        expect(wrapper.find(".product-list-info").at(0).text()).toBe("title");
        expect(wrapper.find(".product-list-info").at(1).text()).toBe("description");
        expect(wrapper.find(".product-list-info").at(2).text()).toBe("£"+(3400/100).toFixed(2));
    });
    it("should call useNavigate onClick", () => {
        const mockFunc = jest.fn();
        const wrapper = shallow(<Product description={"description"} price={3400} title={"title title"} imageURL={"some/src"} onClick={mockFunc} id={392}/>);
        wrapper.find(".product-wrapper").simulate("click");
        expect(mockedNavigate).toBeCalledWith("/Products/titletitle");
        expect(mockFunc).toBeCalledWith(392);
    });
})