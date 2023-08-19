import React from 'react';
import { CloseButton } from '../index';

const ImagesField = ({ imageURLs, handleChange, cancelImage }) => {
  return (
    <div className="images-field">
      {imageURLs.length > 0 && (
        <div className="images-field__list">
          {imageURLs.map((image, index) => (
            <div className="images-field__item">
              <div className="images-field__img-container" key={index}>
                <img src={image} alt="Upload file" />
              </div>
              <CloseButton onClick={(e) => cancelImage(index, e)} />
            </div>
          ))}
        </div>
      )}
      <input className="images-field__input" type="file" multiple accept="image/*" onChange={handleChange} />
    </div>
  );
};

export default ImagesField;
