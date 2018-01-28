// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getDefaultData from './data.js';

export default class App extends Component {
    componentDidMount () {
        const beginingPosts = getDefaultData();

        if (!localStorage.getItem('itemsList')) {
            window.localStorage.setItem('itemsList', JSON.stringify(beginingPosts));
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
