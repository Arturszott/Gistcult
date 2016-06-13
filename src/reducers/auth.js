const initialState = {
    token: null,
};

export function auth(state = initialState, action) {

    switch (action.type) {
        case 'UPDATE_TOKEN':
            return {
                ...state,
                token: action.token,
            };

        default:
            return state;
    }
}
