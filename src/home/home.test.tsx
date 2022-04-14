import Enzyme, {shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Home from "./home";
import * as React from "react";
import {data} from "../data";
import {dataProps} from "../webpage-types";

Enzyme.configure({ adapter: new Adapter() });

const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate
}));

describe("Home tests", () => {

    let latestOffers: dataProps[] = [];
    data.map((product) => {
        if (product.offer) {
            return latestOffers.push(product)
        }
        if (latestOffers.length > 2) {
            latestOffers.splice(0, (latestOffers.length - 2));
        }
    });

    it("contains blurb, offers, new products and instagram feed", () => {
        const wrapper = shallow(<Home onClick={() => null}/>);
        expect(wrapper.find(".home-container").exists()).toBe(true);
        expect(wrapper.find(".blurb-header").text()).toBe("About us!");
        expect(wrapper.find(".blurb-container").text()).toBe("Welcome to Whisk it!After spending most of our days off baking and receiving really positive, lovely comments from family and friends about our various flavours of Brownies, Blondies and Cookie Bars, we thought why not create a little business and see where it takes us!We started our business off during the start of the pandemic and the support we received from you all was overwhelming and we are so grateful. So we’ve decided to open our very own website for you to buy your own Brownies, Blondies and Cookie Bars whenever you want, at whatever hour!For those who don't know, Soph and myself, Kayla, are sisters and whilst we don't rate ourselves as pro bakers the various Brownies, Blondies and Cookie bars we have made have always gone down a treat. We are self taught and enjoy baking yummy treats. We both work full time in the public services sector but love nothing more than baking up the highest quality Brownies, Blondies and Cookie Bars for you to enjoy, on our rest days.If you fancy trying some of our bakes and would like to support our small business then please place an order!");
        expect(wrapper.find(".new-products-container").contains("Our latest products!")).toBe(true);
        expect(wrapper.find(".new-products-wrapper").at(0).exists()).toBe(true);
        expect(wrapper.find(".new-products-image-div").at(0).exists()).toBe(true);
        expect(wrapper.find(".new-products-image").at(0).prop("src")).toBe(data[(data.length - 2)].imageURL)
        expect(wrapper.find(".new-products-image").at(0).prop("alt")).toBe(data[(data.length - 2)].title)
        expect(wrapper.find(".new-products-info-container").at(0).exists()).toBe(true);
        expect(wrapper.find(".new-products-title").at(0).contains(data[(data.length - 2)].title)).toBe(true);
        expect(wrapper.find(".new-products-description").at(0).text()).toBe(data[(data.length - 2)].description);
        expect(wrapper.find(".new-products-price").at(0).text()).toBe("£"+(data[(data.length - 2)].price / 100).toFixed(2));
        expect(wrapper.find(".new-offers-container").contains("Our latest offers!")).toBe(true);
        expect(wrapper.find(".new-offers-wrapper").exists()).toBe(true);
        expect(wrapper.find(".new-offers-image-div").at(0).contains(<img src={latestOffers[0].imageURL} alt={latestOffers[0].title} />)).toBe(true);
        expect(wrapper.find(".new-offers-info-container").at(0).exists()).toBe(true);
        expect(wrapper.find(".new-offers-title").contains(latestOffers[0].title)).toBe(true);
        expect(wrapper.find(".new-offers-description").contains(latestOffers[0].description)).toBe(true);
        expect(wrapper.find(".new-offers-price").at(0).text()).toBe("£"+(latestOffers[0].price / 100).toFixed(2));
    });

    it("should navigate to product info page onClick", () => {
        const mockFunc = jest.fn
        const wrapper = shallow(<Home onClick={() => {mockFunc()}}/>)
        //wrapper.find()
    })
})

/*wrapper.find({"data-testid":"new-products-container"}).simulate("click");
        expect(mockFunc).toHaveBeenCalledWith("ProductList");
        wrapper.find({"data-testid":"new-offers-container"}).simulate("click");
        expect(mockFunc).toHaveBeenCalledWith("Offers");
        expect(mockFunc).toHaveBeenCalledTimes(2);*/