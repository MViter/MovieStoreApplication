import React from 'react';
import IconButton from 'material-ui/IconButton';
import Styles from './styles.scss';

const SendButton = ()  => (
    <div className = {Styles.sendBtn}>
        <IconButton
            iconClassName="material-icons"
            tooltip="Post new text item"
            iconStyle={{color: "white", fontSize: 32}}
        >
            send
        </IconButton>
    </div>
    );

export default SendButton;

