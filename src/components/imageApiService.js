const baseUrl =
  'https://pixabay.com/api/?image_type=photo&orientation=horizontal&';

export default {
  page: 1,
  query: '',
  perPage: 3,
  key: '16732818-7da563d5e6a89fd9c9e651ff7',
  fetchImages() {
    const category = `&category=places,buildings,travel`;
    const searchParams = `q=${this.query}&page=${this.page}&per_page=${this.perPage}&key=${this.key}`;

    return fetch(baseUrl + searchParams + category).then(response =>
      response.json(),
    );
  },
  fetchImagesByCity(city) {
    const category = `&category=places,buildings,travel`;
    const searchParams = `q=${city}+city&page=${this.page}&per_page=${this.perPage}&key=${this.key}`;

    return fetch(baseUrl + searchParams + category).then(response =>
      response.json(),
    );
  },
};
