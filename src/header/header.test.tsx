import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Header from './header'
import * as React from 'react'

Enzyme.configure({ adapter: new Adapter() });

describe('header component tests', () => {
    it('renders logo-container and menu component', () => {
        let wrapper = shallow(<Header myBasket={10}/>)
        expect(wrapper.find({'data-testid': 'logo-container'}).exists()).toBe(true)
        expect(wrapper.find({'data-testid': 'menu-container'}).exists()).toBe(true)
    })
})