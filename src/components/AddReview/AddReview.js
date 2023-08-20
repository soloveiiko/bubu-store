import React, { useEffect, useState } from 'react';
import CloseButton from '../commons/CloseButton/CloseButton';
import StarRating from './StarRating/StarRating';
import { ImagesField } from '../commons';
import Inputs, { emailField, nameField } from '../commons/Inputs/Inputs';

const AddReview = ({ isOpenForm, handleOpenForm }) => {
  const [credentials, setCredentials] = useState({
    [nameField.name]: '',
    [emailField.name]: '',
  });
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  const inputs = [nameField, emailField];

  useEffect(() => {
    const newImageUrls = images.map((image) => URL.createObjectURL(image));
    setImageURLs(newImageUrls);
    return () => {
      newImageUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [images]);

  const onChangeInput = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  function onChangeImage(e) {
    const selectedImages = Array.from(e.target.files);
    setImages([...images, ...selectedImages]);
  }
  const onCancelImage = (index, e) => {
    e.preventDefault();
    const newImages = images.filter((_, image) => image !== index);
    setImages(newImages);
  };
  return (
    <div className={`form-container ${isOpenForm ? 'open' : ''}`}>
      <form className="add-review">
        <div className="add-review__title">
          <h2 className="add-review__headline headline">Ваш відгук</h2>
          <CloseButton onClick={handleOpenForm} isAccent={true} />
        </div>
        <div className="add-review__mark mark">
          <h4 className="mark__title">Оцінка:</h4>
          <StarRating />
        </div>
        <div className="add-review__body">
          {inputs.map((input, index) => (
            <Inputs
              className="add-review__input"
              key={index}
              {...input}
              value={credentials[input.name]}
              onChange={onChangeInput}
            />
          ))}
          <textarea className="add-review__textarea" placeholder="Ваш коментар"></textarea>
          <ImagesField handleChange={onChangeImage} imageURLs={imageURLs} cancelImage={onCancelImage} />
        </div>
        <button className="add-review__btn accent-btn">Залишити</button>
      </form>
    </div>
  );
};

export default AddReview;
