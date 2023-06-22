import { useState, useEffect } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import { getImages } from 'api';
import Notiflix from 'notiflix';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
export default function App() {
  const [searchValue, setSearchValue] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    if (searchValue === '') {
      return;
    }
    const fetchImages = async () => {
      try {
        const data = await getImages({
          searchQuery: searchValue,
          currentPage: page,
        });
        const showBtn = page < Math.ceil(data.totalHits / 12);
        if (data.hits.length === 0) {
          setShowBtn(showBtn);
          Notiflix.Notify.failure("We're sorry, there are no matches found :(");
          throw new Error("We're sorry, there are no matches found :(");
        } else if (data.hits.length < 12) {
          setShowBtn(showBtn);
          Notiflix.Notify.warning(
            "We're sorry, but you've reached the end of search results."
          );
        }
        setShowBtn(showBtn);
        setImages(prevImages => [...prevImages, ...data.hits]);

        setStatus('resolved');
      } catch (error) {
        setError(error);
        setStatus('rejected');
      }
    };
    fetchImages();
  }, [searchValue, page]);
  //

  const handleFormSubmit = searchInput => {
    if (searchValue === searchInput) {
      return;
    }
    setShowBtn(false);
    setStatus('pending');
    setSearchValue(searchInput);
    setImages([]);
    setPage(1);
  };

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <SearchBar onSubmit={handleFormSubmit}></SearchBar>;
      {status === 'idle' && (
        <h2
          style={{
            textAlign: 'center',
            marginTop: '50px',
          }}
        >
          Lets find some pictures!
        </h2>
      )}
      {status === 'resolved' && <ImageGallery images={images}></ImageGallery>}
      {showBtn && <Button onClick={onLoadMore}></Button>}
      {status === 'rejected' && (
        <h1
          style={{
            textAlign: 'center',
            marginTop: '50px',
          }}
        >
          {error.message}
        </h1>
      )}
      {status === 'pending' && <Loader></Loader>}
    </>
  );
}
