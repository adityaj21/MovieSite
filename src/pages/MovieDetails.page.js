import React, { useState, useEffect} from 'react'
import "./MovieDetails.css";

import { AiOutlineHeart, AiOutlineUnorderedList } from "react-icons/ai"
import { BsBookmark } from "react-icons/bs";

import ProgressBar from '../features/progressBar';
import { httpPostAddFavorite } from './httpRequests';
// import { AppContext } from '../App';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


export default function MovieDetails() {
  // const { movieId } = useContext(AppContext);
  // console.log(movieId);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGM2ZDM5ZWRiOGMzYTgzMjM2MzQ0MTM5ZjRlMzliOCIsInN1YiI6IjY0OWEzOWFiZmVkNTk3MDE0ZDE0ZWIxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xFg_B1ybzqvHw8h6cOLLJk-vscQvBwcgnTZcq0dH6Hs'
    }
  };
  const IMG_URL = "https://image.tmdb.org/t/p/w500";
  let x1 = 0;
  let x2 = 0;

  const [mDetails, setmDetails] = useState({});
  const [mCreadits, setmCreadits] = useState({});
  const [mVideos, setmVideos] = useState({});
  const [mImages, setmImages] = useState({});
  const [mRecommend, setmRecommend] = useState({});

  const { id } = useParams();

  async function detailsFetch() {
    try {
      const data = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options);
      const res = await data.json();
      setmDetails(res);
      // console.log(res + " direct response");
      // console.log(mDetails);
    } catch (err) {
      console.error(err);
    }
  }

  async function creaditsFetch() {
    try {
      const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, options);
      const res = await data.json();
      setmCreadits(res);
      // console.log(res + " direct response");
      // console.log(mCreadits);
    } catch (err) {
      console.error(err);
    }
  }
  async function VideosFetch() {
    try {
      const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options);
      const res = await data.json();
      setmVideos(res);
      // console.log(res + " direct response");
      // console.log(mVideos);
    } catch (err) {
      console.error(err);
    }
  }
  async function ImagesFetch() {
    try {
      const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/images`, options);
      const res = await data.json();
      setmImages(res);
      // console.log(res + " direct response");
      // console.log(mImages);
    } catch (err) {
      console.error(err);
    }
  }
  async function RecommendFetch() {
    try {
      const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`, options);
      const res = await data.json();
      setmRecommend(res);
      // console.log(res + " direct response");
      // console.log(mRecommend);
    } catch (err) {
      console.error(err);
    }
  }

 

  useEffect(() => {
    detailsFetch();
    creaditsFetch();
    VideosFetch();
    ImagesFetch();
    RecommendFetch();
    // console.log(mDetails);
  }, []);

  return (
    <div className='movie-details-div'>
      <section className='details-section-top' style={{ background: ` url('${IMG_URL + mDetails.backdrop_path}') rgba(0, 0, 0, 0.5) no-repeat center center/cover` }}>
        <div className='poster-wrap'>
          <img src={IMG_URL + mDetails.poster_path} alt='Poster of movie'></img>
        </div>
        <div className='movie-detail-wrap'>

          <div className='heading-wrap'>
            <h1>{mDetails.original_title}</h1>
            <p>
              <span className='release-date'>{mDetails.release_date}</span>
              <span className='movie-genres-wrap'>{mDetails.genres?.map((e) => {
                return <span className='genre' key={e.id}>{e.name}</span>;
              })}
              </span>
              <span className='movie-length'>Trailer Link</span>
            </p>
          </div>

          <div className='user-interaction-wrap'>
            <ul>
              <li className='movie-rating'> <ProgressBar progress={mDetails.vote_average * 10} /></li>
              <li className='add-to-list personal-intract'><AiOutlineUnorderedList className='tool-icons' /></li>
              <li className='faviorate-container personal-intract' onClick={()=>httpPostAddFavorite(id)}> <AiOutlineHeart className='tool-icons' /></li>
              <li className='watchlist-container personal-intract'><BsBookmark className='tool-icons' /></li>
              <li className='trailer-link'></li>
            </ul>
          </div>

          <div className='overview-wrap'>
            <h3 className='overview-heading'>Overview</h3>
            <p>{mDetails.overview}</p>
          </div>

          <div className='crew-people-wrap'>
            {mCreadits.crew?.map(e => {
              x1++;
              if (x1 > 7) return; 
              return (
                <div className='people-details' key={e.id}>
                  <p className='membar-name'>{e.original_name}</p>
                  <p>{e.known_for_department}</p>
                </div>
              )
            })}
          </div>

        </div>


      </section>

      <section className='crew-section'>
        <h2>Top Billed Cast</h2>
        <div className='crew-container'>
          {mCreadits.cast?.map((e) => {
            return (
              <div className='crew-card' key={e.id}>
                <div className='crew-img-wrap'>
                  <img src={IMG_URL + e.profile_path} alt='Person Image'></img>
                </div>
                <div className='crew-name-wrap'>
                  <p className='crew-real-name'>{e.original_name}</p>
                  <p className='known-for'>{e.known_for_department}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className='media-section'>
        <h2 className='media-heading'>Media</h2>
        <div className='media-wrap'>
          {mVideos.results?.map((e) => {
            x2++;
            if (x2 > 1) return;
            return (
              <div className='media-element' key={e.id}>
                <iframe width="420" height="315"
                  src={`http://www.youtube.com/watch?v=${e.key}`}>
                </iframe>
              </div>
            )
          })}
          {mImages.backdrops?.map((e) => {
            return (
              <div className='media-element' key={e.id}>
                <img src={IMG_URL + e.file_path}></img>
              </div>
            )
          })}

        </div>
      </section>
      <section className='recommendation-section'>
        <h2>Recomendation</h2>
        <div className='recommend-wrap'>
          {mRecommend.results?.map((e) => {
            return (
              <Link to={"/details/" + e.id}>
              <div className='recommend-card' key={e.id}>
                <img src={IMG_URL + e.backdrop_path}></img>
                <p className='recommend-name'>{e.original_title}</p>
              </div>
              </Link>
            )
          })}
        </div>
      </section>
    </div>
  )
}
