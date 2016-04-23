import fetch from 'isomorphic-fetch';

const createGithubLink = ({ clientID, clientSecret }, code) => {
    const baseUrl = 'https://github.com/login/oauth/access_token';

    return `${baseUrl}?client_id=${clientID}&client_secret=${clientSecret}&scope=gist&code=${code}`;
};

const dispatchToken = (dispatch, callbacks, token) => {
    callbacks.forEach((callback) => {
        dispatch(callback(token));
    });
};

export default function fetchToken(code, storage, callbacks, next) {
    return (dispatch, getState) => {
        const storedToken = storage.getItem('access_token');

        if (storedToken) {
            dispatchToken(dispatch, callbacks, storedToken);

            return next();
        }

        const state = getState();
        const url = createGithubLink(state.auth.config, code);
        const options = {
            method: 'POST',
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
                    console.log(err);
                })
                .then((data) => {
                    const token = data.access_token;

                    if (token) {
                        dispatchToken(dispatch, callbacks, token);
                        storage.setItem('access_token', token);
                    }

                    next();
                })
        });
    };
}
