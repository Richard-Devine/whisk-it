import * as React from 'react'
import Header from '../header/header'
import ProductList from "../product-list/product-list";
import {LandingPageState} from "../types";


export default class LandingPage extends React.Component {
    state: LandingPageState = {
        viewDetails: false
    }

    productView() {
        if (this.state.viewDetails === false) {
            return (
                <div data-testid='product-list-container'>
                    <ProductList/>
                </div>
            )
        } else {
            return (
                <div data-testid='product-details-container'>
                    <ProductList/>
                </div>
            )
        }
    }


    displaySwitch() {
        this.setState({viewDetails: !this.state.viewDetails})
    }

    render() {
        return (
            <div>
                <div data-testid='header-container'>
                    <Header/>
                </div>
                <div>
                    {this.productView()}
                </div>
            </div>
        )
    }
}