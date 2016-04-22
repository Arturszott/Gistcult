import fetch from 'isomorphic-fetch';

import fetchGists from './fetchGists';

function updateAuthStatus(token) {
    return {
        type: 'UPDATE_TOKEN',
        token
    };
}

const createGithubLink = ({ clientID, clientSecret }, code) => {
    const baseUrl = 'https://github.com/login/oauth/access_token';

    return `${baseUrl}?client_id=${clientID}&client_secret=${clientSecret}&scope=gist&code=${code}`;
};

export default function fetchToken(code, next) {
    return (dispatch, getState) => {
        const state = getState();
        const url = createGithubLink(state.auth.config, code);

        const options = {
            method: 'POST',
            body: {},
            headers: {
                'Accept': 'application/json'
            }
        };

        return dispatch(()=> {
            return fetch(url, options)
                .then((response) => {
                    return response.json();
                })
                .catch((err)=> {
                    console.log(err)
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
