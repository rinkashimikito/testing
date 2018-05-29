import React from 'react';
import { mount } from 'enzyme';
import { Item } from '../index';

const defaultProps = {
  item: { id: 1, content: 'fake_content_1', completed: false },
  onToggle: (f) => f,
  onRemove: (f) => f,
};

describe('Item', () => {
  it('renders without crashing', () => {
    mount(<Item {...defaultProps} />);
  });
});
