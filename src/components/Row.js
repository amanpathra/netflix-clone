import React, { useEffect, useState } from 'react';
import axios from '../axios';
import '../css/Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = 'https://image.tmdb.org/t/p/original/';

const Row = ({ title, fetchURL, isLargeRow }) => {

    const [movies, setMovies] = useState([]);
    const [trailerURL, setTrailerURL] = useState("");

    //Snippet of code which runs based on a specific condiiton/variable
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(fetchURL);
            setMovies(res.data.results);
            return res;
        }
        fetchData();
    }, [fetchURL])

    console.table(movies)

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if (trailerURL) setTrailerURL('');
        else {
            movieTrailer(movie?.name || "")
            .then(url => {
                // https://youtube.com/watch?v=XtMThy8QKqU
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerURL(urlParams.get('v'));
            }).catch((error) => console.log(error));
        }
    }

    return (
        <div className='row'>
            <h3 className='row__title'>{title}</h3>

            <div className="row__posters">
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                        className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
                        onClick={handleClick(movie)}
                    />
                ))}
            </div>
            {trailerURL && <YouTube videoId={trailerURL} opts={opts}/>}
        </div>
    )
}

export default Row;