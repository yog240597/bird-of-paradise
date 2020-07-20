/**
 *
 * Navbar
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
import messages from './messages';

// css
import '../../assets/css/home_page.css';

function Navbar() {
  return (
    <div>
      <div>
        <nav
          className="navbar navbar-expand-md bg-light navbar-light navbar-main"
          style={{ backgroundColor: 'tranparent' }}
        >
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
            style={{ float: 'right' }}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item nav-items">
                <a className="nav-link" href="#">
                  Shop
                </a>
              </li>
              <li className="nav-item nav-items">
                <a className="nav-link" href="#">
                  Catering
                </a>
              </li>
              <li className="nav-item nav-items">
                <a className="nav-link" href="#">
                  Location
                </a>
              </li>
              <li className="nav-item nav-items">
                <a className="nav-link" href="#">
                  Community
                </a>
              </li>
              <li className="nav-item nav-items">
                <a className="nav-link" href="#">
                  Our Story
                </a>
              </li>

              <div className="nav-items-group-second">
                <li className="nav-item nav-items">
                  <a className="nav-link" href="#">
                    Account
                  </a>
                </li>
              </div>

              <div className="nav-items-group-second">
                <li className="nav-item nav-items nav-items-group-second">
                  <a className="nav-link" href="#">
                    Cart
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

Navbar.propTypes = {};

export default memo(Navbar);
