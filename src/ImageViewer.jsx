import React, { useState } from 'react';

const ImageViewer = ({ image, onClose }) => {
    return (
        <div className="image-viewer" onClick={onClose}>
        <img src={image} alt="Large Image" className="large-image" />
        </div>
    );
};

export default ImageViewer;