import { useEffect } from 'react';
import { ImgModal, Overlay } from './Modal.styled';

export default function Modal({ handleModalClose, largeImage }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleKeyDown = event => {
    if (event.key === 'Escape') {
      handleModalClose();
    }
  };
  const handleBackdropClose = event => {
    if (event.target === event.currentTarget) {
      handleModalClose();
    }
  };

  return (
    <Overlay className="overlay" id="overlay" onClick={handleBackdropClose}>
      <ImgModal className="modal">
        <img src={largeImage} alt="name" />
      </ImgModal>
    </Overlay>
  );
}

// this.props.handleModalClose