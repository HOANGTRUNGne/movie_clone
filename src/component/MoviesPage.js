import React, {useEffect, useState} from 'react';
import axios from "axios";
import Avatar from '../image/img_avatar.png'
import Play from '../image/play.svg'
import '../style/Videos.css'

const MovieItem = (props) => {
    const movie = props.movie
    const imagesMovie = props.imagesMovie
    return (
        <div id={'container'} key={movie.id}>
            <img src={Play} id={'playIcon'} alt={''}/>
            <img src={movie.poster_path ? `${imagesMovie}${movie.poster_path}` : Avatar}
                 alt={''}/>
            <h3 id={'smaller-Text'}>{movie.title}</h3>
        </div>
    )
}

const MoviesPage = () => {
        const [movieData, setMovieData] = useState([])
        const Api = 'https://api.themoviedb.org/3/discover/movie'
        const imagesMovie = 'https://image.tmdb.org/t/p/w500'
        const MovieCall = async () => {
            const data = await axios.get(Api, {
                params: {
                    api_key: 'e06dfd90d926d62130148f7ba938baa8'
                }
            })
            const results = data.data.results
            setMovieData(results)
        }
        useEffect(() => {
            MovieCall()
        }, [])
        // console.log(movieData)
        return (
            <>
                <h1>Movies</h1>
                <div className={'movies-container'}>
                    {movieData.map(movie => <MovieItem movie={movie} imagesMovie={imagesMovie} />)}</div>
            </>
        );
    }
;

export default MoviesPage;
