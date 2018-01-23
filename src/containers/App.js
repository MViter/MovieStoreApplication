// Core
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// Instruments
import Styles from './styles.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Components
import Main from '../components/Main';

export default class App extends Component {
    render () {
        return  <MuiThemeProvider>
                    <div className = { Styles.mainContainer }>
                        <Main />
                    </div>
                </MuiThemeProvider>
    }
}