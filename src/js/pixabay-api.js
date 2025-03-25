import axios from 'axios';

const API_KEY = '49361857-acd351382a63090e65700df5d';
const BASE_URL = 'https://pixabay.com/api/';

axios.defaults.baseURL = BASE_URL;

export async function getImagesGallery(searchText) {
  const params = {
    q: searchText,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
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
