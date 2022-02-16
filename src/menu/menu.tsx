import * as React from 'react'
import {MenuProps} from "../types";

export default class Menu extends React.Component <MenuProps> {
    render() {
        return (
            <div>
                <div onClick={() => this.props.onClick('ProductList')}>
                </div>
            </div>
        )
    }
}
