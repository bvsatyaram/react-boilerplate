import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
  return (
    <Modal
      isOpen={!!props.selectedOption}
      contentLabel={'Selected Option'}
      appElement={document.getElementById('app')}
      onRequestClose={props.unPickOption}
    >
      <h3>Selected Options</h3>
      <p>{props.selectedOption}</p>
      <button onClick={props.unPickOption}>Okay</button>
    </Modal>
  );
};

export default  OptionModal;
