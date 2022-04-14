import * as React from "react";
import CheckoutComplete from "./checkout-complete";
import Enzyme, {shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({adapter: new Adapter()});

describe("Checkout Complete tests", () => {
    it("render correct divs and text", () => {
        const wrapper = shallow(<CheckoutComplete/>);
        expect(wrapper.find(".payment-complete-div").text()).toBe("Thank you for your purchase. You will receive an Email confirmation shortly of your order and delivery details you provided us.");
    });
})