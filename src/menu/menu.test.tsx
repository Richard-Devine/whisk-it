import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Menu from './menu'

Enzyme.configure({ adapter: new Adapter() });

describe('Menu tests', () => {
    it('renders all menu options', () => {
        let wrapper = shallow(<Menu onClick={() => null}/>)
        expect(wrapper.find({'data-testid':'home-button'}).exists()).toBe(true)
        expect(wrapper.find({'data-testid':'products-button'}).exists()).toBe(true)
        expect(wrapper.find({'data-testid':'offers-button'}).exists()).toBe(true)
        expect(wrapper.find({'data-testid':'gallery-button'}).exists()).toBe(true)
        expect(wrapper.find({'data-testid':'contact-us-button'}).exists()).toBe(true)
    })
})