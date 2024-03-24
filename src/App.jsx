import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import { Suspense, lazy } from 'react';

const MainPage = lazy(() => import('./MainPage/MainPage'));
const CampersPage = lazy(() => import('./CampersPage/CampersPage'));
const Favorits = lazy(() => import('./FavoriteList/FavoritList'));

const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<MainPage />}></Route>
            <Route path="/campers" element={<CampersPage />}></Route>
            <Route path="/favorite" element={<Favorits />}></Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
