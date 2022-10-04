const BASE_URL = "https://api.m.explorer.nomoredomains.sbs"
// const BASE_URL = "http://localhost:3001"

const handleResponse = response => response.ok ? response.json() : Promise.reject('Ошибка на сервере: ' + response.status + ' - ' + response.statusText)

export const register = (email, password, name) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(email, password, name)
  })
  .then(handleResponse)
}

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(email, password)
  })
  .then(handleResponse)
  .then((data) => {
    if (data.token){
      localStorage.setItem('jwt', data.token);
      return data.token;
    } 
  })
};

export const getCheckToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${token}`
    }
  })
  .then(handleResponse)
};
