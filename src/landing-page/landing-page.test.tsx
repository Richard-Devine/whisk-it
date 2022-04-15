import Enzyme, {shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import LandingPage from "./landing-page"
import Home from "../home/home";
import Header from "../header/header";
import ProductDetails from "../product-details/product-details"
import ProductList from "../product-list/product-list"
import Offers from "../offers/offers";
import Gallery from "../gallery/gallery";
import React from "react"
import Footer from "../footer/footer";

Enzyme.configure({ adapter: new Adapter() });

describe("LandingPage tests", () => {

    it("should render correct divs and components", () => {
        const wrapper = shallow(<LandingPage/>)
        expect(wrapper.find(".website-container").exists()).toBe(true)
        expect(wrapper.find(".header-container").contains(<Header myBasket={0}/>)).toBe(true)
        expect(wrapper.find(".footer-container").contains(<Footer/>)).toBe(true)
    })

    it("viewProduct changes state when called", () => {

        const wrapper = shallow(<LandingPage/>)
        const instance = wrapper.instance() as any
        expect(instance.state.productId as string).toBe(0)
        instance.viewProduct(1)
        expect(instance.state.productId as string).toBe(1)
    })

    it("addToBasket pushes data object into array", () => {

        const wrapper = shallow(<LandingPage/>)
        const instance = wrapper.instance() as any
        expect(instance.state.myBasket as object[]).toStrictEqual([])
        instance.addToBasket({id: 52, title: "blondie", imageURL: "www.somewhere.com/image3", description: "this is a blondie", price: 10.50, offer: false, allergens: "egg"})
        expect(instance.state.myBasket as object[]).toStrictEqual([{id: 52, title: "blondie", imageURL: "www.somewhere.com/image3", description: "this is a blondie", price: 10.50, offer: false, allergens: "egg"}])
    })
})