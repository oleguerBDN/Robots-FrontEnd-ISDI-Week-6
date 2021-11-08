import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FormPage from "./pages/FormPage";
import LoginPage from "./pages/LoginPage";
import RobotsPage from "./pages/RobotsPage";
import jwtDecode from "jwt-decode";
import useUser from "./hooks/useUser";
import LogoutPage from "./pages/LogoutPage";

function App() {
  const { user, loggedUser } = useUser();

  useEffect(() => {
    const token = localStorage.getItem(
      process.env.REACT_APP_LOCALSTORAGE_TOKEN
    );

    if (token) {
      loggedUser(jwtDecode(token).username);
    }
  }, [loggedUser]);

  return (
    <Router>
      <Header />

      <div className="flex flex-col items-center justify-center min-h-screen py-20 bg-gradient-to-tr from-gray-800 to-blue-400">
        <Routes>
          <Route path="/robots" element={<RobotsPage />} />
          <Route
            path={user.isAuthenticated ? "/form" : "/robots"}
            element={<FormPage />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/" element={<RobotsPage />} />
          <Route path="/*" element={<RobotsPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
