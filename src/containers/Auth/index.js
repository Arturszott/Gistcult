  import React, { Component } from 'react';
  import R from 'ramda';
  import { connect } from 'react-redux';
  import { bindActionCreators } from 'redux';
  import { Link } from 'react-router';
  import { Grid, Row, Col } from 'react-bootstrap';

  import fetchGistContent from '../../actions/fetchGistContent';
  import Gists from '../../components/gists/Gists';
  import Files from '../../components/gists/Files';

  const findSelectedGist = (gists, id) => {
    return R.find(R.propEq('id', id))(gists);
  };

  const renderAuthorized = (props) => {
    const { gists, selectedId, fetchGistContent, token } = props;

    const onGistClick = (url, id) => {
      if (id === selectedId) {
        return false;
      }

      const authenticatedUrl = `${url}?access_token=${token}`;

      fetchGistContent(authenticatedUrl, id);
    };

    const selectedGist = findSelectedGist(gists, selectedId);

    return (
      <Row>
        <Col xs={12} md={4}>
          <Gists
            items={gists}
            token={token}
            selectedId={selectedId}
            onItemClick={onGistClick}
          />
        </Col>
        <Col xs={12} md={6}>
          <Files data={selectedGist}/>
        </Col>
      </Row>
    );
  };

  const renderUnauthorized = () => {
    return (
      <Grid>
        <h1>Unauthorized</h1>
        <Link to="/">Try to login again</Link>
      </Grid>
    );
  };

  @connect(
    (state) => ({
      token: state.auth.token,
      gists: state.gists.items,
      selectedId: state.gists.selectedId,
    }),
    (dispatch) => bindActionCreators({ fetchGistContent }, dispatch)
  )
  export default class Auth extends Component {
      static propTypes = {
        token: React.PropTypes.string,
        gists: React.PropTypes.array,
      };

      render() {
        const isAuthorized = Boolean(this.props.token);

        return isAuthorized ? renderAuthorized(this.props) : renderUnauthorized();
      }
  }
