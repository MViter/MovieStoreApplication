// Core
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// Instruments
import Styles from './styles.scss';

// Components
import BackButton from '../BackButton';

export default class Header extends Component {

    render () {
        const title = this.props.title ? <h1>{ this.props.title} </h1> : null;
        const slogan = this.props.slogan ? <h3>{ this.props.slogan }</h3> : null;
        const itemText = this.props.itemText ? this.props.itemText : <p>Create new item</p>;

        const headerContent = this.props.isMainHeader ?
            <div className = { Styles.header_content_main }>
                { title }
                { slogan }
            </div>
            :
            <div className = { Styles.header_content_item }>
                <NavLink to = '/'>
                    <div className = { Styles.back_btn_container } >
                        <BackButton />
                    </div>
                </NavLink>
                <div className = { Styles.text_container } >
                    <div>{ itemText }</div>
                </div>
            </div>;

        return (<header className = { Styles.header }>
            { headerContent }
        </header>);
    }
}
