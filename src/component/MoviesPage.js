import React, {useEffect, useState} from 'react';
import axios from "axios";
import Avatar from '../image/img_avatar.png'
import Play from '../image/play.svg'
import '../style/Videos.scss'
import CategoryBar from "./Header/CategoryBar";

const MovieItem = (props) => {
    const movie = props.movie
    const imagesMovie = props.imagesMovie
    return (
        <div id={'container'}>
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

        const changeGenres = (id) => {
            if (movieData) {
                // const getGenreId = movieData.filter(movie => idArr === id)
                // const findMoviesByGenreId = movieData.filter(movie => movie.genre_ids === id)
            }

        }

    const getGenreId = movieData.filter(movie => (movie.genre_ids).includes(12))
    console.log(getGenreId)

        return (
            <>
                <CategoryBar changeGenres={changeGenres}/>
                <div className={'movies-container'}>
                    {movieData.map(movie => <MovieItem key={movie.id} movie={movie} imagesMovie={imagesMovie}/>)}</div>
            </>
        );
    }
;

export default MoviesPage;
