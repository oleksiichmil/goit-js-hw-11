import axios from 'axios';

const API_KEY = '48865554-9c41d4f1cdb1a3126cd29aed3';
const api_URL = 'https://pixabay.com/api/';

export const searchImage = searchValue => {
  return axios.get(
    `${api_URL}?key=${API_KEY}&q=${encodeURIComponent(
      searchValue
    )}&image_type=photo&orientation=horizontal&safesearch=true`
  );
};
