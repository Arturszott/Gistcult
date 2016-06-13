  import { connect } from 'react-redux';
  import { bindActionCreators } from 'redux';

  import fetchGistContent from '../../actions/fetchGistContent';
  import Auth from '../../components/pages/Auth';

export default connect(
    (state) => ({
      token: state.auth.token,
      gists: state.gists.items,
      selectedId: state.gists.selectedId,
    }),
    (dispatch) => bindActionCreators({ fetchGistContent }, dispatch)
  )(Auth);
