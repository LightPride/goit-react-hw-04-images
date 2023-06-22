import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Notiflix from 'notiflix';
import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './SearchBar.styled';

export default function SearchBar({ onSubmit }) {
  const [searchInput, setSearchInput] = useState('');

  const handleNameChange = event => {
    setSearchInput(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (searchInput.trim() === '') {
      Notiflix.Notify.warning('Search querry should not be empty!');
      return;
    }
    onSubmit(searchInput);
    setSearchInput('');
  };

  return (
    <Header onSubmit={handleSubmit}>
      <SearchForm>
        <SearchFormButton type="submit">
          <FaSearch />
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchInput}
          onChange={handleNameChange}
        />
      </SearchForm>
    </Header>
  );
}
