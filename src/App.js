import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FormPage from "./pages/FormPage";
import RobotsPage from "./pages/RobotsPage";

function App() {
  // usefect -> const token = JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_TOKEN))
  // if token dispatch(loginuseraction(jwtDecode(token.token)))
  return (
    <Router>
      <Header />

      <div className="flex flex-col items-center justify-center min-h-screen py-20 bg-gradient-to-tr from-gray-800 to-blue-400">
        <Routes>
          <Route path="/robots" element={<RobotsPage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/" element={<RobotsPage />} />
          <Route path="/*" element={<RobotsPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
