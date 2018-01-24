// Core
import React, {Component} from 'react';

// Instruments
import Styles from './styles.scss';
import DeleteButton from '../DeleteButton';


export default class Item extends Component {
    render () {

        return <section className = { Styles.itemContainer }>
                    <div className = { Styles.text} >
                        <h3>{this.props.itemText}</h3>
                    </div>
                    <div className = { Styles.itemInfo } >
                        <div className = { Styles.commentsAmount }>0</div>
                        <div className = { Styles.deletButtonContainer } >
                            <DeleteButton secondary={true} />
                        </div>
                    </div>
                </section>;
    }
}