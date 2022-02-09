import '@testing-library/jest-dom/extend-expect';
import {configure, shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import 'insert react node' from "insert file location";

configure({ adapter: new Adapter() });

describe('insert overall description', () => {
    it('insert specific description', () => {
        const wrapper = shallow('insert react node')
        //Find Child node
        expect(wrapper.hostNodes('insert child react node').exists()).toBe('insert true/false')
        //Find by ID
        expect(wrapper.find('insert "#" followed by id name').exists()).toBe('insert true/false')
        //Find by data-testid
        expect(wrapper.find({'data-testid':'insert data-testid name'}).exists()).toBe('insert true/false')