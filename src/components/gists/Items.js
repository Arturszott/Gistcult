import React from 'react';
import R from 'ramda';

import { ListGroup, ListGroupItem } from 'react-bootstrap';

const renderItem = ({ onItemClick }, isSelected, item, i) => {
    const fileNames = Object.keys(item.files);
    const onItemClickBound = onItemClick.bind(null, item.url, item.id);

    return (
        <ListGroupItem key={i} onClick={onItemClickBound} active={isSelected(item.id)}>
            {fileNames[0]}
        </ListGroupItem>
    );
};

const Items = (props) => {
    const isSelected = R.equals(props.selectedId);

    return (
        <ListGroup>
            {props.items.map(renderItem.bind(null, props, isSelected))}
        </ListGroup>
    )
};

export default Items;

Items.propTypes = {
    items: React.PropTypes.array,
    isSelected: React.PropTypes.string
};
