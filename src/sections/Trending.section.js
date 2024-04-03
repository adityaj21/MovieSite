
import React, {useState} from 'react'

import TrendingMovies from '../components/TrendingMovies';
import TrendingTV from "../components/TrendingTV";

export default function Trending() {
    const [trendingTogleM, setTrendingTogleM] = useState(true);
    const [trendingTogleTV, setTrendingTogleTV] = useState(false);
    const trendingToggleM = () => {
        setTrendingTogleM(true);
        setTrendingTogleTV(false);
    }
    const trendingToggleTV = () => {
        setTrendingTogleM(false);
        setTrendingTogleTV(true);
    }
    return (
        <section className='containers'>
            <div className='column-head'>
                <h2 className='column-heading'>Trending</h2>
                <div className='selector-wrap'>
                    <div onClick={trendingToggleM} className={trendingTogleM ? "active selector " : "selector "}>
                        <h3><a className='ancor' >Movies</a></h3>
                    </div>
                    <div onClick={trendingToggleTV} className={trendingTogleTV ? "active selector ancor" : "selector ancor"}>
                        <h3><a className='ancor'>TV</a></h3>
                    </div>
                </div>
            </div>
            <div className='movie-container'>

                {trendingTogleM ? <TrendingMovies /> : <TrendingTV />}

            </div>
        </section>
    )
}

