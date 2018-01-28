// Core
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// Instruments
import Styles from './styles.scss';
import DeleteButton from '../DeleteButton';

export default class Item extends Component {

    static propTypes = {
        amountOfComments: PropTypes.number.isRequired,
        forceUpdateMain:  PropTypes.func.isRequired,
        text:             PropTypes.string.isRequired
    };

    constructor () {
        super();

        this.deleteItem = this._deleteItem.bind(this);
        this.forceUpdateHandler = this._forceUpdateHandler.bind(this);
    }

    _deleteItem () {
        const indexItemToBeDeleted = this.props.id;
        const currentItemsStorage = JSON.parse(localStorage.getItem('itemsList')) || [];
        const updatedItemsStorage  = currentItemsStorage.filter((item) => item.id !== indexItemToBeDeleted);

        localStorage.setItem('itemsList', JSON.stringify(updatedItemsStorage));
        this.forceUpdateHandler();
    }

    _forceUpdateHandler () {
        this.props.forceUpdateMain();
    }

    render () {
        const { text } = this.props;

        return text === '' ?
            <section className = { Styles.item_container } />
            : <section className = { Styles.item_container }>
                <NavLink text = { text } title = 'Open item with comments' to = { `/comments/${this.props.id}` }>
                    <div className = { Styles.text } >
                        <h3>{ text }</h3>
                    </div>
                </NavLink>
                <div className = { Styles.item_info } >
                    <div className = { Styles.comments_amount }>{ this.props.amountOfComments }</div>
                    <div className = { Styles.deletbtn_container } onClick = { this.deleteItem }>
                        <DeleteButton />
                    </div>
                </div>
            </section>;
    }
}
