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
    it('renders a Header and ProductList component', () => {
        expect(wrapper.find({'data-testid': 'header-container'}).exists()).toBe(true)
        expect(wrapper.find({'data-testid':'product-list-container'}).exists()).toBe(true)
    })
    it('switches to ProductDetails on state change',() => {
        expect(wrapper.find({'data-testid':'product-details-container'}).exists()).toBe(false)
        wrapper.setState({viewDetails: true})
        expect(wrapper.find({'data-testid':'product-list-container'}).exists()).toBe(false)
        expect(wrapper.find({'data-testid':'product-details-container'}).exists()).toBe(true)
        expect(wrapper.find({'data-testid': 'header-container'}).exists()).toBe(true)
    })
    it('displaySwitch changes state when called', () => {
        expect(wrapper.instance().state.viewDetails as boolean).toBe(false)
        wrapper.instance().displaySwitch()
        expect(wrapper.instance().state.viewDetails as boolean).toBe(true)
    })
    it('', () => {

    })
})