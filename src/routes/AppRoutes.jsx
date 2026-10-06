import { Routes, Route } from "react-router-dom";

import Home from "../../pages/Home";
import Movies from "../../pages/Movies";
import TvShows from "../../pages/TvShows";
import Trending from "../../pages/Trending";
import MyList from "../../pages/MyList";
import Login from "../Login";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/tv-shows" element={<TvShows />} />
      <Route path="/trending" element={<Trending />} />
      <Route path="/my-list" element={<MyList />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default AppRoutes;
