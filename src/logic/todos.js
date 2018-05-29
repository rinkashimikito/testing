import * as Action from './constants';

export const initialState = {
  items: [
    { id: 1, content: 'Call mum', completed: false },
    { id: 2, content: 'Buy cat food', completed: false },
    { id: 3, content: 'Water the plants', completed: false },
  ],
  filter: 'SHOW_ALL',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.ADD_ITEM:
      const nextId =
        state.items.reduce((id, item) => Math.max(item.id, id), 0) + 1;
      const newItem = {
        id: nextId,
        content: action.content,
        completed: false,
      };

      return {
        ...state,
        items: [...state.items, newItem],
      };
    case Action.REMOVE_ITEM:
      return {
        ...state,
        items: [...state.items.filter((item) => item.id !== action.id)],
      };
    case Action.TOGGLE_ITEM:
      return {
        ...state,
        items: [
          ...state.items.map(
            (item) =>
              item.id === action.id
                ? { ...item, completed: !item.completed }
                : item,
          ),
        ],
      };
    // this could go to a separate reducer at some point
    case Action.UPDATE_FILTER:
      return {
        ...state,
        filter: action.filter,
      };
    default:
      return state;
  }
};

export default reducer;
