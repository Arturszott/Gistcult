import fetch from 'isomorphic-fetch';

import updateGists from './updateGists';

export default function fetchGists(token, done) {
    return (dispatch) => {
        const url = `https://api.github.com/gists?access_token=${token}`;

        const options = {
            headers: {
                'Accept': 'application/json'
            }
        };

        return dispatch(()=> {
            return fetch(url, options)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    dispatch(updateGists(data));
                    done()
                });
        });
    };
}
