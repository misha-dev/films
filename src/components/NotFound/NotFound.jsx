import React, { Component } from 'react';

import cl from './NotFound.module.css';

export default class NotFound extends Component {
  render() {
    return <p className={cl.notFoundWrapper}>There is no such a film:(</p>;
  }
}
