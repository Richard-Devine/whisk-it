import * as React from "react"
import Checkout from "./checkout";
import Enzyme, {shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import PaymentButtons from "../paypal-button/paypal-buttons"

Enzyme.configure({adapter: new Adapter()});

describe("checkout test", () => {
    it("render correct divs and form elements", () => {
        const wrapper = shallow(<Checkout myBasket={[]} completeOrder={() => null}/>);
        expect(wrapper.find(".checkout-form-container").text()).toContain("Delivery Details");
        expect(wrapper.find("form.checkout-form").exists()).toBe(true);
        expect(wrapper.find("label#name-label").text()).toBe("Name:");
        expect(wrapper.find("label#house-label").text()).toBe("House name/number:");
        expect(wrapper.find("label#street-label").text()).toBe("Street:");
        expect(wrapper.find("label#city-label").text()).toBe("Town/City:");
        expect(wrapper.find("label#postcode-label").text()).toBe("Post Code:");
        expect(wrapper.find("label#email-label").text()).toBe("Email Address:");
        expect(wrapper.find(".unchecked-statement").text()).toBe("Paypal payment button will appear when the checkbox above has been checked");
    });
    it("input onChanges work and set state correctly and componentDidMount sets states correctly", () => {
        const wrapper = shallow(<Checkout myBasket={[{
            id: "10",
            title: "Box of 4 different flavours",
            imageURL: "www.somewhere.com/image",
            price: 1800,
            options: {1: "11", 2: "22", 3: "33", 4: "44"}
        },
            {
                id: "9",
                title: "Half and Half Box",
                imageURL: "www.somewhere.com/image",
                price: 1500,
                options: {1: "11", 2: "22"}
            }]} completeOrder={() => null}/>);
        expect(wrapper.state("order")).toStrictEqual({"order": "1. Box of 4 different flavours (11/22/33/44)<br/>2. Half and Half Box (11/22)<br/>"});
        wrapper.find("input#name").simulate("change", {target: {value: "John"}});
        wrapper.find("input#house").simulate("change", {target: {value: "25"}});
        wrapper.find("input#street").simulate("change", {target: {value: "anywhere"}});
        wrapper.find("input#city").simulate("change", {target: {value: "anyville"}});
        wrapper.find("input#postcode").simulate("change", {target: {value: "AV00 0SB"}});
        wrapper.find("input#email").simulate("change", {target: {value: "anyone@anything.com"}});
        expect(wrapper.state("order")).toStrictEqual({
            "name": "John",
            "house": "25",
            "street": "anywhere",
            "city": "anyville",
            "postcode": "AV00 0SB",
            "email": "anyone@anything.com",
            "order": "1. Box of 4 different flavours (11/22/33/44)<br/>2. Half and Half Box (11/22)<br/>"
        });
        expect(wrapper.state("confirmed")).toBe(false);
        wrapper.find("input#check").simulate("change", {target: {checked: true}});
        expect(wrapper.state("confirmed")).toBe(true);
        expect(wrapper.find(".unchecked-statement").exists()).toBe(false);
        expect(wrapper.find(PaymentButtons).exists()).toBe(true);
        expect(wrapper.state("basketTotal")).toStrictEqual("40");
    });
})