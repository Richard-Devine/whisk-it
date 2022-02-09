import '@testing-library/jest-dom/extend-expect';
import {configure, shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import 'insert react node' from "insert file location";

configure({ adapter: new Adapter() });

describe('insert overall description', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow('insert react node')
    })
    afterEach(() => {
        wrapper.update()
    })
    it('insert specific description', () => {
        "insert tests and reference wrapper.something"
    })