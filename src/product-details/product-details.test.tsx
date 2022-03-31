import Enzyme, {shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import ProductDetails from "./product-details";
import * as React from "react"

Enzyme.configure({ adapter: new Adapter() });

describe("ProductDetails tests", () => {

    it("renders correct divs, values and onClick functions", () => {

        const data = [{id: 1463342, title: "Blondie", imageURL: "www.somewhere.com/image2", description: "This is a blondie", price: 450, offer: false, allergens: "fish"}]
        const wrapper = shallow(<ProductDetails  id={1463342} addProductButton={() => null}/>)
        wrapper.setState({productInfo:data})

        expect(wrapper.find({"data-testid":"image-div"}).contains(<img src={"www.somewhere.com/image2"} alt={"Blondie"}/>)).toBe(true)
        expect(wrapper.find({"data-testid":"title-div"}).text().includes("Blondie" as string)).toBe(true)
        expect(wrapper.find({"data-testid":"description-div"}).text().includes("This is a blondie" as string)).toBe(true)
        expect(wrapper.find({"data-testid":"price-div"}).text().includes("£4.50" as string)).toBe(true)
        expect(wrapper.find({"data-testid":"allergens-div"}).text().includes("Allergens:" as string)).toBe(true)
        expect(wrapper.find({"data-testid":"allergy-div"}).text().includes("fish" as string)).toBe(true)
        expect(wrapper.find(".title-back-button-wrapper").exists()).toBe(true)
        expect(wrapper.find(".product-details-wrapper").exists()).toBe(true)

    })
    it("onClick functions work", () => {

        const otherMockFunc = jest.fn()
        const wrapper = shallow(<ProductDetails  id={1463342} addProductButton={() => otherMockFunc()}/>)

        wrapper.find({"data-testid":"buy-div"}).simulate("click")
        expect(otherMockFunc).toHaveBeenCalled()
    })
})
