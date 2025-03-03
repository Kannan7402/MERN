  import React, { useState } from "react";
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  import Component from "../components/component";
  import Navigation from "./navigation";
  import Form from "../components/form";
  import Signup from "../components/signUp";
  import Parent from "../components/parent";
  import List from "../components/useEffect";
  import Switch from "../components/switch";
  import MyComponent from "../components/classComponents";
  import Lift from "../components/stateUp";
  import Reducer from "../components/post";
  import Login from "../components/login";
  import LazyComp from "../components/LazyLoading";
  import ProtectedRoute from '../components/routeComp';  // Import the ProtectedRoute component
  import Dashboard from "../components/dashboard";

  function Routing() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);  // Track if the user is authenticated

    return (
      <Router>
        <Navigation />
        <Routes>
          <Route path="/component" element={<Component />} />
          <Route path="/form" element={<Form />} />
          <Route path="/signUp" element={<Signup />} />
          <Route path="/parent" element={<Parent />} />
          <Route path="/useEffect" element={<List />} />
          <Route path="/classComponent" element={<MyComponent />} />
          <Route path="/switch" element={<Switch />} />
          <Route path="/stateUp" element={<Lift />} />
          <Route path="/post" element={<Reducer />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          
          {/* Protected route for dashboard */}
          
          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
            <Route path="/dashboard" element={<Dashboard/>} />
          </Route>
          <Route path="/LazyLoading" element={<LazyComp />} />
        </Routes>
      </Router>
    );
  }

  export default Routing;
