import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Product from './product'
import * as React from 'react'

Enzyme.configure({ adapter: new Adapter() });

describe('Product tests', () => {

    it('renders divs for properties and their values are displayed', () => {
        const mockFunc = jest.fn()
        const wrapper = shallow(<Product description={'description'} price={340} title={'title'} imageURL={'some/src'} onClick={mockFunc} id={392}/>)

        expect(wrapper.find({'data-testid':'description-div'}).text().includes('description' as string)).toBe(true)
        expect(wrapper.find({'data-testid':'title-div'}).text().includes('title' as string)).toBe(true)
        expect(wrapper.find({'data-testid':'price-div'}).text().includes('£3.40' as string)).toBe(true)
        expect(wrapper.find({'data-testid':'image-div'}).contains(<img src={'some/src'} alt={'title'}/>)).toBe(true)

        wrapper.find({'data-testid':'product-wrapper'}).simulate('click')
        expect(mockFunc).toHaveBeenCalledWith(392)
    })
})