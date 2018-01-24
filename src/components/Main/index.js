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


export default class App extends Component {

    // constructor () {
    //     super();
    //
    //     this.addNewItem = ::this._addNewItem;
    // }

    state = {
        posts: ['First item with customized long title',
            'Second Item',
            'Third Item (short one)'
        ]
    };

    // _addNewItem () {
    //     console.log('Hello');
    // }

    render () {
        const style = {
            marginRight: 20,
            marginTop: 40
        };

        const postsArray = this.state.posts.map((index) => (<Item itemText = { index } />));

        return <section className = { Styles.mainContainer } >
            <Header />
            <div className = { Styles.container } >
                <div className = { Styles.itemsContainer }>
                        { postsArray }
                </div>
                <div className = { Styles.addButtonContainer } >

                </div>
                <AddButton secondary={true} style={style} onClick = { this.addBtn} />
            </div>
        </section>;
    }
}