import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Header } from "./components/header/Header";
import { HomePage } from "./pages/home-page/HomePage";
import { PhotosPage } from "./pages/photos-page/PhotosPage";
import { UsersPage } from "./pages/users-page/UsersPage";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/photos" element={<PhotosPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
