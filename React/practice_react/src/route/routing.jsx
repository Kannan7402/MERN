import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Component from "../components/component";
import Navigation from "./navigation";
import Form from "../components/form";
import Signup from "../components/signUp";
import Parent from "../components/parent";
import List from "../components/useEffect";

function Routing() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/component" element={<Component />} />
        <Route path="/form" element={<Form />} />
        <Route path="/signUp" element={<Signup />} />
        <Route path="/parent" element={<Parent />} />
        <Route path="/useEffect" element={<List />} />
        
      </Routes>
    </Router>
  );
}

export default Routing;
