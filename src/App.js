import { Route, Routes } from 'react-router-dom';
import './App.css';

import { Component } from 'react';

import Layout from './features/Layout/Layout';
import { FilmContentPage } from './pages/FilmContentPage/FilmContentPage';
import Homepage from './pages/Homepage/Homepage';

export default class App extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/films" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="/films/:id" element={<FilmContentPage />} />
          </Route>
        </Routes>
      </>
    );
  }
}
