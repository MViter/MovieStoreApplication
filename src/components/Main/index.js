// Core
import React, {Component} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { NavLink } from 'react-router-dom'

// Instruments
import Styles from './styles.scss';

// Components
import Header from '../Header';
import Item from '../Item';
import AddButton from '../AddButton';


export default class App extends Component {

    constructor () {
        super();

        this.addNewItem = this._addNewItem.bind(this);
    }

    state = {
        posts: ['First item with customized long title',
            'Second Item',
            'Third Item (short one)',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam commodi consequatur esse illo\n' +
            '\t\t\t\tmaiores omnis quo quos sint, totam vero voluptate. Aliquid assumenda debitis deserunt iste officiis\n' +
            '\t\t\t\tpossimus temporibus?',
            'Knock knock knocking on the heaven`s door'
        ]
    };

    _addNewItem () {
         alert('Hello in _addNewItem');
    }

    render () {
        const style = {
            marginRight: 20,
            marginTop: 40
        };

        const postsArray = this.state.posts.map((index, i=0) => (<Item itemText = { index } index = { i++ } />));

        console.log('$$$this.props', this.props);

        return <section className = { Styles.mainContainer } >
            <Header />
            <div className = { Styles.container } >
                <div className = { Styles.itemsContainer }>
                        { postsArray }
                </div>
                <div className = { Styles.addButtonContainer } >
                    <NavLink to='/newitem'>
                        <AddButton secondary={true} style={style} />
                    </NavLink>
                </div>
            </div>
        </section>;
    }
}