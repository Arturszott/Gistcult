  import React, { Component } from 'react';
  import R from 'ramda';
  import { Link } from 'react-router';
  import { Grid, Row, Col } from 'react-bootstrap';

  import fetchGistContent from '../../actions/fetchGistContent';
  import Gists from '../../components/gists/Gists';
  import Files from '../../components/gists/Files';

  const findSelectedGist = (gists, id) => {
    return R.find(R.propEq('id', id))(gists);
  };

  const renderUnauthorized = () => {
    return (
      <Grid>
        <h1>Unauthorized</h1>
        <Link to="/">Try to login again</Link>
      </Grid>
    );
  };

  export default class Auth extends Component {
      static propTypes = {
        token: React.PropTypes.string,
        gists: React.PropTypes.array,
      };

      render() {
        const isAuthorized = Boolean(this.props.token);
        const { gists, selectedId, fetchGistContent, token } = this.props;

        const onGistClick = (url, id) => {
          if (id === selectedId) {
            return false;
          }

          const authenticatedUrl = `${url}?access_token=${token}`;

          fetchGistContent(authenticatedUrl, id);
        };

        return isAuthorized ? (
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
              <Files data={findSelectedGist(gists, selectedId)}/>
            </Col>
          </Row>
        ) : renderUnauthorized();
      }
  }
