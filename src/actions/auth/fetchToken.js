import fetch from 'isomorphic-fetch';

import fetchGists from './fetchGists';

function updateAuthStatus(token) {
    return {
        type: 'UPDATE_TOKEN',
        token
    };
}

export default function fetchToken(code, next) {
    const baseUrl = 'https://github.com/login/oauth/access_token';

    return (dispatch, getState) => {
        const state = getState();
        const { clientID, clientSecret } = state.auth.config;
        const url = `${baseUrl}?client_id=${clientID}&client_secret=${clientSecret}&scope=gist&code=${code}`;

        const options = {
            method: 'POST',
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
                    const token = data.access_token;

                    if (token) {
                        dispatch(updateAuthStatus(token));
                        dispatch(fetchGists(token))
                    }

                    next();
                })
        });
    };
}
