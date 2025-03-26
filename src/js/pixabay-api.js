import axios from 'axios';

const API_KEY = '49361857-acd351382a63090e65700df5d';
const BASE_URL = 'https://pixabay.com/api/';
export const PAGE_SIZE = 15;

axios.defaults.baseURL = BASE_URL;

export async function getImagesGallery(searchText, currentPage = 1) {
  const params = {
    q: searchText,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: currentPage,
    per_page: PAGE_SIZE,
  };

  const {
    data: { total, totalHits, hits },
  } = await axios(`?key=${API_KEY}`, {
    params: {
      ...params,
    },
  });

  return { hits, totalHits };
}
