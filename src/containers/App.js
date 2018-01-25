// Core
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router'

// Instruments
import Styles from './styles.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// Components
import Main from '../components/Main';

export default class App extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <div className = { Styles.mainContainer }>
                    <Main/>
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        )
    }
}




