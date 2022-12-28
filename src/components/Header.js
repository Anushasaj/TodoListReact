import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h2>TodoList</h2>
      <br></br><br></br>
      <div>
      <a href="/task/header" button className="button-add" type="submit">
        Add Task +
        </a>
</div>
    </div>
  );
};

export default Header;
