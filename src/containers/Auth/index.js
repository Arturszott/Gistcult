import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';

import * as actionCreators from '../../actions/auth';
import Gists from '../../components/gists/Items';

const renderGist = (gist) => {
    if (!gist) return null;

    const content = gist.files[Object.keys(gist.files)[0]];

    return JSON.stringify(content, null, 4);
};

const renderAuthorized = (gists) => {
    return (
        <Row>
            <Col xs={12} md={2}>Menu</Col>
            <Col xs={12} md={4}>
                <Gists items={gists} />
            </Col>
            <Col xs={12} md={6}>
            </Col>
        </Row>
    );
};

const renderUnauthorized = () => {
    return (
        <Grid>
            <h1>Unauthorized</h1>
            <Link to='/'>Try to login again</Link>
        </Grid>
    );
};

@connect(
    (state) => {
        return {
            token: state.auth.token,
            gists: state.gists.items
        }
    },
    dispatch => bindActionCreators(actionCreators, dispatch)
)
export default class Auth extends Component {
    static propTypes = {
        token: React.PropTypes.string
    };

    render() {
        const { token, gists } = this.props;
        const isAuthorized = Boolean(token);

        return isAuthorized ? renderAuthorized(gists) : renderUnauthorized();
    }
}
