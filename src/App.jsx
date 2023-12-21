import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Policypage from "./Policypage/Policypage";
import Userpage from "./UserPage/Userpage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Policypage />} />
          <Route path="/user" element={<Userpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
