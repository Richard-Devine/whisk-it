import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Product from './product'

Enzyme.configure({ adapter: new Adapter() });

describe('Product tests', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<Product description={'description'} price={'3.40'} title={'title'} image={'some/src'}/>)
    })
    it('renders divs for properties and their values are displayed', () => {
        expect(wrapper.find({'data-testid':'description-div'}).exists()).toBe(true)
        expect(wrapper.find({'data-testid':'description-div'}).text().includes('description' as string)).toBe(true)
        expect(wrapper.find({'data-testid':'title-div'}).exists()).toBe(true)
        expect(wrapper.find({'data-testid':'title-div'}).text().includes('title' as string)).toBe(true)
        expect(wrapper.find({'data-testid':'price-div'}).exists()).toBe(true)
        expect(wrapper.find({'data-testid':'price-div'}).text().includes('£3.40' as string)).toBe(true)
        expect(wrapper.find({'data-testid':'image-div'}).exists()).toBe(true)
        expect(wrapper.find({'data-testid':'image-div'}).contains(<img src={'some/src'} alt={'title'}/>)).toBe(true)
    })
})