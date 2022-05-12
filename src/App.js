import { Route, Routes } from "react-router-dom";
import "./App.css";

import { Component } from "react";
import { FilmFullContent } from "./components/FilmFullContent";
import Homepage from "./components/Homepage";
import Layout from "./components/Layout";

export default class App extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path=":id" element={<FilmFullContent />} />
          </Route>
        </Routes>
      </>
    );
  }
}
