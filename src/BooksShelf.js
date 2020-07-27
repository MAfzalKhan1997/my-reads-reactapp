import React, { Component } from "react";

export default class BooksShelf extends Component {
  render() {
    const { books, shelfChangeHandler } = this.props;
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <ol
            style={{
              backgroundColor: "lightblue",
              boxShadow: "0px 0px 5px grey",
              borderRadius: 20,
              listStyleType: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {books.length === 0 ? (
              <h3>No Books to Display</h3>
            ) : (
              books.map((book) => {
                return (
                  <li key={book.id} style={{ padding: 40 }}>
                    <div style={{ width: 300 }}>
                      <div
                        style={{
                          position: "relative",
                          height: 250,
                          display: "flex",
                          alignItems: "flex-end",
                        }}
                      >
                        {book.imageLinks && (
                          <div
                            style={{
                              width: 300,
                              height: 220,
                              background: "skyblue",
                              boxShadow: `0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(12, 12, 12, 0.23)`,
                              backgroundImage: `url(${book.imageLinks.thumbnail})`,
                            }}
                          ></div>
                        )}
                        <div
                          style={{
                            position: "absolute",
                            right: 0,
                            top: -10,
                            width: 60,
                            height: 60,
                            borderRadius: 10,
                            background: "orange",
                            backgroundPosition: "center",
                            backgroundSize: 20,
                            boxShadow: `0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)`,
                          }}
                        >
                          Select
                          <select
                            style={{
                              width: "100%",
                              height: "100%",
                              opacity: 0,
                              cursor: "pointer",
                            }}
                            id={book.id}
                            value={book.shelf ? book.shelf : "none"}
                            onChange={(event) =>
                              shelfChangeHandler(book, event.target.value)
                            }
                          >
                            <option value="move" disabled>
                              Move
                            </option>
                            <option value="currentlyReading">Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Done</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>
                      <div style={{ fontSize: "1em", marginTop: 10 }}>
                        {book.title}
                      </div>
                      <div style={{ fontSize: "1em", color: "#999" }}>
                        {book.authors && `${book.authors.join(", ")}`}
                      </div>
                    </div>
                  </li>
                );
              })
            )}
          </ol>
        </div>
      </div>
    );
  }
}
