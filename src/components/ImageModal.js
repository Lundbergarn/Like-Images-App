import React from 'react';
import './ImageModal.css';

const ImageModal = (props) => {

  const closeModal = () => {
    props.closeModal();
  }

  return ( 
    <div className="ui modal">
      <div className="image content">
        <img className="image" src={props.image} alt=""></img>
        <span onClick={() => {closeModal()}} className="close">&times;</span>
      </div>
    </div>
  );
};

export default ImageModal;