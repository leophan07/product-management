import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
  {
    name: 'Home',
    to: '/',
    exact: true
  },
  {
    name: 'Product',
    to: '/product-list',
    exact: false
  }
];

const MenuLink = ({label, to, activeOnlyWhenExact}) => {
  return (
    <Route 
      path={to}
      exact={activeOnlyWhenExact}
      children={({match}) => {
        var active = match ? 'active' : '';
        return (
          <li className={active}>
            <Link to={to}>{label}</Link>
          </li>
        )
      }}
    />
  )
}

class Menu extends Component {

  showMenu = (menus) => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink 
            key={index}
            label={menu.name}
            to={menu.to}
            activeOnlyWhenExact={menu.exact}
          />
        )
      });
    }
    return result;
  }

  render() {
    return (
      <nav className="navbar navbar-inverse">
        <a className="navbar-brand" href="123">Product Management</a>
        <ul className="nav navbar-nav">
          {this.showMenu(menus)}
        </ul>
      </nav>
    );
  }
}

export default Menu;
