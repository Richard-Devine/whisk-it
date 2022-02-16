import * as React from 'react'
import Header from '../header/header'
import ProductList from "../product-list/product-list";
import Home from "../home/home"
import {LandingPageState} from "../types";


export default class LandingPage extends React.Component {
    state: LandingPageState = {
        pageView: "Home"
    }

    productView() {
        switch (this.state.pageView) {
            case "Home":
                return (
                    <div>
                        <Home/>
                    </div>
                )
            case "ProductList":
                return (
                    <div>
                        <ProductList/>
                    </div>
                )
            case "ProductDetails":
                return (
                    <div>
                        <ProductDetails/>
                    </div>
                )
            case "Gallery":
                return (
                    <div>
                        <Gallery/>
                    </div>
                )
            case "ContactUs":
                return (
                    <div>
                        <ContactUs/>
                    </div>
                )
        }
    }

    displaySwitch(page) {
        switch (page) {
            case "Home":
                this.setState({pageView: "Home"})
                break;
            case "ProductList":
                this.setState({pageView: "ProductList"})
                break;
            case "Product-Details":
                this.setState({pageView: "ProductDetails"})
                break;
            case "Gallery":
                this.setState({pageView: "Gallery"})
                break;
            case "Contact-Us":
                this.setState({pageView: "ContactUs"})
                break;
        }
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