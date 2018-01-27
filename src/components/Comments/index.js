// Core
import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'

// Instruments
import Styles from './styles.scss';

// Components
import SendButton from '../SendButton';
import BackButton from '../BackButton';

export default class NewItem extends Component {

    state = {
        textAreaValue:  ''
    };

    constructor () {
        super();

        this.handleSubmit = this._handleSubmit.bind(this);
        this.addComment = this._addComment.bind(this);
        this.getCurrentItemComments = this._getCurrentItemComments.bind(this);
        this.getCurrentItemText = this._getCurrentItemText.bind(this);
        this.handleTextAreaChange = this._handleTextAreaChange.bind(this);
    }

    _handleSubmit () {
        this.addComment();
        const { textAreaValue } = this.state;
        if (!textAreaValue) {
            return;
        }
        this.setState(() => ({
            textAreaValue: ''
        }));
    }

    _addComment () {
        const currentText = this.state.textAreaValue || '';
        let itemListStorage = JSON.parse(localStorage.getItem('Postlist')) || [];
        const itemId = this.props.match.params.id;
        const currentItemComments = itemListStorage[itemId].comments;
        currentItemComments.push(currentText);
        itemListStorage[itemId].comments = currentItemComments;
        localStorage.setItem('Postlist', JSON.stringify(itemListStorage));
    }

    _handleTextAreaChange (event) {
        const textAreaValue = event.target.value;
        this.setState(() => ({
            textAreaValue
        }));
    }

    _getCurrentItemComments () {
        let itemListStorage = JSON.parse(localStorage.getItem('Postlist')) || [];
        const itemId = this.props.match.params.id;
        return itemListStorage[itemId].comments;
    }

    _getCurrentItemText () {
        let itemListStorage = JSON.parse(localStorage.getItem('Postlist')) || [];
        const itemId = this.props.match.params.id;
        return itemListStorage[itemId].text;
    }

    render () {

        const itemText = this.getCurrentItemText();
        const commentsArray = this.getCurrentItemComments().map((comment) => {
            return (<div className = { Styles.single_comment }>
                        <div className = { Styles.comment_avatar } />
                        <div className = { Styles.comment_text } >{comment}</div>
                    </div>
                )
        });

        return <section className = { Styles.comments_container }>
                    <div className = { Styles.header }>
                        <NavLink to='/'>
                            <div className = { Styles.back_btn_container} >
                                <BackButton />
                            </div>
                        </NavLink>
                        <div className = { Styles.text_container} >
                            <div>{ itemText }</div>
                        </div>
                    </div>
                    <div className = { Styles.content_container } >
                            { commentsArray }
                    </div>
                    <div className = { Styles.input_section} >
                        <textarea
                            placeholder = { 'New comments goes here...' }
                            value = { this.state.textAreaValue }
                            onChange = { this.handleTextAreaChange }
                        />
                        <div className = { Styles.send_btn_container} onClick = { this.handleSubmit } >
                            <SendButton />
                        </div>
                    </div>
                </section>;
    }
}