import React from 'react';
import R from 'ramda';
import { ListGroup } from 'react-bootstrap';

import Gist from './Gist';

const Gists = ({ onItemClick, items, selectedId}) => {
    const isSelected = R.equals(selectedId);

    return (
        <ListGroup>
            {items.map(({files, url, id}) => {
                const fileNames = Object.keys(files);

                return (
                    <Gist
                        key={id}
                        title={fileNames[0]}
                        onClick={() => { onItemClick(url, id)}}
                        active={isSelected(id)}
                    >
                    </Gist>
                );
            })}
        </ListGroup>
    )
};

Gists.propTypes = {
    items: React.PropTypes.array,
    onItemClick: React.PropTypes.func,
    selectedId: React.PropTypes.string
};

export default Gists;
