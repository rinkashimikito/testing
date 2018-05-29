import reducer, { initialState } from '../todos';
import * as Actions from '../actions';

describe('reducer', () => {
  it('should return state for unknown action', () => {
    const mockState = { test: 'testItem' };
    const mockAction = { type: 'mystery-meat' };
    const result = reducer(mockState, mockAction);
    expect(result).toEqual(mockState);
  });

  it('should use initial state if state not provided', () => {
    const mockAction = { type: 'mystery-meat' };
    const result = reducer(undefined, mockAction);
    expect(result).toEqual(initialState);
  });

  it('should add new items on ADD_ITEM', () => {
    const state = {
      items: [{ id: 1, content: 'first' }, { id: 2, content: 'second' }],
    };
    const mockAction = Actions.addItem('third');
    const result = reducer(state, mockAction);
    expect(result.items).toHaveLength(3);
    expect(result.items[2].id).toEqual(3);
    expect(result.items[2].content).toEqual('third');
  });

  it('should remove item on REMOVE_ITEM', () => {
    const mockAction = Actions.removeItem(1);
    const result = reducer(undefined, mockAction);
    expect(result.items).toHaveLength(2);
    expect(result.items[0].id === 2);
  });

  it('should toggle completed item on TOGGLE_ITEM', () => {
    const mockAction = Actions.toggleItem(1);
    const result = reducer(undefined, mockAction);
    expect(result.items[0].id === 1);
    expect(result.items[0].completed === true);
  });

  it('should update filter on UPDATE_FILTER', () => {
    const mockAction = Actions.updateFilter('fake_filter');
    const result = reducer(undefined, mockAction);
    expect(result.filter === 'fake_filter');
  });
});
