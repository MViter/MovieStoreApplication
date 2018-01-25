// Core
import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'

// Instruments
import Styles from './styles.scss';
import DeleteButton from '../DeleteButton';


export default class Item extends Component {
    render () {

        return <section className = { Styles.itemContainer }>
                    <NavLink to = { `/comments/${this.props.index}` } title = 'Open item with comments'>
                        <div className = { Styles.text} >
                            <h3>{this.props.itemText}</h3>
                        </div>
                    </NavLink>
                    <div className = { Styles.itemInfo } >
                        <div className = { Styles.commentsAmount }>0</div>
                        <div className = { Styles.deletButtonContainer } >
                            <DeleteButton secondary={true} />
                        </div>
                    </div>
                </section>;
    }
}