import React from 'react';

import {  ListGroupItem } from 'react-bootstrap';

const Gist = ({ title, onClick, active }) => {
    return (
        <ListGroupItem onClick={onClick} active={active}>
            {title}
        </ListGroupItem>
    );
};

export default Gist;

Gist.propTypes = {
    onClick: React.PropTypes.func,
    title: React.PropTypes.string,
    active: React.PropTypes.bool,
    id: React.PropTypes.string,
};
