import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Import functions
import { getImagesGallery, PAGE_SIZE } from './js/pixabay-api';
import {
  gallaryMarkUp,
  showLoader,
  hideLoader,
  clearGallery,
  showLoadMoreBtn,
  hideLoadMoreBtn,
  loadMoreBtn,
  scrollGallary,
} from './js/render-functions';

//#region tacke imput
const refs = {
  form: document.querySelector('.js-search-form'),
};
loadMoreBtn.addEventListener('click', onLoadMoreClick);

const { form } = refs;

form.addEventListener('submit', onSearchSubmit);

let query = null;
let currentPageGallary = 1;

//#region Function onSearchSubmit
async function onSearchSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const { searchText } = form.elements;
  query = searchText.value.trim();

  //#region check field
  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please complete the field',
      position: 'topCenter',
    });
    return;
  }
  //#endregion check field

  showLoader(); // Loader
  hideLoadMoreBtn(); // Load more button hide
  currentPageGallary = 1;
  clearGallery(); // Clear Gallery

  try {
    const { hits, totalHits } = await getImagesGallery(query);

    //#region Check results
    if (!hits || hits.length === 0) {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topCenter',
      });
      return;
    }
    //#endregion Check results

    gallaryMarkUp(hits);

    //#region Load button show
    const totalPages = Math.ceil(totalHits / PAGE_SIZE);

    if (hits.length < PAGE_SIZE || totalPages === currentPageGallary) {
      hideLoadMoreBtn();
    } else {
      showLoadMoreBtn();
    }
    //#endregion Load button show
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `Error fetching images: ${error}`,
      position: 'topCenter',
    });
  } finally {
    hideLoader();
  }

  searchText.value = '';
}
//#endregion Function onSearchSubmit

//#region Function onLoadMoreClick
async function onLoadMoreClick(event) {
  currentPageGallary += 1;

  showLoader(); // Loader

  try {
    const { hits, totalHits } = await getImagesGallery(
      query,
      currentPageGallary
    );

    gallaryMarkUp(hits);
    scrollGallary(); // Scroll Gallary

    //#region Load more button hide
    const totalPages = Math.ceil(totalHits / PAGE_SIZE);

    if (currentPageGallary >= totalPages) {
      hideLoadMoreBtn();

      iziToast.info({
        title: 'Hello',
        message: `We're sorry, but you've reached the end of search results.`,
        position: 'bottomCenter',
      });
    }
    //#endregion Load more button hide
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `Error fetching more images: ${error}`,
      position: 'topCenter',
    });
  } finally {
    hideLoader();
  }
}
//#endregion Function onLoadMoreClick
