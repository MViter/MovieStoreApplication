import React from 'react';
import IconButton from 'material-ui/IconButton';
import Styles from './styles.scss';

const BackButton = ()  => (
    <div className = {Styles.backBtn}>
        <IconButton
            iconClassName="material-icons"
            tooltip="Return back"
            iconStyle={{color: "white", fontSize: 36}}
        >
            arrow_back
        </IconButton>
    </div>
);

export default BackButton;