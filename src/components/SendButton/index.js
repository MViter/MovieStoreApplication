import React from 'react';
import IconButton from 'material-ui/IconButton';
import Styles from './styles.scss';

const SendButton = () => (
    <div className = { Styles.send_btn }>
        <IconButton
            iconClassName = 'material-icons'
            iconStyle = { { color: 'white', fontSize: 32 } }
            tooltip = 'Post new text item'>
            send
        </IconButton>
    </div>
);

export default SendButton;
