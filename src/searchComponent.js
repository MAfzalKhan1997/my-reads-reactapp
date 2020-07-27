import React, { Component } from "react";
import BooksShelf from "./BooksShelf";
import { Link } from "react-router-dom";

class searchComponent extends Component {
  state = {
    searchTerm: "",
  };

  handleChange = (e) => {
    const txtInput = e.target.value;
    this.setState({
      searchTerm: txtInput,
    });
    this.props.findBooks(txtInput);
  };

  render() {
    const books = this.state.searchTerm ? this.props.searchResult : [];
    const shelfChangeHandler = this.props.shelfChangeHandler;
    return (
      <div>
        <div
          style={{
            position: "fixed",
            width: "100%",
            top: 0,
            left: 0,
            zIndex: 5,
            display: "flex",
            boxShadow: `0 10px 20px rgba(0, 0, 0, 0.19), 0 0 6px rgba(0, 0, 0, 0.23)`,
          }}
        >
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div
            className="search-books-input-wrapper"
            style={{ flex: 1, background: "#e9e" }}
          >
            <input
              style={{
                width: "100%",
                padding: "15px 10px",
                fontSize: "1.25em",
                border: "none",
                outline: "none",
              }}
              type="text"
              placeholder="Search"
              onChange={this.handleChange}
              value={this.state.txtInput}
            />
          </div>
        </div>

        <div className="search-books-results">
          <BooksShelf shelfChangeHandler={shelfChangeHandler} books={books} />
        </div>
      </div>
    );
  }
}

export default searchComponent;
