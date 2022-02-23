import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Home from './home'
import * as React from 'react'

Enzyme.configure({ adapter: new Adapter() });

describe('Home tests', () => {

    it('contains blurb, offers, new products and instagram feed', () => {
        const mockFunc = jest.fn()
        const wrapper = shallow(<Home onClick={mockFunc}/>)
        expect(wrapper.find({'data-testid':'blurb-container'}).exists()).toBe(true)
        expect(wrapper.find({'data-testid':'offers-container'}).exists()).toBe(true)
        expect(wrapper.find({'data-testid':'new-products-container'}).exists()).toBe(true)
        expect(wrapper.find({'data-testid':'instagram-container'}).exists()).toBe(true)
        expect(wrapper.find({'data-testid':'footer-container'}).exists()).toBe(true)
        wrapper.find({'data-testid':'new-products-container'}).simulate('click')
        expect(mockFunc).toHaveBeenCalledWith('ProductList')
        wrapper.find({'data-testid':'offers-container'}).simulate('click')
        expect(mockFunc).toHaveBeenCalledWith('Offers')
        expect(mockFunc).toHaveBeenCalledTimes(2)
    })
})