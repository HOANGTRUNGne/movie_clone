import React, {useState, useEffect} from 'react';
import PlayWite from "../../image/play_white.svg";
import '../../style/Videos.scss'
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import MovieHeader from "./MovieHeader";
import MovieContent from "./MovieContent";

const MovieDetail = () => {

    const [currentMovie, setMovieDetail] = useState({})
    const [castMovie, setCastMovie] = useState({})
    const {id} = useParams()
    const imagesMovie = 'https://image.tmdb.org/t/p/w500'

    const ApiMovieDetail = `https://api.themoviedb.org/3/movie/${id}`
    const ApiCast = `https://api.themoviedb.org/3/movie/${id}/credits`

    const getDataMovie = async () => {
        const data = await axios.get(ApiMovieDetail, {
            params: {
                api_key: 'e06dfd90d926d62130148f7ba938baa8'
            }
        })
        const results = data.data
        setMovieDetail(results)
    }

    const getDataCast = async () => {
        const data = await axios.get(ApiCast, {
            params: {
                api_key: 'e06dfd90d926d62130148f7ba938baa8'
            }
        })
        const results = data.data
        setCastMovie(results)
    }

    useEffect(() => {
        getDataMovie()
        getDataCast()
    }, [])


    return (
        <>
            <MovieHeader currentMovie={currentMovie} imagesMovie={imagesMovie} />
            <MovieContent castMovie={castMovie}/>
        </>
    );
};

export default MovieDetail;