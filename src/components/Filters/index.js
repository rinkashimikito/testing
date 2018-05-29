import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateFilter } from '../../logic/actions';
import './styles.css';

export const Filters = ({ filter, onUpdateFilters }) => {
  return (
    <div className={'filterBar'}>
      <label htmlFor="filter_type">Show</label>
      <select
        id="filter_type"
        onChange={(e) => onUpdateFilters(e.target.value)}
        value={filter}
      >
        <option value={'SHOW_COMPLETED'}>COMPLETED</option>
        <option value={'SHOW_ALL'}>ALL</option>
      </select>
    </div>
  );
};

Filters.propTypes = {
  onUpdateFilters: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    filter: state.todos.filter,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onUpdateFilters: (filterOption) => dispatch(updateFilter(filterOption)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
