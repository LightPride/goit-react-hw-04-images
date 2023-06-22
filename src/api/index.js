const BASE_URL = 'https://pixabay.com/api/';

const API_KEY = '35698435-4c63849f1d133deb699669e72';

export const getImages = async ({ searchQuery, currentPage }) => {
  const response = await fetch(
    `${BASE_URL}?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  if (!response.ok) {
    throw new Error('Oops... something went wrong...');
  }
  return response.json();
};
