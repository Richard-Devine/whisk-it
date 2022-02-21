import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Home from './home'

Enzyme.configure({ adapter: new Adapter() });

describe('Home tests', () => {

    it('contains blurb, offers, new products and instagram feed', () => {
        const wrapper = shallow(<Home onClick={() => null}/>)
        expect(wrapper.find({'data-testid':'blurb-container'}).exists()).toBe(true)
        expect(wrapper.find({'data-testid':'offers-container'}).exists()).toBe(true)
        expect(wrapper.find({'data-testid':'new-products-container'}).exists()).toBe(true)
        expect(wrapper.find({'data-testid':'instagram-container'}).exists()).toBe(true)
        expect(wrapper.find({'data-testid':'footer-container'}).exists()).toBe(true)
    })
})