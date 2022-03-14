import * as React from 'react'
import Basket from "./basket";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe('basket tests', () => {
    it('render correct divs', () => {
        const wrapper = shallow(<Basket myBasket={[]}  myBasketTotal={10} deleteItem={() => null}/>)
        expect(wrapper.find({'data-testid':'basket-wrapper'}).exists()).toBe(false)
        wrapper.setProps({myBasket:[{id: 6, title: 'Biscoff Blondie', imageURL: 'www.somewhere.com/image3', description: 'Our signature fudgey Blondie with Biscoff melted throughout, white chocolate chunks and topped with the famous Biscoff biscuits.', price: '13', offer: false, allergens: 'Wheat, Eggs, Dairy, Soya, may contain Nuts'},
                {id: 7, title: 'Milky Way Crispy Roll Blondie', imageURL: 'www.somewhere.com/image3', description: 'Our signature Blondie recipe, full with milk chocolate chunks and Milky Way crispy rolls.', price: '13', offer: false, allergens: 'Wheat, Eggs, Dairy, Soya, may contain Nuts'}]})
        expect(wrapper.find({'data-testid':'basket-items-wrapper'}).exists()).toBe(true)
        expect(wrapper.find({'data-testid':'image-div'}).at(0).contains(<img src={'www.somewhere.com/image3'} alt={'Biscoff Blondie'}/>)).toBe(true)
        expect(wrapper.find({'data-testid':'delete-button-div'}).at(0).text()).toBe('X')
        expect(wrapper.find({'data-testid':'title-div'}).at(0).text()).toBe('Biscoff Blondie')
        expect(wrapper.find({'data-testid':'price-div'}).at(0).text()).toBe('13')
        expect(wrapper.find({'data-testid':'buy-div'}).at(0).text()).toBe('Buy Via Paypal')
    })
    it('onClick functions work as expected', () => {
        const mockFunc = jest.fn()
        const wrapper = shallow(<Basket myBasket={[]} myBasketTotal={10} deleteItem={mockFunc}/>)
        const instance = wrapper.instance() as any
        wrapper.setProps({myBasket:[{id: 6, title: 'Biscoff Blondie', imageURL: 'www.somewhere.com/image3', description: 'Our signature fudgey Blondie with Biscoff melted throughout, white chocolate chunks and topped with the famous Biscoff biscuits.', price: 13, offer: false, allergens: 'Wheat, Eggs, Dairy, Soya, may contain Nuts'},
                {id: 7, title: 'Milky Way Crispy Roll Blondie', imageURL: 'www.somewhere.com/image3', description: 'Our signature Blondie recipe, full with milk chocolate chunks and Milky Way crispy rolls.', price: 13, offer: false, allergens: 'Wheat, Eggs, Dairy, Soya, may contain Nuts'}]})

        const removeFromBasketSpy = jest.spyOn(instance, 'removeFromBasket')
        wrapper.find({'data-testid':'delete-button-div'}).at(0).simulate('click')
        expect(removeFromBasketSpy).toHaveBeenCalledWith(0)
        expect(mockFunc).toHaveBeenCalled()
    })
    it('removeFromBasket function works as expected', () => {
        const wrapper = mount(<Basket myBasketTotal={10} myBasket={[{id: 6, title: 'Biscoff Blondie', imageURL: 'www.somewhere.com/image3', description: 'Our signature fudgey Blondie with Biscoff melted throughout, white chocolate chunks and topped with the famous Biscoff biscuits.', price: 13, offer: false, allergens: 'Wheat, Eggs, Dairy, Soya, may contain Nuts'},
            {id: 7, title: 'Milky Way Crispy Roll Blondie', imageURL: 'www.somewhere.com/image3', description: 'Our signature Blondie recipe, full with milk chocolate chunks and Milky Way crispy rolls.', price: 13, offer: false, allergens: 'Wheat, Eggs, Dairy, Soya, may contain Nuts'}]}  deleteItem={() => null}/>)
        const instance = wrapper.instance() as any

        instance.removeFromBasket(0)
        expect(wrapper.prop('myBasket')).toStrictEqual([{id: 7, title: 'Milky Way Crispy Roll Blondie', imageURL: 'www.somewhere.com/image3', description: 'Our signature Blondie recipe, full with milk chocolate chunks and Milky Way crispy rolls.', price: 13, offer: false, allergens: 'Wheat, Eggs, Dairy, Soya, may contain Nuts'}])
    })
})

//TODO add myBasketTotal tests