import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import LandingPage from './landing-page'
import Home from "../home/home";
import Header from "../header/header";
import ProductDetails from "../product-details/product-details"
import ProductList from "../product-list/product-list"
import Offers from "../offers/offers";
import Gallery from "../gallery/gallery";
import ContactUs from "../contact-us/contact-us";
import React from 'react'

Enzyme.configure({ adapter: new Adapter() });

describe('LandingPage tests', () => {

    it('productView renders correct components on state change',() => {
        const wrapper = shallow(<LandingPage/>)
        expect(wrapper.find({'data-testid':'header-container'}).exists()).toBe(true)
        expect(wrapper.find({'data-testid':'home-container'}).exists()).toBe(true)
        expect(wrapper.find({'data-testid':'product-details-container'}).exists()).toBe(false)
        expect(wrapper.find({'data-testid':'product-list-container'}).exists()).toBe(false)
        expect(wrapper.find({'data-testid':'offers-container'}).exists()).toBe(false)
        expect(wrapper.find({'data-testid':'gallery-container'}).exists()).toBe(false)
        expect(wrapper.find({'data-testid':'contact-us-container'}).exists()).toBe(false)
        expect(wrapper.find(Header).exists()).toBe(true)
        expect(wrapper.find(Home).exists()).toBe(true)
        const spy = jest.spyOn(wrapper.instance(), 'displaySwitch')
        wrapper.find(Home).simulate('click')
        expect(spy).toHaveBeenCalled()

        wrapper.setState({pageView: 'ProductDetails'})
        expect(wrapper.find({'data-testid':'home-container'}).exists()).toBe(false)
        expect(wrapper.find({'data-testid':'product-details-container'}).exists()).toBe(true)
        expect(wrapper.find({'data-testid':'header-container'}).exists()).toBe(true)
        //expect(wrapper.find(ProductDetails).exists()).toBe(true) <---------IS THIS NEEDED
        expect(wrapper.find(ProductDetails).prop('id')).toBe("")
        const ProductDetailsSpy = jest.spyOn(wrapper.instance(), 'displaySwitch')
        wrapper.find(ProductDetails).simulate('click')
        expect(ProductDetailsSpy).toHaveBeenCalled()

        wrapper.setState({pageView: 'ProductList'})
        expect(wrapper.find({'data-testid':'product-details-container'}).exists()).toBe(false)
        expect(wrapper.find({'data-testid':'product-list-container'}).exists()).toBe(true)
        expect(wrapper.find({'data-testid':'header-container'}).exists()).toBe(true)
        const ProductListSpy = jest.spyOn(wrapper.instance(), 'viewProduct')
        expect(wrapper.find(ProductList).exists()).toBe(true)
        wrapper.find(ProductList).simulate('click')
        expect(ProductListSpy).toHaveBeenCalled()

        wrapper.setState({pageView: 'Offers'})
        expect(wrapper.find({'data-testid':'product-list-container'}).exists()).toBe(false)
        expect(wrapper.find({'data-testid':'offers-container'}).exists()).toBe(true)
        expect(wrapper.find({'data-testid':'header-container'}).exists()).toBe(true)
        expect(wrapper.find(Offers).exists()).toBe(true)

        wrapper.setState({pageView: 'Gallery'})
        expect(wrapper.find({'data-testid':'offers-container'}).exists()).toBe(false)
        expect(wrapper.find({'data-testid':'gallery-container'}).exists()).toBe(true)
        expect(wrapper.find({'data-testid':'header-container'}).exists()).toBe(true)
        expect(wrapper.find(Gallery).exists()).toBe(true)

        wrapper.setState({pageView: 'ContactUs'})
        expect(wrapper.find({'data-testid':'gallery-container'}).exists()).toBe(false)
        expect(wrapper.find({'data-testid':'contact-us-container'}).exists()).toBe(true)
        expect(wrapper.find({'data-testid':'header-container'}).exists()).toBe(true)
        expect(wrapper.find(ContactUs).exists()).toBe(true)
    })
    it('displaySwitch changes state when called', () => {
        const wrapper = shallow(<LandingPage/>)
        expect(wrapper.instance().state.pageView as string).toBe('Home')
        wrapper.instance().displaySwitch('Gallery')
        expect(wrapper.instance().state.pageView as string).toBe('Gallery')
    })
    it('viewProduct changes state when called', () => {
        const wrapper = shallow(<LandingPage/>)
        expect(wrapper.instance().state.productId as string).toBe("")
        expect(wrapper.instance().state.pageView as string).toBe('Home')
        wrapper.instance().viewProduct('mini-egg-brownie')
        expect(wrapper.instance().state.productId as string).toBe('mini-egg-brownie')
        expect(wrapper.instance().state.pageView as string).toBe('ProductDetails')
    })
})