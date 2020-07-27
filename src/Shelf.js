import React from "react";
import BooksShelf from "./BooksShelf";

function Shelf(props) {
  const { shelfChangeHandler, books, shelf } = props;
  return (
    <div style={{ margin: 20 }}>
      <h2>{shelf}</h2>
      <BooksShelf shelfChangeHandler={shelfChangeHandler} books={books} />
    </div>
  );
}

export default Shelf;
