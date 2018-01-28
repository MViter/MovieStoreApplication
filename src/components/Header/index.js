// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.scss';


export default class Header extends Component {
    render () {
        return (<header className = { Styles.header }>
            <div className = { Styles.text_content } >
                <h1>Sayer</h1>
                <h3>World`s most used time waster</h3>
            </div>
        </header>);
    }
}
