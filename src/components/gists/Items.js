import React, { Component } from 'react';

import { ListGroup, ListGroupItem } from 'react-bootstrap';

const renderItem = (item, i) => {
    const fileNames = Object.keys(item.files);

    return <ListGroupItem key={i}>{fileNames[0]}</ListGroupItem>
};

const Items = ({ items }) => {
    return (
        <ListGroup>
            {items.map(renderItem)}
        </ListGroup>
    )
};

export default Items;