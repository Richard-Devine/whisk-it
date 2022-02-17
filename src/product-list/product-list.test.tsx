import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ProductList from './product-list'

Enzyme.configure({ adapter: new Adapter() });

describe('ProductList tests', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<ProductList onClick={() => null}/>)
    })
    it('renders Product container div on first render', () => {
        expect(wrapper.find({'data-testid':'product-container'}).exists()).toBe(true)
    })
})