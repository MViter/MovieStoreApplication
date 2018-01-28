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

        const itemsFromStorage = JSON.parse(localStorage.getItem('itemsList')) || [];
        const itemsArray = itemsFromStorage.map((item, index) => (
            <Item
                amountOfComments = { itemsFromStorage[index].comments.length }
                forceUpdateMain = { this.forceUpdateHandler }
                id = { item.id }
                key = { index }
                text = { itemsFromStorage[index].text }
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
