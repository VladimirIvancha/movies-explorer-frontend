class MoviesApi {
    constructor({ baseUrl, headers }) {
      this._baseUrl = baseUrl;
      this._headers = headers;
    }

    _checkResponse(res) {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/`, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(this._checkResponse)
    }
}

const moviesApi = new MoviesApi({
    baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
})

export {moviesApi};