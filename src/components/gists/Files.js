import React from 'react';
import R from 'ramda';

import { ListGroup, ListGroupItem } from 'react-bootstrap';

const renderItem = ( item, i) => {
    return (
        <ListGroupItem key={i}>
            <h5>{item.filename}</h5>
            <hr/>
            {item.content}
        </ListGroupItem>
    );
};

const Files = ({ data = {} }) => {
    let files = [];

    if (data.files) {
        console.log('d')
        files =  Object.keys(data.files).map((fileName) => {
            return data.files[fileName]
        });
    }

    return (
        <ListGroup>
            {files.map(renderItem)}
        </ListGroup>
    )
};

export default Files;

Files.propTypes = {
    data: React.PropTypes.object
};
