import fetch from 'isomorphic-fetch';

function updateGists(list) {
    return {
        type: 'UPDATE_GISTS',
        list
    };
}

const createGithubUrl = (token) => {
    return `https://api.github.com/gists?access_token=${token}`;
};
export default function fetchGists(token, next) {
    return (dispatch) => {
        const url = createGithubUrl(token);

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
                    next();
                });
        });
    };

}
