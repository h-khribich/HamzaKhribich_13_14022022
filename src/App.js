import { BrowserRouter as Route, Routes } from "react-router-dom";
import ProtectedRoute from "../src/components/ProtectedRoute";
import SignIn from "./pages/SignIn";
import User from "./pages/User";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route element={<ProtectedRoute isLoggedIn={false} />}>
          <Route path="/user" element={<User />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
