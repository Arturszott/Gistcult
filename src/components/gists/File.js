import React from 'react';

import {  ListGroupItem } from 'react-bootstrap';
import CodeMirror from 'react-codemirror';
import './codemirrorModes';
import 'codemirror/lib/codemirror.css';


const File = ({ filename, content }) => {
    return (
        <ListGroupItem>
            <h5>{filename}</h5>
            <hr/>
            <CodeMirror value={content}/>
        </ListGroupItem>
    );
};

export default File;

File.propTypes = {
    filename: React.PropTypes.string,
    content: React.PropTypes.string,
};
