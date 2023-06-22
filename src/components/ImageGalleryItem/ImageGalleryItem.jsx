import React from 'react';
import { GalleryImage, GalleryItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webImage, largeImage, toggleModal }) => {
  return (
    <GalleryItem onClick={() => toggleModal(largeImage)}>
      <GalleryImage src={webImage} alt={webImage} />
    </GalleryItem>
  );
};
