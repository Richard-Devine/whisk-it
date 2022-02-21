import * as React from 'react'
import Header from '../header/header'
import ProductList from "../product-list/product-list";
import Home from "../home/home"
import ProductDetails from "../product-details/product-details";
import Gallery from "../gallery/gallery";
import ContactUs from "../contact-us/contact-us";
import Offers from "../offers/offers"
import Basket from "../basket/basket"
import {LandingPageState} from "../webpage-types";

export default class LandingPage extends React.Component {

    state: LandingPageState = {
        pageView: "Home",
        productId: ""
    }

    productView() {
        switch (this.state.pageView) {
            case "Home":
                return (
                    <div data-testid='home-container'>
                        <Home onClick={(x) => {this.displaySwitch(x)}}/>
                    </div>
                )
            case "ProductList":
                return (
                    <div data-testid='product-list-container'>
                        <ProductList onClick={(x) => {this.viewProduct(x)}}/>
                    </div>
                )
            case "ProductDetails":
                return (
                    <div data-testid='product-details-container'>
                        <ProductDetails backButton={() => {this.displaySwitch('ProductList')}} id={this.state.productId}/>
                    </div>
                )
            case "Offers":
                return (
                    <div data-testid='offers-container'>
                        <Offers/>
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
                    <div data-testid='basket-container'>
                        <Basket/>
                    </div>
                )
        }
    }

    viewProduct(product: string) {
        this.setState({productId: product})
        this.setState({pageView: 'ProductDetails'})
    }

    displaySwitch(page: string) {
        this.setState({pageView: page})
    }

    render() {
        return (
            <div>
                <div data-testid='header-container'>
                    <Header onClick={(x) => {
                        this.displaySwitch(x)
                    }}/>
                </div>
                <div>
                    {this.productView()}
                </div>
            </div>
        )
    }
}