import React from 'react';
import { shallow } from 'enzyme';
import { Filters } from '../index';

const defaultProps = {
  filter: 'SHOW_ALL',
  onUpdateFilters: (f) => f,
};

describe('Filters', () => {
  it('renders without crashing', () => {
    shallow(<Filters {...defaultProps} />);
  });
});
