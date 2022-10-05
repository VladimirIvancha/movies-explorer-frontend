class MainApi {
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
    
    getUserInfo() {
      return fetch(`${this._baseUrl}/users/me`, {
        method: 'GET',
        headers: {
          "Authorization": getToken(),
          'Content-Type': 'application/json'
        }
      })
        .then(this._checkResponse)
    }
    
    patchUserInfo(user) {
      return fetch(`${this._baseUrl}/users/me`, {
        method: "PATCH",
        headers: {
          "Authorization": getToken(),
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      }).then(this._checkResponse);
    }
  
    signOut() {
      return fetch(`${this._baseUrl}/signout`, {
        credentials: 'include',
        method: 'POST'
      }).then(this._checkResponse);
    };

    getMovies() {
      return fetch(`${this._baseUrl}/movies`, {
        headers: {
          "Authorization": getToken(),
          'Content-Type': 'application/json'
        }
      })
        .then(this._checkResponse)
    }
  
    saveMovie(movie) {
      return fetch(`${this._baseUrl}/movies`, {
        method: "POST",
        headers: {
          "Authorization": getToken(),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(movie),
      }).then(this._checkResponse);
    }
    
    deleteMovie(movieId) {
      return fetch(`${this._baseUrl}/movies/${movieId}`, {
        method: "DELETE",
        headers: {
          "Authorization": getToken(),
          'Content-Type': 'application/json'
        },
      }).then(this._checkResponse);
    }
}
  
const getToken = () => {
    return `Bearer ${localStorage.getItem('jwt')}`;
}
    
const mainApi = new MainApi({
    baseUrl: "https://api.m.explorer.nomoredomains.sbs",
    // baseUrl: "http://localhost:3001",
})
    
export {mainApi};
    