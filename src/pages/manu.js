import React from "react";
import { Link } from "gatsby"
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    <Menu {...props}>
      <Link to="/" className="menu-item" >
        ホームページ
      </Link>

      <Link to="/page-2" className="menu-item" >
        ページ2
        </Link>

        <Link to="/page-3" className="menu-item" >
        ページ3
        </Link>

        <Link to="/page-4" className="menu-item" >
        ページ4
        </Link>
    </Menu>
  );
};