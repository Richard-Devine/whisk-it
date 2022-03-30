import * as React from 'react'
import Header from '../header/header'
import ProductList from "../product-list/product-list";
import Home from "../home/home"
import ProductDetails from "../product-details/product-details";
import Gallery from "../gallery/gallery";
import Offers from "../offers/offers"
import Basket from "../basket/basket"
import Footer from "../footer/footer";
import Checkout from "../checkout/checkout";
import CheckoutComplete from "../checkout-complete/checkout-complete";
import {dataProps, LandingPageState, itemProps} from "../webpage-types";
import {Route, Routes} from "react-router-dom";



export default class LandingPage extends React.Component {

    state: LandingPageState = {
        productId: 0,
        myBasket: [],
        basketTotal: 0
    }

    viewProduct(product: number) {
        this.setState({productId: product})
    }

    addToBasket(product: dataProps) {
        let item:itemProps = {
            id: new Date(Date()).toISOString(),
            title: product.title,
            price: product.price,
            imageURL:product.imageURL,
        }
        if(product.options){
            if(product.options["4"]){
            item.options = {1:product.options["1"], 2:product.options["2"], 3:product.options["3"], 4: product.options["4"]}
            } else {
                item.options = {1: product.options["1"], 2: product.options["2"]}
            }
        }
        this.state.myBasket.push(item)
        this.totalPrice()
    }

    totalPrice() {
        let total: number = 0
        if(this.state.myBasket.length > 0) {
            this.state.myBasket.map((product, i) => {
                total += product.price
                this.setState({basketTotal: total})
            })
        } else {
            total = 0
            this.setState({basketTotal: total})
        }
    }
    completeOrder(){
        this.setState({myBasket:[]})
        this.totalPrice()
    }

    render() {
        return (
            <div className='website-container'>
                <div data-testid='header-container' className="header-container">
                    <Header myBasket={this.state.basketTotal}/>
                </div >
                <Routes>
                    <Route path="/" element={<Home onClick={(x) => {
                        this.viewProduct(x)
                    }}/>}/>

                    <Route path="Products" element={<ProductList onClick={(x) => {
                        this.viewProduct(x)
                    }}/>}/>

                    <Route path="Products/*" element={<ProductDetails id={this.state.productId} addProductButton={(x) => {
                        this.addToBasket(x)
                    }}/>}/>

                    <Route path="Offers" element={<Offers onClick={(x) => {
                        this.viewProduct(x)
                    }}/>}/>

                    <Route path="Gallery" element={<Gallery />}/>

                    <Route path="Basket" element={<Basket myBasket={this.state.myBasket} myBasketTotal={this.state.basketTotal}
                                                           deleteItem={() => {this.totalPrice()}} />}/>

                    <Route path="Checkout" element={<Checkout myBasket={this.state.myBasket} completeOrder={() => this.completeOrder()}/>}/>

                    <Route path="CheckoutComplete" element={<CheckoutComplete myBasket={this.state.myBasket} />}/>
                </Routes>
                <div>
                    <Footer/>
                </div>
            </div>
        )
    }
}
//TODO Landing page tests