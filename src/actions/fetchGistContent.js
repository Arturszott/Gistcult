import fetch from 'isomorphic-fetch';

import updateGistContent from './updateGistContent';

export default function fetchGistContent(url, id) {
    return (dispatch) => {
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
                    dispatch(updateGistContent(data, id));
                });
        });
    };

}
