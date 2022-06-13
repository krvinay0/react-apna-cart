import React from "react";

class NavBar extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a classname="navbar-brand" href="#">Apna Cart</a>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
