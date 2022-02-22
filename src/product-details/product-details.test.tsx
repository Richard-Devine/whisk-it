import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ProductDetails from "./product-details";
import * as React from 'react'

Enzyme.configure({ adapter: new Adapter() });

describe('ProductDetails tests', () => {

    it('renders correct divs and values', () => {
        const data = {id: '1463342', title: 'Blondie', imageURL: 'www.somewhere.com/image2', description: 'This is a blondie', price: '4.50', offer: false, allergens: 'fish'}
        const back = jest.fn()
        const wrapper = shallow(<ProductDetails backButton={() => back()} id={'1463342'}/>)
        wrapper.setState({productInfo:data})
        expect(wrapper.find({'data-testid':'image-div'}).exists()).toBe(true)
        expect(wrapper.find({'data-testid':'title-div'}).exists()).toBe(true)
        expect(wrapper.find({'data-testid':'description-div'}).exists()).toBe(true)
        expect(wrapper.find({'data-testid':'price-div'}).exists()).toBe(true)
        expect(wrapper.find({'data-testid':'buy-div'}).exists()).toBe(true)
        expect(wrapper.find({'data-testid':'back-button-div'}).exists()).toBe(true)
        expect(wrapper.find({'data-testid':'allergy-div'}).exists()).toBe(true)
        wrapper.find({'data-testid':'back-button-div'}).simulate('click')
        expect(back).toHaveBeenCalled()
        const buy = jest.fn()
        const button = shallow(<button onClick={() => buy} data-testid='buy-button'>Buy</button>)
        button.simulate('click')
        expect(buy).toHaveBeenCalled()
    })
})
