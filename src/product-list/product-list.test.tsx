import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ProductList from './product-list'
import Product from "../product/product";
import * as React from "react";
import Home from "../home/home";

Enzyme.configure({ adapter: new Adapter() });

describe('ProductList tests', () => {

    it('renders Product container div on first render', () => {
        const data = [{id: '13564', title: 'Brownie', imageURL: 'www.somewhere.com/image1', description: 'This is a brownie', price: '2.50', offer: false, allergens: 'milk'}]
        const func = jest.fn()
        const wrapper = shallow(<ProductList onClick={() => func()}/>)
        wrapper.setState({productRange:data})
        expect(wrapper.find({'data-testid': 'product-container'}).exists()).toBe(true)
        expect(wrapper.find(Product).exists()).toBe(true)
        expect(wrapper.find(Product).prop('title')).toBe("Brownie")
        expect(wrapper.find(Product).prop('description')).toBe("This is a brownie")
        expect(wrapper.find(Product).prop('price')).toBe("2.50")
        expect(wrapper.find(Product).prop('id')).toBe("13564")
        wrapper.find(Product).simulate('click')
        expect(wrapper.prop('func')).toHaveBeenCalled()
    })
})