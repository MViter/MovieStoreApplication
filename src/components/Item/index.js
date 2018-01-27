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
        forceUpdateMain: PropTypes.func.isRequired,
        //index: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired
    };

    constructor () {
        super();

        this.deleteItem = this._deleteItem.bind(this);
        this.forceUpdateHandler = this._forceUpdateHandler.bind(this);
    }

    _deleteItem () {
        const indexItemToBeDeleted = this.props.index;
        const currentItemsStorage = JSON.parse(localStorage.getItem('Postlist')) || [];
        const updatedItemsStorage  = currentItemsStorage.filter((index, item) => item !== indexItemToBeDeleted);

        localStorage.setItem('Postlist', JSON.stringify(updatedItemsStorage));
        this.forceUpdateHandler();
    }

    _forceUpdateHandler () {
        this.props.forceUpdateMain();
    };

    render () {
        const { text } = this.props;

        return text === '' ?
            <section className = { Styles.itemContainer } />
            : <section className = { Styles.itemContainer }>
                <NavLink text = { text } title = 'Open item with comments' to = { `/comments/${ this.props.index }` }>
                    <div className = { Styles.text} >
                        <h3>{ text }</h3>
                    </div>
                </NavLink>
                <div className = { Styles.itemInfo } >
                    <div className = { Styles.commentsAmount }>{ this.props.amountOfComments }</div>
                    <div className = { Styles.deletButtonContainer } onClick = { this.deleteItem }>
                        <DeleteButton secondary = { true } />
                    </div>
                </div>
            </section>;
    }
}
