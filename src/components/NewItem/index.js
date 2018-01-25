// Core
import React, {Component} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

// Instruments
import Styles from './styles.scss';

// Components
import Header from '../Header';
import Item from '../Item';
import SendButton from '../SendButton';


export default class NewItem extends Component {

    render () {

        const style = {
            marginRight: 20,
            marginTop: 40
        };

        return <section>
            <Header />
            <div className = { Styles.container } >
                <h1>New Items view</h1>
                <div className = { Styles.newItemsCreationContainer }/>
                <SendButton secondary={true} style={style} />
            </div>
        </section>;
    }
}