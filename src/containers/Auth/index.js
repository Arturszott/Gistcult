import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';

import actions from '../../actions/auth';
import Gists from '../../components/gists/Gists';
import Files from '../../components/gists/Files';

const renderGist = (gist) => {
    if (!gist) return null;

    const content = gist.files[Object.keys(gist.files)[0]];

    return JSON.stringify(content, null, 4);
};

const renderAuthorized = (props) => {
    const { gists, gistData, selectedId, fetchGistContent } = props;
    const selectedGistData = gistData[selectedId];

    return (
        <Row>
            <Col xs={12} md={2}>Menu</Col>
            <Col xs={12} md={4}>
                <Gists
                    items={gists}
                    selectedId={selectedId}
                    onItemClick={fetchGistContent}
                />
            </Col>
            <Col xs={12} md={6}>
                <Files data={selectedGistData}/>
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
            gists: state.gists.items,
            gistData: state.gists.gistData,
            selectedId: state.gists.selectedId
        }
    },
    (dispatch) => bindActionCreators(actions, dispatch)
)
export default class Auth extends Component {
    static propTypes = {
        token: React.PropTypes.string,
        gists: React.PropTypes.array
    };

    render() {
        const isAuthorized = Boolean(this.props.token);

        return isAuthorized ? renderAuthorized(this.props) : renderUnauthorized();
    }
}
