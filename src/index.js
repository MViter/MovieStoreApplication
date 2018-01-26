// Core
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, Redirect } from 'react-router';
import { BrowserRouter, HashRouter } from 'react-router-dom'

// Containers
import App from './containers/App';
import Main from './components/Main';
import NewItem from './components/NewItem';
import Comments from './components/Comments';

// ReactDOM.render((
//     <BrowserRouter>
//         <Router component = { App } path='/'>
//             <Route exact component = { Main } path='/' />
//             <Route component = { NewItem } path = { '/newitem'} />
//             <Route component = { Comments} path = { '/comments/:id' } />
//             <Redirect component = { Main } to = { '/' } />
//         </Router>
//     </BrowserRouter>
//
// ), document.getElementById('root'));

ReactDOM.render((
<BrowserRouter>
    <App>
        <Route exact component = { Main } path='/' />
        <Route component = { NewItem } path = { '/newitem'} />
        <Route component = { Comments} path = { '/comments/:id' } />
    </App>
</BrowserRouter>
), document.getElementById('root'));
