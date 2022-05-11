import React, { Component } from 'react'

export default class Film extends Component {
  //props: Title, Year, Released, Runtime, Genre, Poster

  render() {
    return <div>{this.props.Title}</div>;
  }
}
