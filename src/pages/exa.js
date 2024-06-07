import React, { useState } from 'react';

const images = [
  '/image/sample1.jpeg',
  '/image/sample2.jpeg',
  '/image/sample3.jpeg',
];

export default function ImageSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    // ➡ボタンが押されたときの処理
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="image-slider">
      <img
        src={process.env.PUBLIC_URL + images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        className="slider-image"
      />
      <button onClick={nextImage} className="next-button">
        ➡
      </button>
    </div>
  );
}