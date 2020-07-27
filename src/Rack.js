import React from "react";
import { Link } from "react-router-dom";
import Shelf from "./Shelf";
import Loader from "./components/Loader";

function Rack(props) {
  const { currentlyReading, wantToRead, read, shelfChangeHandler } = props;

  return (
    <div>
      <div style={{ padding: "0 0 80px", flex: 1 }}>
        {!currentlyReading ? (
          <div>
            <Loader msg="Loading..." />
          </div>
        ) : (
          <div>
            <Shelf
              shelf="Reading"
              books={currentlyReading}
              shelfChangeHandler={shelfChangeHandler}
            />
            <Shelf
              shelf="Done"
              books={read}
              shelfChangeHandler={shelfChangeHandler}
            />
            <Shelf
              shelf="Want to Read"
              books={wantToRead}
              shelfChangeHandler={shelfChangeHandler}
            />
          </div>
        )}
      </div>
      <div className="open-search">
        <Link to="/search">
          <button>Add Book</button>
        </Link>
      </div>
    </div>
  );
}

export default Rack;
