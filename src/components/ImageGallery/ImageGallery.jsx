// import { useState } from 'react';
import { Gallery } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ images }) {
  // const [showModal, setShowModal] = useState(false);
  // const [modalImageURL, setModalImageUrl] = useState('');

  // const toggleModal = modalImageURL => {
  //   setModalImageUrl(modalImageURL);
  //   setShowModal(!showModal);
  // };

  return (
    <>
      <Gallery>
        {images.map(({ id, webformatURL, largeImageURL }) => {
          return (
            <ImageGalleryItem
              // toggleModal={toggleModal}
              key={id}
              webImage={webformatURL}
              largeImage={largeImageURL}
            ></ImageGalleryItem>
          );
        })}
      </Gallery>
    </>
  );
}
