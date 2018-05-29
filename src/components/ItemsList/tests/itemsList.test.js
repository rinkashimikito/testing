import React from 'react';
import { shallow, mount } from 'enzyme';
import { ItemsList } from '../index';
import { removeItem, toggleItem } from '../../../logic/actions';
import { Item } from '../../Item';

const defaultProps = {
  items: [
    { id: 1, content: 'Test 1', completed: false },
    { id: 2, content: 'Test 2', completed: false },
  ],
  filter: 'SHOW_ALL',
  onRemove: removeItem,
  onToggle: toggleItem,
};

describe('ItemsList', () => {
  it('renders without crashing', () => {
    shallow(<ItemsList {...defaultProps} />);
  });

  it('should display warning message if no items', () => {
    const renderedItem = shallow(<ItemsList {...defaultProps} items={[]} />);
    expect(renderedItem.find('#items-missing')).toHaveLength(1);
  });

  it('should not display warning message if items are present', () => {
    const items = [{ id: 1, content: 'Test 1', completed: false }];
    const renderedItem = shallow(<ItemsList {...defaultProps} items={items} />);
    expect(renderedItem.find('#items-missing')).toHaveLength(0);
  });

  it('should render items as list items', () => {
    const renderedItem = mount(<ItemsList {...defaultProps} />);

    expect(renderedItem.find('li')).toHaveLength(2);
  });
});
