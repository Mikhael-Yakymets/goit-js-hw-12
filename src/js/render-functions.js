import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const photoList = document.querySelector('.js-gallary');
const loader = document.querySelector('.loader-container');

let lightbox = new SimpleLightbox('.js-gallary a', {
  captionsData: 'alt',
  captionDelay: 250,
});

//#region Clear Gallery
export function clearGallery() {
  photoList.innerHTML = '';
}
//#endregion Clear Gallery

export function gallaryMarkUp(pictures = []) {
  const markup = pictures
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="gallery-item">
            <a
              href="${largeImageURL}"
            >
              <img
                src="${webformatURL}"
                alt="${tags}"
              />
            </a>
            <div class="gallery-item-attributes">
              <div class="attribute">
                <p class="attribute-title">Likes</p>
                <p class="attribute-value">${likes}</p>
              </div>
              <div class="attribute">
                <p class="attribute-title">Views</p>
                <p class="attribute-value">${views}</p>
              </div>
              <div class="attribute">
                <p class="attribute-title">Comments</p>
                <p class="attribute-value">${comments}</p>
              </div>
              <div class="attribute">
                <p class="attribute-title">Downloads</p>
                <p class="attribute-value">${downloads}</p>
              </div>
            </div>
          </li>`;
      }
    )
    .join('');

  photoList.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
}

//#region Loader
export function showLoader() {
  loader.classList.remove('visually-hidden');
}

export function hideLoader() {
  loader.classList.add('visually-hidden');
}
//#endregion Loader
