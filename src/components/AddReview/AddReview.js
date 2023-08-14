import React, { useEffect, useState } from 'react';

const AddReview = () => {
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  useEffect(() => {
    const newImageUrls = images.map((image) => URL.createObjectURL(image));
    setImageURLs(newImageUrls);
    return () => {
      newImageUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [images]);
  function handleChange(e) {
    const selectedImages = Array.from(e.target.files);
    setImages([...images, ...selectedImages]);
  }
  const cancelImage = (index, e) => {
    e.preventDefault();
    const newImages = images.filter((_, image) => image !== index);
    setImages(newImages);
  };
  return (
    <form>
      <div>
        <h2 className="headline">Ваш відгук</h2>
        <button>&#9587;</button>
      </div>
      <div>
        <h4>Оцінка:</h4>
        <div>Stars</div>
      </div>
      <div>
        <input type="text" placeholder="Імʼя" />
        <input type="email" placeholder="E-mail" />
        <textarea placeholder="Ваш коментар"></textarea>
        <div>
          <input type="file" multiple accept="image/*" onChange={handleChange} />
          {imageURLs.map((image, index) => (
            <div key={index}>
              <img src={image} alt="Upload file" />
              <button onClick={(e) => cancelImage(index, e)}>X</button>
            </div>
          ))}
        </div>
      </div>
      <button>Залишити</button>
    </form>
  );
};

export default AddReview;
