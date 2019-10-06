import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends React.Component {
  state = {
    active: "/"
  }


  clickHandler = (e) => {
    e.target.classList.add('active');
    this.setState({ active: e.target.pathname})
  }

  render() {
    return(
      <div className="ui secondary menu navbar">
        <Link
          onClick={(e) => this.clickHandler(e)}
          className={this.state.active === "/" ? "active item":"item"}
          to="/"
        >
          Images
        </Link> 

        <Link
          onClick={(e) => this.clickHandler(e)}
          className={this.state.active === "/favorites" ? "active item":"item"}
          to="/favorites"
        >
          Favorites
        </Link>

        <Link
          onClick={(e) => this.clickHandler(e)}
          className={this.state.active === "/friends" ? "active item":"item"}
          to="/friends"
        >
          Friends
        </Link>
      </div>
    );
  };
};

export default Navbar;