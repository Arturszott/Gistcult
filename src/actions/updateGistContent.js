export default function updateGistData(data, id) {
    return {
        type: 'UPDATE_GIST_DATA',
        data,
        id
    };
}
