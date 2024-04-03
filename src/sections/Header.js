import React, { useState } from 'react';

import { AiOutlineHeart, AiOutlineUnorderedList } from "react-icons/ai"
import { BsBookmark } from "react-icons/bs";

import SearchDropdown from '../components/SearchDropdown';
import UserProfile from '../components/UserProfile.page';
import { Link } from 'react-router-dom';


export default function Header() {
    let [searchVal, setSearchVal] = useState("");
    const [data, setData] = useState({});
    const [toggleDropdown, setToggleDropdown] = useState(false);
    const [btnClick, setBtnClick] = useState(false);
    const [togglePopup, setTogglePopup] = useState(true);

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGM2ZDM5ZWRiOGMzYTgzMjM2MzQ0MTM5ZjRlMzliOCIsInN1YiI6IjY0OWEzOWFiZmVkNTk3MDE0ZDE0ZWIxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xFg_B1ybzqvHw8h6cOLLJk-vscQvBwcgnTZcq0dH6Hs'
        }
    };

    const fetchMdata = async (e) => {
        e.preventDefault();
        if (searchVal != "") {
            try {
                const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchVal}&include_adult=false&language=en-US&page=1`, options);
                const mData = await data.json();
                setData(mData);
                setBtnClick(true);
                // console.log(data);
            } catch (err) {
                console.error(err);
            };
            setToggleDropdown(true);
            // console.log("data fetched");

        }

    }
    const fetchTVdata = async (e) => {
        e.preventDefault();
        if (searchVal != "") {

            try {
                const data = await fetch(`https://api.themoviedb.org/3/search/tv?query=${searchVal}&include_adult=false&language=en-US&page=1`, options);
                const mData = await data.json();
                setData(mData);
                setBtnClick(false);
                // console.log(data);
            } catch (err) {
                console.error(err);
            };

            setToggleDropdown(true);
            // console.log("data fetched");
        }
    }
    return (
        <>
            <header>
                <div className='toolkit-container'>
                    <a onClick={()=> setTogglePopup(!togglePopup)}>
                        <AiOutlineHeart className='tool-icons' />
                    </a>
                    <a href='#'>
                        <AiOutlineUnorderedList className='tool-icons' />
                    </a>
                    <a href='#'>
                        <BsBookmark className='tool-icons' />
                    </a>
                </div>
                <div className='header-main-container'>
                    <h1>Welcome</h1>
                    <p>Millions of movies and TV shows to discover. Explore now.</p>
                    <div className='search-container'>
                        {/* <form> */}
                        <input className='search-bar' type='text' placeholder='Search for a movie, TV show...' onChange={(e) => setSearchVal(e.target.value)}></input>
                        <div>
                            <button className='search-btn' onClick={fetchMdata}>Search Movies</button>
                            <button className='search-btn' onClick={fetchTVdata}>Search TV</button>
                        </div>
                        {/* </form> */}
                    </div>
                </div>
            </header>
            {
                togglePopup && <UserProfile/>
            }
            {/* <section className='containers'>
                {toggleDropdown && <SearchDropdown fetchedData={data} setToggleDropdown={setToggleDropdown} btnClick={btnClick} toggle={toggleDropdown} />}
            </section> */}
            {toggleDropdown &&
                <section className={toggleDropdown ? "active-dropdown containers" : "containers"}>
                    <SearchDropdown fetchedData={data} setToggleDropdown={setToggleDropdown} btnClick={btnClick} toggle={toggleDropdown} />
                </section>
            }
        </>
    )
}
