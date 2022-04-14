import * as React from "react";
import Gallery from "./gallery";
import Enzyme, {shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import {imageArr} from "./image-array";

Enzyme.configure({adapter: new Adapter()});

describe("Gallery tests", () => {
    it("creates all required elements", () => {
        const wrapper = shallow(<Gallery/>);
        expect(wrapper.find(".galley-image-zoomed-div").exists()).toBe(false);
        expect(wrapper.find(".gallery-container").exists()).toBe(true);
        expect(wrapper.find(".gallery-images-div").at(0).exists()).toBe(true);
        expect(wrapper.find(".gallery-images").at(0).prop("src")).toBe(imageArr[0]);
        expect(wrapper.find(".gallery-images").at(0).prop("alt")).toBe("Gallery");
        expect(wrapper.find(".gallery-images").at(0).prop("loading")).toBe("lazy");
    })
    it("onClick zoom function works as expected", () => {
        const wrapper = shallow(<Gallery/>);
        expect(wrapper.state("source")).toBe("none");
        wrapper.find(".gallery-images").at(0).simulate("click");
        expect(wrapper.state("source")).toBe(imageArr[0]);
        expect(wrapper.find(".gallery-image-zoomed-div").exists()).toBe(true);
        expect(wrapper.find(".gallery-images-close").contains("X")).toBe(true);
        expect(wrapper.find(".gallery-images-zoomed").prop("src")).toBe(imageArr[0]);
        expect(wrapper.find(".gallery-images-zoomed").prop("alt")).toBe("Gallery");
        wrapper.find(".gallery-images-close").simulate("click");
        expect(wrapper.find(".galley-image-zoomed-div").exists()).toBe(false);
        expect(wrapper.state("source")).toBe("none");
    })
})