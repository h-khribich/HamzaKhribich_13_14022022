import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../src/components/ProtectedRoute";
import SignIn from "./pages/SignIn";
import User from "./pages/User";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/user" element={<User />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
