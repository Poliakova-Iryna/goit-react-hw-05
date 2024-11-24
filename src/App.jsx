import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header"
import { lazy, Suspense } from "react";
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'));
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('./components/MovieReviews/MovieReviews'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));


const App = () => {
    return (
        <div>
            <Header />
            <Suspense fallbak={<h2>Loading, please wait</h2>}>
             <Routes>
                <Route path='/' element={<HomePage />}/>
                <Route path='/movies' element={<MoviesPage />} />
                <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
                  <Route path='cast' element={<MovieCast />} />
                  <Route path='reviews' element={<MovieReviews />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
             </Routes>
            </Suspense>
        </div>
    );
};

export default App; 