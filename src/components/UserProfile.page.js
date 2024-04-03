import "./UserProfile.css";
import ProgressBar from "../features/progressBar";

import React, { useEffect } from 'react'
import { getFavoriteMovies } from '../pages/httpRequests'

export default function UserProfile() {


  useEffect(() => {
    console.log(getFavoriteMovies());
  }, [])
  return (
    <div className="popup-background">
      <div className='personal-popup'>
        {/* <section className='profile-wrap'>
          <div className="profile-logo">
            <img></img>
          </div>
          <div className="user-name">
            <h3>User Name</h3>
            <span>Member since date</span>
          </div>
        </section> */}
        <section className='page-link-wrap'>
          <ul className="category-list-container">
            <li>List</li>
            <li>Favorite</li>
            <li>Bookmark</li>
          </ul>
        </section>
        <hr></hr>
        <section className='content-wrap'>
          <h2 className="content-wrap-heading">Favorite</h2>
          <div className="personlise-content-wrap">

            <div className='saved-content-card' >
              <div className='card-img-cont'>
                <img src='	https://image.tmdb.org/t/p/w500/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg'></img>
                <div className='progress-container'>
                  <ProgressBar progress={3.4 * 10}/>
                </div>
              </div>
              <h4 className='movie-title'>{}Movie Name</h4>
              <p className='release-date'>{}Release date</p>
            </div>

          </div>
        </section>
      </div >
    </div >
  )
}
