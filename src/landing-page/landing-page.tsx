import * as React from 'react'
import Header from '../header/header'
import ProductList from "../product-list/product-list";
import Home from "../home/home"
import ProductDetails from "../product-details/product-details";
import Gallery from "../gallery/gallery";
import ContactUs from "../contact-us/contact-us";
import Offers from "../offers/offers"
import Basket from "../basket/basket"
import Footer from "../footer/footer";
import Checkout from "../checkout/checkout";
import {dataProps, LandingPageState, itemProps} from "../webpage-types";
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";

export default class LandingPage extends React.Component {

    state: LandingPageState = {
        pageView: "Home",
        productId: 0,
        myBasket: [],
        basketTotal: 0
    }

    productView() {
        switch (this.state.pageView) {
            case "Home":
                return (
                    <div data-testid='home-container'>
                        <Home onClick={(x) => {
                            this.displaySwitch(x)
                        }}/>
                    </div>
                )
            case "ProductList":
                return (
                    <div data-testid='product-list-container'>
                        <ProductList onClick={(x) => {
                            this.viewProduct(x)
                        }}/>
                    </div>
                )
            case "ProductDetails":
                return (
                    <div data-testid='product-details-container'>
                        <ProductDetails backButton={() => {
                            this.displaySwitch('ProductList')
                        }} id={this.state.productId} addProductButton={(x) => {
                            this.addToBasket(x)
                        }}/>
                    </div>
                )
            case "Offers":
                return (
                    <div data-testid='offers-container'>
                        <Offers onClick={(x) => {
                            this.viewProduct(x)
                        }}/>
                    </div>
                )
            case "Gallery":
                return (
                    <div data-testid='gallery-container'>
                        <Gallery/>
                    </div>
                )
            case "ContactUs":
                return (
                    <div data-testid='contact-us-container'>
                        <ContactUs/>
                    </div>
                )
            case "Basket":
                return (
                    <div data-testid='basket-container' className='basket-container'>
                        <Basket myBasket={this.state.myBasket} myBasketTotal={this.state.basketTotal}
                                deleteItem={() => {this.totalPrice()}} checkout={() => {this.displaySwitch("Checkout")}}/>
                    </div>
                )
            case "Checkout":
                return (
                    <div className='checkout-container'>
                        <Checkout myBasket={this.state.myBasket} checkoutComplete={() => {this.displaySwitch("CheckoutComplete")}}/>
                    </div>
                )
            case "CheckoutComplete":
                return (
                    <div>

                    </div>
                )
        }
    }

    viewProduct(product: number) {
        this.setState({productId: product})
        this.setState({pageView: 'ProductDetails'})
    }

    displaySwitch(page: string) {
        this.setState({pageView: page})
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
                console.log(total)
                console.log(product.price)
                this.setState({basketTotal: total})
            })
        } else{
            total = 0
            this.setState({basketTotal: total})
        }
    }

    render() {
        return (
            <div className='website-container'>
                <div data-testid='header-container'>
                    <Header onClick={(x) => {
                        this.displaySwitch(x)
                    }} myBasket={this.state.basketTotal}/>
                </div>
                <Routes>

                    <Route path="/" element={<Home onClick={(x) => {
                        this.displaySwitch(x)
                    }}/>}/>

                    <Route path="Products" element={<ProductList onClick={(x) => {
                        this.viewProduct(x)
                    }}/>}/>

                    <Route path="Product-Details" element={<ProductDetails backButton={() => {
                        this.displaySwitch('ProductList')
                    }} id={this.state.productId} addProductButton={(x) => {
                        this.addToBasket(x)
                    }}/>}/>

                    <Route path="Offers" element={<Offers onClick={(x) => {
                        this.viewProduct(x)
                    }}/>}/>

                    <Route path="Gallery" element={<Gallery />}/>

                    <Route path="Basket" element={<Basket myBasket={this.state.myBasket} myBasketTotal={this.state.basketTotal}
                                                           deleteItem={() => {this.totalPrice()}} checkout={() => {this.displaySwitch("Checkout")}}/>}/>

                    <Route path="Checkout" element={<Checkout myBasket={this.state.myBasket} checkoutComplete={() => {this.displaySwitch("CheckoutComplete")}}/>}/>

                    <Route path="Checkout" element={<Checkout myBasket={this.state.myBasket} checkoutComplete={() => {this.displaySwitch("CheckoutComplete")}}/>}/>
                </Routes>
                <div>
                    <Footer/>
                </div>
            </div>
        )
    }
}
//TODO Landing page tests