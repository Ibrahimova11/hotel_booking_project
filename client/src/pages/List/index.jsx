import React from "react";
import "./style.css";
const Index = () => {
  return (
    <div className="listContainer">
      <div className="listWrapper">
        <div className="listSearch">
          <h1 className="listTitle">Search</h1>
          <div className="listItem">
            <label>Destination</label>
            <input type="text" />
          </div>
        </div>
        <div className="listResult"></div>
      </div>
    </div>
  );
};

export default Index;
