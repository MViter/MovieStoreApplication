// Core
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// Instruments
import Styles from './styles.scss';

// Components
import SendButton from '../SendButton';
import BackButton from '../BackButton';

export default class NewItem extends Component {

    constructor () {
        super();

        this.handleSubmit = this._handleSubmit.bind(this);
        this.addComment = this._addComment.bind(this);
        this.getCurrentItemComments = this._getCurrentItemComments.bind(this);
        this.getCurrentItemText = this._getCurrentItemText.bind(this);
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
        const itemsStorage = JSON.parse(localStorage.getItem('Itemslist')) || [];
        const itemId = this.props.match.params.id; // eslint-disable-line
        const currentItemComments = itemsStorage[itemId].comments;

        currentItemComments.push(currentText);
        itemsStorage[itemId].comments = currentItemComments;
        localStorage.setItem('Itemslist', JSON.stringify(itemsStorage));
    }

    _handleTextAreaChange (event) {
        const textAreaValue = event.target.value;

        this.setState(() => ({
            textAreaValue
        }));
    }

    _getCurrentItemComments () {
        const itemsStorage = JSON.parse(localStorage.getItem('Itemslist')) || [];
        const itemId = this.props.match.params.id; // eslint-disable-line

        return itemsStorage[itemId].comments;
    }

    _getCurrentItemText () {
        const itemsStorage = JSON.parse(localStorage.getItem('Itemslist')) || [];
        const itemId = this.props.match.params.id; // eslint-disable-line

        return itemsStorage[itemId].text;
    }

    render () {

        const itemText = this.getCurrentItemText();
        const commentsArray = this.getCurrentItemComments().map((comment) => (<div className = { Styles.single_comment } key = { this.props.match.params.id } >
            <div className = { Styles.comment_avatar } />
            <div className = { Styles.comment_text } >{comment}</div>
        </div>)
        );

        return (<section className = { Styles.comments_container }>
            <div className = { Styles.header }>
                <div className = { Styles.header_content }>
                    <NavLink to = '/'>
                        <div className = { Styles.back_btn_container } >
                            <BackButton />
                        </div>
                    </NavLink>
                    <div className = { Styles.text_container } >
                        <div>{ itemText }</div>
                    </div>
                </div>
            </div>
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
