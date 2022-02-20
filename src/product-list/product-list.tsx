import * as React from 'react'
import {ProductListProps, ProductListState, ProductProps} from "../webpage-types";
import Product from '../product/product'
import {data} from '../data'

export default class ProductList extends React.Component <ProductListProps, ProductListState> {
    state : ProductListState = {
        productRange: data
    }
    render() {
        return(
            <div>
                {this.state.productRange.map((product: ProductProps, i:number) => {
                    return(
                        <div data-testid='product-container' key={i}>
                            <Product title={product.title} description={product.description} price={product.price} onClick={(x:string) => {this.props.onClick(x)}} id={product.id}/>
                        </div>
                    )
                })}
            </div>
        )
    }
}
