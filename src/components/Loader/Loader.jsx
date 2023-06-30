import { Component } from 'react';

import cl from './Loader.module.css';

export default class Loader extends Component {
  render() {
    return (
      <div className={cl.loading}>
        <div className={cl.loader}></div>
      </div>
    );
  }
}
