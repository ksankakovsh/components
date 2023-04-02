import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import styles from './Header.module.css';

export class Header extends Component {
  render() {
    return (
      <div className={styles.links}>
        <Link className={styles.links_item} to="/">
          Home
        </Link>
        <Link className={styles.links_item} to="/about">
          About
        </Link>
        <Link className={styles.links_item} to="/form">
          Form
        </Link>
      </div>
    );
  }
}
