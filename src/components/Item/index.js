import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export const Item = ({ item, onToggle, onRemove }) => {
  return (
    <li key={item.id} className={item.completed ? 'completed' : ''}>
      <span
        className="icon complete-icon"
        onClick={() => {
          onToggle(item.id);
        }}
      />
      <span className="item-content">{item.content}</span>
      <span
        className="icon delete-icon"
        onClick={() => {
          onRemove(item.id);
        }}
      />
    </li>
  );
};

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default Item;
