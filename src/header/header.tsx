import * as React from "react";
import {HeaderProps} from "../webpage-types";
import Menu from "../menu/menu";
import whiskItLogo from "../website-icons/Whisk it banner transparent.webp";
import {Link} from "react-router-dom";

export default class Header extends React.Component <HeaderProps> {
    render() {
        return (
            <div>
                <div data-testid="logo-container" className="header-banner-div">
                   <Link to="/"><img src={whiskItLogo} alt="Whisk It logo" className="header-banner-image"/></Link>
                </div>
                <div data-testid="menu-container" className="menu-container">
                    <Menu myBasket={this.props.myBasket}/>
                </div>
            </div>
        );
    };
};