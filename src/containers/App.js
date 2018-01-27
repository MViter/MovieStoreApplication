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

// export default class App extends Component {
//
//     render() {
//         return (
//             <MuiThemeProvider>
//                 <div className = { Styles.mainContainer }>
//                     <Main/>
//                     {this.props.children}
//                 </div>
//             </MuiThemeProvider>
//         )
//     }
// }


export default class App extends Component {
    componentDidMount () {
        const beginningPost = [
            {'text' : 'First item with customized long title', 'comments' : ['All you need is love', 'We are the champions', 'Knock knock knocking on the heaven`s door']},
            {'text' : 'Second Item', 'comments' : ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam commodi consequatur esse illo\n' +
            '\t\t\t\tmaiores omnis quo quos sint, totam vero voluptate. Aliquid assumenda debitis deserunt iste officiis\n' +
            '\t\t\t\tpossimus temporibus?']},
            {'text' : 'Third Item (short one)', 'comments' : ['Lorem ipsum', 'Ipsum Lorem', 'A aliquam', 'commodi', 'Lorem', 'ipsum', 'Lorem', 'Lorem', 'Lorem', 'Lorem', 'Lorem', 'Lorem', 'Lorem', 'Lorem', 'Lorem', 'Lorem', 'Lorem', 'Lorem', 'Lorem']}
        ];

        // const beginningPost = [
        //     {
        //         text: 'First item with customized long title',
        //         comments: [
        //             'All you need is love',
        //             'We are the champions',
        //             'Knock knock knocking on the heaven`s door'
        //         ]
        //     },
        //     {'text' : 'Second Item', 'comments' : ['Dolor sit amet, consectetur adipisicing elit']},
        //     {'text' : 'Third Item', 'comments' : ['Lorem ipsum', 'Ipsum Lorem', 'A aliquam commodi']}
        // ];


        if(! localStorage.getItem('Postlist')) {
            window.localStorage.setItem('Postlist', JSON.stringify(beginningPost));
        }
    }

    render() {
        return (
            <MuiThemeProvider>
                <div className = { Styles.mainContainer }>
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        )
    }
}




