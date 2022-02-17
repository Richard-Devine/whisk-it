import * as React from 'react'
import {ProductListProps, ProductListState, ProductProps} from "../webpage-types";
import Product from '../product/product'

export default class ProductList extends React.Component <ProductListProps, ProductListState> {
    state : ProductListState = {
        productRange: [{id: new Date(Date()), title: 'Brownie', imageURL: 'www.somewhere.com/image1', description: 'This is a brownie', price: 2.50, offer: false},
            {id: new Date(1463342).toString(), title: 'Blondie', imageURL: 'www.somewhere.com/image2', description: 'This is a blondie', price: 4.50, offer: false},
            {id: new Date(1463342234).toString(), title: 'Offer', imageURL: 'www.somewhere.com/image3', description: 'This is an offer', price: 10.50, offer: true}]
    }
    render() {
        return(
            <div>
                {this.state.productRange.map((product:ProductProps) => {
                    return(
                        <div data-testid='product-container'>
                            <Product title={product.title} description={product.description} price={product.price}/>
                        </div>
                    )
                })}
            </div>
        )
    }
}