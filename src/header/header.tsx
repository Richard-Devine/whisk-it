import * as React from "react";
import {HeaderProps} from "../webpage-types";
import Menu from "../menu/menu";
import whiskItLogo from "../website-icons/Whisk it banner transparent.webp";

export default class Header extends React.Component <HeaderProps> {
    render() {
        return (
            <div>
                <div data-testid="logo-container" className="header-banner-div">
                    <img src={whiskItLogo} alt="Whisk It logo" className="header-banner-image"/>
                </div>
                <div data-testid="menu-container" className="menu-container">
                    <Menu myBasket={this.props.myBasket}/>
                </div>
            </div>
        );
    };
};