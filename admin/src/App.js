import Home from "./pages/Home";
import Login from "./pages/Login";
import List from "./pages/List";
import Single from "./pages/Single";
import New from "./pages/New";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.css";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext, AuthProvider } from "./context/AuthContext.js";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    }
    return children;
  };
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/">
              <Route path="login" element={<Login />} />
              <Route
                index
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path="users">
                <Route
                  index
                  element={
                    <ProtectedRoute>
                      <List />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path=":userId"
                  element={
                    <ProtectedRoute>
                      <Single />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="new"
                  element={<ProtectedRoute><New inputs={userInputs} title="Add New User" /></ProtectedRoute>}
                />
              </Route>
              <Route path="products">
                <Route index element={<List />} />
                <Route
                  path=":productId"
                  element={
                    <ProtectedRoute>
                      <Single />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="new"
                  element={
                    <ProtectedRoute>
                      <New inputs={productInputs} title="Add New Product" />{" "}
                    </ProtectedRoute>
                  }
                />
              </Route>
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
