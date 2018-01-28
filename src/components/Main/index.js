// Core
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

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

    _forceUpdateHandler () {
        this.forceUpdate();
    }

    render () {

        const itemsFromStorage = JSON.parse(localStorage.getItem('Itemslist')) || [];
        const itemsArray = itemsFromStorage.map((index, i=0) => (
            <Item
                amountOfComments = { itemsFromStorage[i].comments.length }
                forceUpdateMain = { this.forceUpdateHandler }
                text = { itemsFromStorage[i].text }
                key = { i }
                index = { i++ }
            />));

        return (<section className = { Styles.main_container } >
            <Header />
            <div className = { Styles.container } >
                <div className = { Styles.items_container }>
                    { itemsArray }
                </div>
                <div className = { Styles.addbtn_container } >
                    <NavLink to = '/newitem' >
                        <AddButton />
                    </NavLink>
                </div>
            </div>
        </section>);
    }
}
