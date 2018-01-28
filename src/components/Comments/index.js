// Core
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// Instruments
import Styles from './styles.scss';

// Components
import SendButton from '../SendButton';
import BackButton from '../BackButton';
import Header from '../Header';

export default class Comments extends Component {

    constructor () {
        super();

        this.handleSubmit = this._handleSubmit.bind(this);
        this.addComment = this._addComment.bind(this);
        this.getCurrentItem = this._getCurrentItem.bind(this);
        this.handleTextAreaChange = this._handleTextAreaChange.bind(this);
    }

    state = {
        textAreaValue: ''
    };

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

        if (currentText !== '') {
            const itemsStorage = JSON.parse(localStorage.getItem('itemsList')) || [];
            const itemId = parseInt(this.props.match.params.id);
            const currentItem = itemsStorage.find(item => item.id === itemId);
            
            currentItem.comments.push(currentText);
            localStorage.setItem('itemsList', JSON.stringify(itemsStorage));
        }
    }

    _handleTextAreaChange (event) {
        const textAreaValue = event.target.value;

        this.setState(() => ({
            textAreaValue
        }));
    }

    _getCurrentItem () {
        const itemsStorage = JSON.parse(localStorage.getItem('itemsList')) || [];
        const itemId = parseInt(this.props.match.params.id);
        return itemsStorage.find((item) => item.id === itemId);
    }

    render () {
        const itemText = this.getCurrentItem().text;
        const commentsArray = this.getCurrentItem().comments.map((comment) => (<div className = { Styles.single_comment } key = { this.props.match.params.id } >
            <div className = { Styles.comment_avatar } />
            <div className = { Styles.comment_text } >{comment}</div>
        </div>)
        );

        return (<section className = { Styles.comments_container }>
                <Header isMainHeader = { false } itemText = { itemText } />
            <div className = { Styles.content_container } >
                { commentsArray }
            </div>
            <div className = { Styles.input_section } >
                <textarea
                    placeholder = { 'New comments goes here...' }
                    value = { this.state.textAreaValue }
                    onChange = { this.handleTextAreaChange }
                />
                <div className = { Styles.send_btn_container } onClick = { this.handleSubmit } >
                    <SendButton />
                </div>
            </div>
        </section>);
    }
}
