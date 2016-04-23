import R from 'ramda';

const initialState = {
    items: [],
    gistData: {},
    selectedId: null
};

export function gists(state = initialState, action) {

    switch (action.type) {
        case 'UPDATE_GISTS':
            return {
                ...state,
                items: action.items
            };
        case 'UPDATE_GIST_DATA':
            return {
                ...state,
                selectedId: action.id,
                gistData: {
                    ...state.gistData,
                    [action.id]: action.data
                }

            }
        default:
            return state;
    }
}
