import fetch from 'isomorphic-fetch';

function updateGists(list) {
    return {
        type: 'UPDATE_GISTS',
        list
    };
}
export default function fetchGists(token) {
    return (dispatch, getState) => {
        const state = getState();
        const baseUrl = 'https://api.github.com/gists';
        const url = `${baseUrl}?access_token=${state.auth.token}`;

        const options = {
            headers: {
                'Accept': 'application/json'
            }
        };

        return dispatch(()=> {
            fetch(url, options)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    dispatch(updateGists(data));
                });
        });
    };

}
