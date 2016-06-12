import React from 'react';
import { ListGroup } from 'react-bootstrap';

import Gist from './Gist';

const Gists = ({ onItemClick, items, selectedId }) => {
  return (
    <ListGroup>
      {items.map(({ files, url, id }) => {
        const fileNames = Object.keys(files);
        const handleClick = () => onItemClick(url, id);
        const selected = id === selectedId;

        return (
          <Gist
            key={id}
            title={fileNames[0]}
            onClick={handleClick}
            active={selected}
          />
        );
      })}
    </ListGroup>
  );
};

Gists.propTypes = {
  items: React.PropTypes.array,
  onItemClick: React.PropTypes.func,
  selectedId: React.PropTypes.string,
};

export default Gists;
