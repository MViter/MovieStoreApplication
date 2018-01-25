// Core
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Redirect } from 'react-router';
import { BrowserRouter, HashRouter } from 'react-router-dom'

// Containers
import App from './containers/App';
import Main from './components/Main';
import NewItem from './components/NewItem';
import Comments from './components/Comments';

ReactDOM.render((
    <BrowserRouter>
        <Route component = { App } path='/'>
            <Route exact component = { Main } path='/feed' />
            <Route component = { NewItem } path = { '/feed/newitem'} />
            <Route component = { Comments} path = { '/feed/comments/:id' } />
            <Redirect component = { Main } to = { '/feed' } />
        </Route>
    </BrowserRouter>

), document.getElementById('root'));
