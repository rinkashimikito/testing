import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeItem, toggleItem } from '../../logic/actions';
import { Item } from '../Item';
import './styles.css';

// this could probably go to parent component
const getVisibleItems = (items, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return items;
    case 'SHOW_COMPLETED':
      return items.filter((item) => item.completed);
    default:
      return items;
  }
};

export const ItemsList = ({ items, filter, onRemove, onToggle }) => {
  return (
    <div>
      <ul className="itemsList-ul">
        {items.length < 1 && <p id="items-missing">Add some tasks above.</p>}
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            onRemove={onRemove}
            onToggle={onToggle}
          />
        ))}
      </ul>
    </div>
  );
};

ItemsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  onRemove: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  items: getVisibleItems(state.todos.items, state.todos.filter),
  filter: state.todos.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onRemove: (onRemove) => dispatch(removeItem(onRemove)),
  onToggle: (onToggle) => dispatch(toggleItem(onToggle)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
