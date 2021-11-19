import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={ <Home /> }/>
        <Route path="/movie/:imdbId" element={<MovieDetail />}/>
        <Route path="*" element={ <PageNotFound /> }/>
      </Route>
    </Routes>
  );
}

export default App;
