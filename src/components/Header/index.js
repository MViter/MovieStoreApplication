// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.scss';


export default class Header extends Component {
    render () {
        return (<header className = { Styles.header }>
            <div className = { Styles.textContent } >
                <h1 className = { Styles.title } >Sayer</h1>
                <h3 className = { Styles.titleComment }>World`s most used time waster</h3>
            </div>
        </header>);
    }
}
