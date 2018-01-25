import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';

const SendButton = ()  => (
    <div>
        <IconButton tooltip="Font Icon">
            <FontIcon className="muidocs-icon-action-send" />
        </IconButton>
    </div>
    );

export default SendButton;

