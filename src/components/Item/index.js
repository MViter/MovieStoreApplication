// Core
import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'

// Instruments
import Styles from './styles.scss';
import DeleteButton from '../DeleteButton';


export default class Item extends Component {

    constructor () {
        super();

        this.deleteItem = this._deleteItem.bind(this);
        this.forceUpdateHandler = this._forceUpdateHandler.bind(this);
    }

    _deleteItem () {
        //localStorage.removeItem('posts');
        //this.forceUpdateHandler();

        const indexItemToBeDeleted = this.props.index;
        console.log('itemToBeDeleted: ', this.props.index);

        const currentItemsStorage = JSON.parse(localStorage.getItem('Postlist')) || [];
        //const updatedItemsStorage  = currentItemsStorage.filter((item) => item.index !== indexItemToBeDeleted);
        console.log('currentItemsStore = ', currentItemsStorage);
        const updatedItemsStorage  = currentItemsStorage.filter((index, item) => {
            console.log(`item = ${item}, indexItemToBeDeleted = ${indexItemToBeDeleted}`);
            return item !== indexItemToBeDeleted;
        });
        localStorage.setItem('Postlist', JSON.stringify(updatedItemsStorage));
        console.log('localStorage after deleting = ', localStorage.getItem('Postlist'));
        this.forceUpdateHandler();
    }

    _forceUpdateHandler(){
        console.log('in forceUpdateHandler this = ', this);
        this.forceUpdate();
        this.props.forceUpdateMain();
    };

    render () {
        const { text } = this.props;

        return text === '' ?
            <section className = { Styles.itemContainer } />
            : <section className = { Styles.itemContainer }>
                <NavLink to = { `/comments/${this.props.index}` } title = 'Open item with comments' text = { text } >
                    <div className = { Styles.text} >
                        <h3>{ text }</h3>
                    </div>
                </NavLink>
                <div className = { Styles.itemInfo } >
                    <div className = { Styles.commentsAmount }>{ this.props.amountOfComments }</div>
                    <div className = { Styles.deletButtonContainer } onClick = { this.deleteItem }>
                        <DeleteButton secondary={true} />
                    </div>
                </div>
            </section>;
    }
}