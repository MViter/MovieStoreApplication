import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    marginLeft: 0
};

const DeleteButton = () => (
    <div>
        <RaisedButton label="Delete" secondary={true} style={style} />
    </div>
);

export default DeleteButton;