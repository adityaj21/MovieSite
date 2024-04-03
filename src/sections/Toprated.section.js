import React, {useState} from 'react'

import TopMovies from '../components/TopMovies';
import TopRatedTV from '../components/TopRatedTV';

export default function Toprated() {
    const [topRatedTogleM, setTopRatedTogleM] = useState(true);
  const [topRatedTogleTV, setTopRatedTogleTV] = useState(false);
  const topRatedToggleM = () => {
    setTopRatedTogleM(true);
    setTopRatedTogleTV(false);
  }
  const topRatedToggleTV = () => {
    setTopRatedTogleM(false);
    setTopRatedTogleTV(true);
  }
  return (
    <section className='containers'>
        <div className='column-head'>
          <h2 className='column-heading'>Top Rated</h2>
          <div className='selector-wrap'>
            <div onClick={topRatedToggleM} className={topRatedTogleM ? "active selector" : "selector"}>
              <h3><a className='ancor'>Movies</a></h3>
            </div>
            <div onClick={topRatedToggleTV} className={topRatedTogleTV ? "active selector" : "selector"}>
              <h3><a className='ancor'>TV</a></h3>
            </div>
          </div>
        </div>
        <div className='movie-container'>

          {topRatedTogleM ? <TopMovies /> : <TopRatedTV />}

        </div>
      </section>
  )
}
