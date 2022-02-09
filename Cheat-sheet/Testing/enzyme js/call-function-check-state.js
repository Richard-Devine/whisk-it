import '@testing-library/jest-dom/extend-expect';
import {configure, shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import 'insert react node' from "insert file location";

configure({ adapter: new Adapter() });

describe('insert overall description', () => {
    it('insert specific description', () => {
        const wrapper = shallow('insert react node')
        //call a function
        wrapper.instance().'insert function name'('insert any arguments')
        //Check value of a state
        expect(wrapper.instance().state.'insert state name').toBe('insert expected value')