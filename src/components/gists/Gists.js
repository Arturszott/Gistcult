import React from 'react';
import R from 'ramda';
import { ListGroup } from 'react-bootstrap';

import Gist from './Gist';

const authenticateUrl = (url) => {
    return $
}

const Gists = ({ onItemClick, items, selectedId, token}) => {
    const isSelected = R.equals(selectedId);

    return (
        <ListGroup>
            {items.map(({files, url, id}) => {
                const fileNames = Object.keys(files);
                const authenticatedUrl = `${url}?access_token=${token}`;

                return (
                    <Gist
                        key={id}
                        title={fileNames[0]}
                        onClick={() => { onItemClick(authenticatedUrl, id)}}
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
