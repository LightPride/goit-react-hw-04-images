import { useState } from 'react';
import { GalleryImage, GalleryItem } from './ImageGalleryItem.styled';
import Modal from 'components/Modal/Modal';

export const ImageGalleryItem = ({ webImage, largeImage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <GalleryItem
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        <GalleryImage src={webImage} alt={webImage} />
      </GalleryItem>
      {isModalOpen && (
        <Modal
          largeImage={largeImage}
          handleModalClose={() => {
            setIsModalOpen(false);
          }}
        />
      )}
    </>
  );
};
