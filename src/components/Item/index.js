// Core
import React, {Component} from 'react';

// Instruments
import Styles from './styles.scss';


export default class Item extends Component {
    render () {
        console.log('props = ', this.props);
        return <section className = { Styles.item }>
            <div className = { Styles.text} >
                <h3 className = { Styles.comment }>{this.props.itemText}</h3>
            </div>
        </section>;
    }
}