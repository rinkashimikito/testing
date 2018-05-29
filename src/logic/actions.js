import * as Action from './constants';

export const addItem = (content) => {
  return { type: Action.ADD_ITEM, content };
};
export const removeItem = (content) => {
  return { type: Action.REMOVE_ITEM, id: content };
};
export const toggleItem = (content) => {
  return { type: Action.TOGGLE_ITEM, id: content };
};
export const updateFilter = (content) => {
  return { type: Action.UPDATE_FILTER, filter: content };
};
