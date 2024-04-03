import './App.css';

import Header from "./sections/Header";
import Trending from "./sections/Trending.section";
import Toprated from "./sections/Toprated.section";
import Upcoming from "./sections/Upcoming.section";
import MovieDetails from "./pages/MovieDetails.page";
import Signup from './pages/signup.page';

import { Routes, Route } from 'react-router';
import { createContext, useState } from "react";

// export const AppContext = createContext({});

function App() {
  const [movieId, setMovieId] = useState(0);

  return (
    <div className="App">
      {/* <AppContext.Provider value={{ movieId, setMovieId }}> */}
        <Routes>

          {/* <Header /> */}

          <Route path='/' element={
            <>
              <Header />
              <Trending />
              <Toprated />
              <Upcoming />
            </>
          } />

          {/* <Route path='/' element={<Trending />}></Route> */}
          {/* <Route path='/' element={<Toprated />}></Route>
        <Route path='/' element={<Upcoming />}></Route> */}
          <Route path='/details/:id' element={<MovieDetails />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          
        </Routes>
      {/* </AppContext.Provider> */}
    </div>
  );
}

export default App;
