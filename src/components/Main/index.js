// Core
import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'

// Instruments
import Styles from './styles.scss';

// Components
import Header from '../Header';
import Item from '../Item';
import AddButton from '../AddButton';

export default class App extends Component {

    constructor () {
        super();

        this.forceUpdateHandler = this._forceUpdateHandler.bind(this);
    }

    _forceUpdateHandler(){
        this.forceUpdate();
    };

    render () {

        const postsFromStorage = JSON.parse(localStorage.getItem('Postlist')) || [];
        const postsArray = postsFromStorage.map((index, i=0) => (
            <Item
                amountOfComments = { postsFromStorage[i].comments.length }
                forceUpdateMain = { this.forceUpdateHandler }
                text = { postsFromStorage[i].text }
                index = { i++ }
            />));

        return <section className = { Styles.mainContainer } >
            <Header />
            <div className = { Styles.container } >
                <div className = { Styles.itemsContainer }>
                        { postsArray }
                </div>
                <div className = { Styles.addButtonContainer } >
                    <NavLink to='/newitem' >
                        <AddButton />
                    </NavLink>
                </div>
            </div>
        </section>;
    }
}