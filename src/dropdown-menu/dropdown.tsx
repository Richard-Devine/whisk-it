import * as React from "react";
import {Link} from "react-router-dom";
import {DropDownState} from "../webpage-types";
import menuIcon from "../website-icons/menu-icon.webp";

export default class Dropdown extends React.Component {

    state: DropDownState = {
        menuDisplay: false
    };

    showMenu() {
        this.setState({menuDisplay: !this.state.menuDisplay});
    };

    dropDown() {
        if (this.state.menuDisplay) {
            return (
                <div className="drop-down-wrapper" onClick={() => this.showMenu()}>
                    <div className="drop-down-options">
                        <Link to="/">Home</Link>
                    </div>
                    <div className="drop-down-options">
                        <Link to="/Products">Products</Link>
                    </div>
                    <div className="drop-down-options">
                        <Link to="/Offers">Offers</Link>
                    </div>
                    <div className="drop-down-options">
                        <Link to="/Gallery">Gallery</Link>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    };

    render() {
        return (
            <div className="drop-down-container" >
                <span className="drop-down-image-span" onClick={() => {
                    this.showMenu()
                }}><img src={menuIcon} alt="Dropdown Icon"/></span>
                {this.dropDown()}
            </div>
        );
    };
};