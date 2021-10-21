import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({
  urlInput,
  radioInput,
  bodyInput
}) => (
  <div>
    <form>
      <input 
        id="urlInput"
        type="text" 
        name="input"
      />
    </form>
  </div>
);

Controls.propTypes = {
  urlInput: PropTypes.string.isRequired,
  radioInput: PropTypes.string.isRequired,
  bodyInput: PropTypes.string.isRequired,
};

export default Controls;
