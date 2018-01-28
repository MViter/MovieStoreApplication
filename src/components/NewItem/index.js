// Core
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// Instruments
import Styles from './styles.scss';

// Components
import SendButton from '../SendButton';
import BackButton from '../BackButton';


export default class NewItem extends Component {

    constructor () {
        super();

        this.addItem = this._addItem.bind(this);
        this.handleTextAreaChange = this._handleTextAreaChange.bind(this);
    }

    state = {
        textAreaValue: ''
    };

    _addItem () {
        const currentText = this.state.textAreaValue || '';
        const itemsStorage = JSON.parse(localStorage.getItem('itemsList')) || [];
        const itemsStorageSortedById = itemsStorage.sort(this.compareById);
        const idOfTheLastElement = itemsStorageSortedById.length-1;
        const nextItemId = idOfTheLastElement !== -1 ?
            itemsStorageSortedById[idOfTheLastElement].id + 1
            : 0;
        const newItem = { id: nextItemId, text: currentText, comments: []};
        itemsStorage.push(newItem);
        localStorage.setItem('itemsList', JSON.stringify(itemsStorage));
    }

    _handleTextAreaChange (event) {
        const textAreaValue = event.target.value;

        this.setState(() => ({
            textAreaValue
        }));
    }

    compareById (item1, item2) {
        if (item1.id < item2.id) {
            return -1;
        }
        if (item1.id > item2.id) {
            return 1;
        }

        return 0;
    }

    render () {
        const { textAreaValue } = this.state;

        return (<section className = { Styles.new_item_container }>
            <div className = { Styles.header }>
                <NavLink to = '/'>
                    <div className = { Styles.back_btn_container } >
                        <BackButton />
                    </div>
                </NavLink>
                <div className = { Styles.text_container } >
                    <p>Create new item</p>
                </div>
            </div>
            <div className = { Styles.content_container } >
                <textarea
                    placeholder = { 'New Items title...' }
                    value = { textAreaValue }
                    onChange = { this.handleTextAreaChange }
                />
                <NavLink to = '/'>
                    <div className = { Styles.send_btn_container } onClick = { this.addItem } >
                        <SendButton />
                    </div>
                </NavLink>
            </div>
        </section>);
    }
}
