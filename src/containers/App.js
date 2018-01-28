// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import defaultData from './data.js';

export default class App extends Component {
    componentDidMount () {
        const beginingPosts = defaultData();

        if (!localStorage.getItem('Itemslist')) {
            window.localStorage.setItem('Itemslist', JSON.stringify(beginingPosts));
        }
    }

    render () {
        return (
            <MuiThemeProvider>
                <div className = { Styles.main_container }>
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        );
    }
}
