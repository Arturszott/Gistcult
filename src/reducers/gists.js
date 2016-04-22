// hardcoded client ID, should be passed from external config, process.env

const initialState = {
    items: []
};

export function gists(state = initialState, action) {

    switch (action.type) {
        case 'UPDATE_GISTS':
            return {
                ...state,
                items: action.items
            };

        default:
            return state;
    }
}
