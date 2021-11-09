const API =
  "https://stoplight.io/mocks/kode-education/trainee-test/25143926/users";

class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }

  getUsers() {
    return fetch(`${this._url}`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`${res.status}`);
    });
  }
}

const api = new Api({
  url: API,
  headers: {
    "Content-Type": "application/json",
    Prefer: "code=200, example=success",
  },
});

export default api;
