import React, { useEffect, useState } from 'react';
import axios from '../axios';
import requests from '../request';
import '../css/Banner.css'

const Banner = () => {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(Object.values(requests)[Math.floor(Math.random() * Object.keys(requests).length)]);
            setMovie(res.data.results[Math.floor(Math.random() * res.data.results.length - 1)])
        }
        fetchData();
    }, [])

    // function truncate(str, n){
    //     return str?.length > n ? str.substr(0, n-1) + "..." : str;
    // }

    return (
        <header className='banner'
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`
            }}
        >
            <div className="banner__contents">
                <h1 className='banner__title'>{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <p className="banner__description">{movie?.overview}</p>
            </div>

            <div className="banner--fadeBottom"></div>
        </header>
    )
}

export default Banner;