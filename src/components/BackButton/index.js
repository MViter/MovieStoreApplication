import React from 'react';
import IconButton from 'material-ui/IconButton';
import Styles from './styles.scss';

const BackButton = () => (
    <div className = { Styles.back_btn }>
        <IconButton
            iconClassName = 'material-icons'
            iconStyle = { { color: 'white', fontSize: 36 } }
            tooltip = 'Return back'>
            arrow_back
        </IconButton>
    </div>
);

export default BackButton;
