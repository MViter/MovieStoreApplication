// Core
import React, {Component} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

// Instruments
import Styles from './styles.scss';

// Components
import Header from '../Header';
import Item from '../Item';
import AddButton from '../AddButton';


export default class NewItem extends Component {

    render () {

        return <section>
            <Header />
            <div className = { Styles.container } >
                <div className = { Styles.newItemsCreationContainer }/>
                <AddButton secondary={true} style={style} />
            </div>
        </section>;
    }
}