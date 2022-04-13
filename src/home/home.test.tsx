import Enzyme, {shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Home from "./home"
import * as React from "react"
import {data} from "../data";

Enzyme.configure({ adapter: new Adapter() });

const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate
}));

describe("Home tests", () => {

    it("contains blurb, offers, new products and instagram feed", () => {
        const mockFunc = jest.fn()
        const wrapper = shallow(<Home onClick={mockFunc}/>)
        expect(wrapper.find(".home-container").exists()).toBe(true)
        expect(wrapper.find(".blurb-header").text()).toBe("About us!")
        expect(wrapper.find(".blurb-container").text()).toBe("Welcome to Whisk it!After spending most of our days off baking and receiving really positive, lovely comments from family and friends about our various flavours of Brownies, Blondies and Cookie Bars, we thought why not create a little business and see where it takes us!We started our business off during the start of the pandemic and the support we received from you all was overwhelming and we are so grateful. So we’ve decided to open our very own website for you to buy your own Brownies, Blondies and Cookie Bars whenever you want, at whatever hour!For those who don't know, Soph and myself, Kayla, are sisters and whilst we don't rate ourselves as pro bakers the various Brownies, Blondies and Cookie bars we have made have always gone down a treat. We are self taught and enjoy baking yummy treats. We both work full time in the public services sector but love nothing more than baking up the highest quality Brownies, Blondies and Cookie Bars for you to enjoy, on our rest days.If you fancy trying some of our bakes and would like to support our small business then please place an order!")
        expect(wrapper.find(".new-products-container").text()).toBe("Our latest products!")
        expect(wrapper.find(".new-products-wrapper").at(0).exists()).toBe(true)
        expect(wrapper.find(".product-list-image-div").at(0).contains(<img src={data[0].imageURL} alt={data[0].title} />)).toBe(true)
        expect(wrapper.find(".product-list-info-container").at(0).exists()).toBe(true)
        expect(wrapper.find(".product-list-info").at(0).contains(data[0].title)).toBe(true)
        expect(wrapper.find(".product-list-info").at(1).contains(data[0].description)).toBe(true)
        expect(wrapper.find(".product-list-info").at(2).contains("£"+(data[0].price / 100).toFixed(2))).toBe(true)

        wrapper.find({"data-testid":"new-products-container"}).simulate("click")
        expect(mockFunc).toHaveBeenCalledWith("ProductList")
        wrapper.find({"data-testid":"new-offers-container"}).simulate("click")
        expect(mockFunc).toHaveBeenCalledWith("Offers")
        expect(mockFunc).toHaveBeenCalledTimes(2)
    })
})