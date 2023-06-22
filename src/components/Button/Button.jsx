import React from 'react';
import { LoadButton } from './Button.styled';

const Button = ({ onClick }) => {
  return (
    <LoadButton type="button" onClick={onClick} className="load-more__button">
      Load more
    </LoadButton>
  );
};

export default Button;
