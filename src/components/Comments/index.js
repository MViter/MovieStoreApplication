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
        textAreaValue:     ''
    };

    render () {

        console.log('Comments - this = ', this);

        return <section className = { Styles.comments_container }>
                    <div className = { Styles.header }>
                        <NavLink to='/'>
                            <div className = { Styles.back_btn_container} >
                                <BackButton />
                            </div>
                        </NavLink>
                        <div className = { Styles.text_container} >
                            <p>COMMENTS TEXT</p>
                        </div>
                    </div>
                    <div className = { Styles.content_container } >
                        <div className = { Styles.thereWillBeCurrentComments } >
                            thereWillBeCurrentComments
                        </div>
                    </div>
                    <div className = { Styles.input_section} >
                        <textarea
                            placeholder = { 'New comments goes here...' }
                            value = { this.state.textAreaValue }
                        />
                        <NavLink to='/'>
                            <div className = { Styles.send_btn_container} onClick = { this.addItem} >
                                <SendButton />
                            </div>
                        </NavLink>
                    </div>
                </section>;
    }
}