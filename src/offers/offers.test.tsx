import * as React from 'react'
import Offers from './offers'
import Enzyme, {shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

describe('Offers tests', () => {
    it('render correct components and values', () => {
        const mockFunc = jest.fn()
        const wrapper = shallow(<Offers onClick={(x:number) => mockFunc(x)}/>)
        const data = [{id: 1463342, title: 'Blondie', imageURL: 'www.somewhere.com/image2', description: 'This is a blondie', price: 450, offer: false, allergens: 'fish'},
            {id: 1463342234, title: 'Offer', imageURL: 'www.somewhere.com/image3', description: 'This is an offer', price: 1050, offer: true, allergens: 'eggs'}]
        wrapper.setState({productRange:data})
        expect(wrapper.find({'data-testid':'title-div'}).text().includes('Offer' as string)).toBe(true)
        expect(wrapper.find({'data-testid':'description-div'}).text().includes('This is an offer' as string)).toBe(true)
        expect(wrapper.find({'data-testid':'price-div'}).text().includes('£10.50' as string)).toBe(true)
        expect(wrapper.find({'data-testid':'img-div'}).contains(<img src={'www.somewhere.com/image3'} alt={'Offer'}/>)).toBe(true)
        expect(wrapper.find({'data-testid':'offers-content-div'}).exists()).toBe(true)
        wrapper.find({'data-testid':'offer-divs'}).simulate('click')
        expect(mockFunc).toHaveBeenCalled()
        expect(mockFunc).toHaveBeenCalledWith(1463342234)
    })
})