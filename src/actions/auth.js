import fetch from 'isomorphic-fetch';

export function updateAuthStatus(isAuthorized) {
    return {
        type: 'AUTH_STATUS',
        isAuthorized
    };
}

export function fetchToken(code) {
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
                    if (data.accessToken) {
                        dispatch(updateAuthStatus(data.accessToken));
                    }

                })
        });
    };
}
