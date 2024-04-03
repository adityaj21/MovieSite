import React, { useEffect, useState } from 'react';
import ProgressBar from "../features/progressBar";
import { Link } from 'react-router-dom';

// import { useContext } from 'react';
// import { AppContext } from '../App';

export default function TopMovies() {
    const [data, setData] = useState({});
    // const {movieId, setMovieId} = useContext(AppContext);

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGM2ZDM5ZWRiOGMzYTgzMjM2MzQ0MTM5ZjRlMzliOCIsInN1YiI6IjY0OWEzOWFiZmVkNTk3MDE0ZDE0ZWIxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xFg_B1ybzqvHw8h6cOLLJk-vscQvBwcgnTZcq0dH6Hs'
        }
    };

    const fetchdata = async () => {
        try {
            const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
            const mData = await data.json();
            setData(mData);
            // console.log(mData + "thos is trigeried");
        } catch (err) {
            console.error(err);
        };
    }
    useEffect(() => {
        fetchdata();
    }, []);

    return (
        <>
            {data.results?.map((e) => {
                // setMovieId(e.id);
                return <>
                    <Link to={"/details/" + e.id}>
                        <div className='movie-card' key={e.id}>
                            <div className='movie-img-cont'>
                                <img src={"https://image.tmdb.org/t/p/w500" + e.poster_path}></img>
                                <div className='progress-container'>
                                    <ProgressBar progress={e.vote_average * 10} color={e.adult ? "rgb(231, 2, 2)" : "rgb(0, 255, 42)"} />
                                </div>
                            </div>
                            <h4 className='movie-title'>{e.original_title}</h4>
                            <p className='release-date'>{e.release_date}</p>
                        </div>
                    </Link>
                </>;
            })}
        </>
    )
}
