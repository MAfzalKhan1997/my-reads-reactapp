import { api } from "./contants/api";

let token = localStorage.token;
if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  Accept: "application/json",
  Authorization: token,
};
export const getAllBooks = () =>
  fetch(`${api}/books`, { headers })
    .then((res) => res.json())
    .then((data) => data.books);

export const getBook = (bookId) =>
  fetch(`${api}/books/${bookId}`, { headers })
    .then((res) => res.json())
    .then((data) => data.book);

export const searchBooks = (query) =>
  fetch(`${api}/search`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  })
    .then((res) => res.json())
    .then((data) => data.books);

export const update = (book, shelf) =>
  fetch(`${api}/books/${book.id}`, {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ shelf }),
  }).then((res) => res.json());
