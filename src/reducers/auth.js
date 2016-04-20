const initialState = {
    isAuthorized: false
};

export function auth(state = initialState, action) {
    switch (action.type) {
        case 'AUTH_STATUS':
            return {
                ...state,
                isAuthorized: action.isAuthorized
            };

        default:
            return state;
    }
}
