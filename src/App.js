import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../src/components/ProtectedRoute";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "animate.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "./app/features/authentification/auth.actions";

function App() {
  const dispatch = useDispatch();

  // Using valid user data that has been put into localStorage with the 'Remember Me' to keep user logged in
  useEffect(() => {
    const validUserData = JSON.parse(localStorage.getItem("userData"));

    validUserData && dispatch(loginUser(validUserData));
  });

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
