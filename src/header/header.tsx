import * as React from 'react'
import {HeaderProps} from "../types";
import Menu from "../menu/menu";

export default class Header extends React.Component <HeaderProps> {
    render() {
        return(
            <div>
                <div data-testid='logo-container'>
                    <img/>
                </div>
                <div data-testid='menu-container'>
                    <Menu onClick={(x) => this.props.onClick(x)}/>
                </div>
            </div>
        )
    }
}