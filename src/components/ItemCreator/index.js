import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addItem } from '../../logic/actions';
import './styles.css';

export const ItemCreator = ({ onAdd }) => {
  let inputField = React.createRef();

  return (
    <div className="itemCreator">
      <input
        ref={inputField}
        className="itemCreator-input"
        type="text"
        placeholder="What do you need to do?"
      />
      <input
        className="itemCreator-button"
        type="button"
        value="Add Task"
        onClick={() => {
          inputField.current.value && onAdd(inputField.current.value);
          inputField.current.value = '';
        }}
      />
    </div>
  );
};

ItemCreator.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onAdd: (newItem) => dispatch(addItem(newItem)),
});

export default connect(null, mapDispatchToProps)(ItemCreator);
