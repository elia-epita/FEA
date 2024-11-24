import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <>
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/login" element={<AuthPage />} />
      <Route path="/movie/:movie_id" element={<MovieDetailsPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
}

export default App;
