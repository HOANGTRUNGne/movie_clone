import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import Avatar from '../../image/img_avatar.png'
import Play from '../../image/play.svg'
import '../../style/Videos.scss'
import CategoryBar from "../Header/CategoryBar";
import {Link} from "react-router-dom";
import MovieDetail from "./MovieDetail";


const MovieItem = (props) => {
    const movie = props.movie
    const {title, poster_path} = movie
    const imagesMovie = props.imagesMovie

        // const strScores = title.replaceAll(' ', '-');
        //
        // const strConlon = strScores.replaceAll(':', '');
        //
        // const strPossessive = strConlon.replaceAll("'s","-s");
        //
        //
        // console.log(strPossessive.toLowerCase())
    // console.log((movie.id).toString())


    return (
        <Link  to={`/info/${movie.id}`} style={{ textDecoration: 'none' }}>
            <div id={'container'}>
                <img src={Play} id={'playIcon'} alt={''}/>
                <img src={poster_path ? `${imagesMovie}${poster_path}` : Avatar}
                     alt={''}/>
                <h3 id={'smaller-Text'}>{title}</h3>
            </div>
        </Link>
    )
}

const MoviesPage = () => {

        const [movieData, setMovieData] = useState([])
        const [genreMovies, setGenreMovies] = useState([])
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
            setGenreMovies(results)
        }
        useEffect(() => {
            MovieCall()
        }, [])


        const changeGenres = (id) => {
            if (movieData) {
                const getGenreMovie = genreMovies.filter(movie => (movie.genre_ids).includes(id))
                setMovieData(getGenreMovie)
            }
        }
        return (
            <>
                <CategoryBar changeGenres={changeGenres}/>
                <div className={'movies-container'}>
                    {movieData.map(movie => <MovieItem key={movie.id} movie={movie} imagesMovie={imagesMovie}/>)}
                </div>

            </>
        );
    }
;

export default MoviesPage;
