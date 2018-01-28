// Core
import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { HashRouter } from 'react-router-dom';

// Containers
import App from './containers/App';
import Main from './components/Main';
import NewItem from './components/NewItem';
import Comments from './components/Comments';

ReactDOM.render((
    <HashRouter>
        <App>
            <Route exact component = { Main } path = '/' />
            <Route component = { NewItem } path = { '/newitem' } />
            <Route component = { Comments } path = { '/comments/:id' } />
        </App>
    </HashRouter>
), document.getElementById('root'));
