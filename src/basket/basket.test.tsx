import * as React from "react"
import Basket from "./basket";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import {BrowserRouter} from "react-router-dom";

Enzyme.configure({ adapter: new Adapter() });

const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate
}));

describe("basket tests", () => {

    it("called useNavigate properly", () => {
        const wrapper = mount(<BrowserRouter><Basket myBasket={[]}  myBasketTotal={0} deleteItem={() => null}/></BrowserRouter>)

    })

    it("render correct divs", () => {
        const wrapper = mount(<BrowserRouter><Basket myBasket={[{id: "6", title: "Biscoff Blondie", imageURL: "www.somewhere.com/image3", price: 1300},
            {id: "6", title: "Milky Way Crispy Roll Blondie", imageURL: "www.somewhere.com/image3", price: 1300}]}  myBasketTotal={2600} deleteItem={() => null}/></BrowserRouter>)
        expect(wrapper.find(".basket-wrapper").exists()).toBe(true)
        expect(wrapper.find(".basket-items-wrapper").at(0).exists()).toBe(true)
        expect(wrapper.find(".basket-image-div").at(0).contains(<img src={"www.somewhere.com/image3"} alt={"Biscoff Blondie"}/>)).toBe(true)
        expect(wrapper.find({"data-testid":"delete-button-div"}).at(0).exists()).toBe(true)
        expect(wrapper.find(".delete-button").at(0).text()).toStrictEqual("X")
        expect(wrapper.find(".title-div").at(0).text()).toStrictEqual("Biscoff Blondie")
        expect(wrapper.find(".price-div").at(0).text()).toStrictEqual("£13.00")
        expect(wrapper.find(".checkout-wrapper").exists()).toBe(true)
        expect(wrapper.find(".sub-total-div").text()).toStrictEqual("Subtotal: £26.00")
        expect(wrapper.find(".postage-div").text()).toStrictEqual("Postage: £7.00")
        expect(wrapper.find(".total-div").text()).toStrictEqual("Total: £33.00")
        expect(wrapper.find(".basket-buy-div").text()).toStrictEqual("Proceed to checkout")
    })

    it("onClick functions work as expected", () => {
        const mockFunc = jest.fn()
        const wrapper = mount(<BrowserRouter><Basket myBasket={[{id: "6", title: "Biscoff Blondie", imageURL: "www.somewhere.com/image3", price: 13},
            {id: "6", title: "Milky Way Crispy Roll Blondie", imageURL: "www.somewhere.com/image3", price: 13}]} myBasketTotal={10} deleteItem={mockFunc}/></BrowserRouter>)
        const instance = wrapper.instance() as any
        //const removeFromBasketSpy = jest.spyOn(instance, "removeFromBasket")
        wrapper.find(".delete-button").at(0).simulate("click")
        //expect(removeFromBasketSpy).toHaveBeenCalledWith(0)
        expect(mockFunc).toHaveBeenCalled()
        wrapper.find(".basket-buy-div").simulate("click")
        expect(mockedNavigate).toHaveBeenCalledWith('/Checkout')
    })

    it("removeFromBasket function works as expected", () => {
        const wrapper = mount(<Basket myBasketTotal={10} myBasket={[{id: "6", title: "Biscoff Blondie", imageURL: "www.somewhere.com/image3", price: 13},
            {id: "6", title: "Milky Way Crispy Roll Blondie", imageURL: "www.somewhere.com/image3", price: 13}]}  deleteItem={() => null}/>)
        const instance = wrapper.instance() as any

        instance.removeFromBasket(0)
        expect(wrapper.prop("myBasket")).toStrictEqual([{id: "6", title: "Milky Way Crispy Roll Blondie", imageURL: "www.somewhere.com/image3", price: 13}])
    })
})

//TODO add myBasketTotal tests