import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ProductDetails from "./product-details";

Enzyme.configure({ adapter: new Adapter() });

describe('ProductDetails tests', () => {
    let back = jest.fn()
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<ProductDetails backButton={() => {back()}} id={'13564'}/>)
    })
    it('renders correct divs and values', () => {
        expect(wrapper.find({'data-testid':'image-div'}).exists()).toBe(true)
        expect(wrapper.find({'data-testid':'title-div'}).exists()).toBe(true)
        expect(wrapper.find({'data-testid':'description-div'}).exists()).toBe(true)
        expect(wrapper.find({'data-testid':'price-div'}).exists()).toBe(true)
        expect(wrapper.find({'data-testid':'buy-div'}).exists()).toBe(true)
        expect(wrapper.find({'data-testid':'back-button-div'}).exists()).toBe(true)
        expect(wrapper.find({'data-testid':'allergy-div'}).exists()).toBe(true)
    })
})
