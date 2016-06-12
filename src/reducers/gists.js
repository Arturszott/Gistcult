const initialState = {
  items: [],
  selectedId: null,
};

export function gists(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_GISTS':
      return {
        ...state,
        items: action.items,
      };
    case 'UPDATE_GIST_DATA':
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.id) {
            return action.data;
          }

          return item;
        }),
        selectedId: action.id,
      };
    default:
      return state;
  }
}
