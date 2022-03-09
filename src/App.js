import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../src/components/ProtectedRoute";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "animate.css";

function App() {
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
