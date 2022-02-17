import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import LandingPage from './landing-page'

Enzyme.configure({ adapter: new Adapter() });

describe('LandingPage tests', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<LandingPage/>)
    })
    afterEach(() => {
        wrapper.update()
    })
    it('renders a Header and Home component on first load', () => {
        expect(wrapper.find({'data-testid':'header-container'}).exists()).toBe(true)
        expect(wrapper.find({'data-testid':'home-container'}).exists()).toBe(true)
    })
    it('productView renders correct components on state change',() => {
        expect(wrapper.find({'data-testid':'product-details-container'}).exists()).toBe(false)
        expect(wrapper.find({'data-testid':'product-list-container'}).exists()).toBe(false)
        expect(wrapper.find({'data-testid':'offers-container'}).exists()).toBe(false)
        expect(wrapper.find({'data-testid':'gallery-container'}).exists()).toBe(false)
        expect(wrapper.find({'data-testid':'contact-us-container'}).exists()).toBe(false)
        wrapper.setState({pageView: 'ProductDetails'})
        expect(wrapper.find({'data-testid':'home-container'}).exists()).toBe(false)
        expect(wrapper.find({'data-testid':'product-details-container'}).exists()).toBe(true)
        expect(wrapper.find({'data-testid':'header-container'}).exists()).toBe(true)
        wrapper.setState({pageView: 'ProductList'})
        expect(wrapper.find({'data-testid':'product-details-container'}).exists()).toBe(false)
        expect(wrapper.find({'data-testid':'product-list-container'}).exists()).toBe(true)
        expect(wrapper.find({'data-testid':'header-container'}).exists()).toBe(true)
        wrapper.setState({pageView: 'Offers'})
        expect(wrapper.find({'data-testid':'product-list-container'}).exists()).toBe(false)
        expect(wrapper.find({'data-testid':'offers-container'}).exists()).toBe(true)
        expect(wrapper.find({'data-testid':'header-container'}).exists()).toBe(true)
        wrapper.setState({pageView: 'Gallery'})
        expect(wrapper.find({'data-testid':'offers-container'}).exists()).toBe(false)
        expect(wrapper.find({'data-testid':'gallery-container'}).exists()).toBe(true)
        expect(wrapper.find({'data-testid':'header-container'}).exists()).toBe(true)
        wrapper.setState({pageView: 'ContactUs'})
        expect(wrapper.find({'data-testid':'gallery-container'}).exists()).toBe(false)
        expect(wrapper.find({'data-testid':'contact-us-container'}).exists()).toBe(true)
        expect(wrapper.find({'data-testid':'header-container'}).exists()).toBe(true)
    })
    it('displaySwitch changes state when called', () => {
        expect(wrapper.instance().state.pageView as string).toBe('Home')
        wrapper.instance().displaySwitch('Gallery')
        expect(wrapper.instance().state.pageView as string).toBe('Gallery')
    })
    it('viewProduct changes state when called', () => {
        expect(wrapper.instance().state.productId as string).toBe(null)
        wrapper.instance().viewProduct('mini-egg-brownie')
        expect(wrapper.instance().state.productId as string).toBe('mini-egg-brownie')
        expect(wrapper.instance().state.pageView as string).toBe('ProductDetails')
    })
})