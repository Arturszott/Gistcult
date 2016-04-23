import React from 'react';
import R from 'ramda';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

import File from './File';

const renderItem = ( item, i) => {
    return (
        <File key={i} filename={item.filename} content={item.content} />
    );
};

const Files = ({ data = {} }) => {
    let files = [];

    if (data.files) {
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
