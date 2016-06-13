import React from 'react';
import CodeMirror from 'react-codemirror';
import {  ListGroupItem } from 'react-bootstrap';
import 'codemirror/lib/codemirror.css';

import './codemirrorModes';

const File = ({ filename, content }) => {
    return (
        <ListGroupItem>
            <h5>{filename}</h5>
            <hr/>
            <CodeMirror value={content}/>
        </ListGroupItem>
    );
};

File.propTypes = {
    filename: React.PropTypes.string,
    content: React.PropTypes.string,
};

export default File;
