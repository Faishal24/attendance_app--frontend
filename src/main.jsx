import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import App from "./App.jsx";
import Login from "./pages/Login.jsx";
import "./index.css";

const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user");
  return user ? children : <Navigate to="/login" />;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="*"
          element={
            <ProtectedRoute>
              <App />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  </React.StrictMode>
);
