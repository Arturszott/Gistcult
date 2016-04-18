import React, { Component } from 'react';

import './styles/app.scss';

export class App extends Component {
  render() {
    return (
      <section>
        {this.props.children}
      </section>
    );
  }
}

App.propTypes = {
    children: React.PropTypes.any,
};