import '@testing-library/jest-dom/extend-expect';
import {configure, shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import 'insert react node' from "insert file location";

configure({ adapter: new Adapter() });

describe('insert overall description', () => {
    it('insert specific description', () => {
        const wrapper = shallow('insert react node')
        expect(wrapper.find({'data-testid':'insert data-testid name'}).text().includes('insert text to find')).toBe('insert true/false')
    })