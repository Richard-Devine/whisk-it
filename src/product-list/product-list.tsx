import * as React from "react";
import {ProductListProps, ProductListState} from "../webpage-types";
import Product from "../product/product";
import {data} from "../data";


export default class ProductList extends React.Component <ProductListProps, ProductListState> {

    state: ProductListState = {
        productRange: data
    };

    render() {
        return (
            <div>
                {this.state.productRange.map((product, i) => {
                    return (
                        <div data-testid="product-container" key={i}>
                            <Product id={product.id} title={product.title} allergens={product.allergens}
                                     description={product.description} price={product.price} imageURL={product.imageURL}
                                     onClick={(x) => {
                                         this.props.onClick(x)
                                     }}/>
                        </div>
                    );
                })}
            </div>
        );
    };
};
