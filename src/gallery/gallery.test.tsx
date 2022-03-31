import * as React from "react"
import Gallery from "./gallery"
import Enzyme, {shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import {imageArr} from "./image-array";

Enzyme.configure({ adapter: new Adapter() });

describe("Gallery tests", () => {
    it("creates all required elements", () => {
        const wrapper = shallow(<Gallery/>)
        expect(wrapper.find({"data-testid":"gallery-container"}).exists()).toBe(true)
        expect(wrapper.find({"data-testid":"gallery-images-div"}).at(0).contains(<img src={require("../images/"+imageArr[0])} alt="Gallery" className="gallery-images"/>)).toBe(true)
    })
})