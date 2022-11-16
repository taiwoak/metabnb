import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainNav from "./components/MainNav";
import Home from "./pages/Home";
import Place from "./pages/Place";
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';

const rootElement = document.getElementById("root");
render (
  <BrowserRouter>
   <MainNav />
   <Routes>
      <Route path="/metabnb" element={<Home />} />
      <Route path="/metabnb/places" element={<Place />} />
    </Routes>
    <App />
  </BrowserRouter>,
  rootElement
);
