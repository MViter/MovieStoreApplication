// Core
import React, {Component} from 'react';

// Instruments
import Styles from './styles.scss';
import DeleteButton from '../DeleteButton';


export default class Item extends Component {
    render () {
        const style = {
            margin: 12,
        };
        console.log('props = ', this.props);
        return <section className = { Styles.itemContainer }>
                    <div className = { Styles.text} >
                        <h3 className = { Styles.comment }>{this.props.itemText}</h3>
                        <span className = { Styles.commentAmount }>0</span>
                    </div>
                    <div className = { Styles.deletButtonContainer } >
                        <DeleteButton secondary={true} style={style} onClick = { this.addBtn} />
                    </div>
                </section>;
    }
}