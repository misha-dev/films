import { Route, Routes } from "react-router-dom";
import "./App.css";

import { Component } from "react";

import { FilmFullContent } from "./components/FilmFullContent/FilmFullContent";
import Homepage from "./components/Homepage/Homepage";
import Layout from "./components/Layout/Layout";

export default class App extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/films" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="/films/:id" element={<FilmFullContent />} />
          </Route>
        </Routes>
      </>
    );
  }
}
