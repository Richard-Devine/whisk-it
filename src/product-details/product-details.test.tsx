import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ProductDetails from "./product-details";
import * as React from 'react'

Enzyme.configure({ adapter: new Adapter() });

describe('ProductDetails tests', () => {

    it('renders correct divs and values', () => {
        let back = jest.fn()
        const wrapper =shallow(<ProductDetails backButton={() => back()} id={'13564'}/>)
        expect(wrapper.find({'data-testid':'image-div'}).exists()).toBe(true)
        expect(wrapper.find({'data-testid':'title-div'}).exists()).toBe(true)
        expect(wrapper.find({'data-testid':'description-div'}).exists()).toBe(true)
        expect(wrapper.find({'data-testid':'price-div'}).exists()).toBe(true)
        expect(wrapper.find({'data-testid':'buy-div'}).exists()).toBe(true)
        expect(wrapper.find({'data-testid':'back-button-div'}).exists()).toBe(true)
        expect(wrapper.find({'data-testid':'allergy-div'}).exists()).toBe(true)
        wrapper.find({'data-testid':'back-button-div'}).simulate('click')
        expect(back).toHaveBeenCalled()
    })
})
