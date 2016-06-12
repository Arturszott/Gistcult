import fetch from 'isomorphic-fetch';

import updateGists from './updateGists';

export default function fetchGists(token) {
  const url = `https://api.github.com/gists?access_token=${token}`;

  const options = {
      headers: {
          'Accept': 'application/json'
      }
  };

  return fetch(url, options)
    .then((response) => response.json())
}
