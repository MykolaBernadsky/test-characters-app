import React from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "../pages/Main";
import Episode from "../pages/Episode";
import Character from "../pages/Character";

const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path={"/episodes/:id"} element={<Episode />} />
      <Route path={"/characters"} element={<Character />} />
    </Routes>
  );
};

export default AppRouter;