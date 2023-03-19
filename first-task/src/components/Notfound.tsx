import React, { Component } from 'react';

export class Notfound extends Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center', fontSize: 42, padding: '50px 0' }}>
          This page not found
        </h1>
        <img
          src="https://www.templedesign.com.au/wp-content/uploads/2013/02/Error_404.jpg"
          alt="not found"
        />
      </div>
    );
  }
}
