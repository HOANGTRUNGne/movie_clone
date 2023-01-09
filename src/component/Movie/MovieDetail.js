import React, {useState, useEffect} from 'react';
import '../../style/Videos.scss'
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import MovieHeader from "./MovieHeader";
import MovieContent from "./MovieContent";
import TrailerMovie from "./TrailerMovie";

const MovieDetail = () => {
    const [loading, setLoading] = useState(true)
    const [switchTrailer, setTrailer] = useState(false)
    const [currentMovie, setMovieDetail] = useState({})
    const [castMovie, setCastMovie] = useState({})
    const [relatedMovie, setRelatedMovie] = useState({})
    const {id} = useParams()
    const imagesMovieDetail = 'https://image.tmdb.org/t/p/w500'
    const ApiMovieDetail = `https://api.themoviedb.org/3/movie/${id}`
    const ApiCast = `https://api.themoviedb.org/3/movie/${id}/credits`
    const ApiRelated = `https://api.themoviedb.org/3/movie/${id}/recommendations`

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
    const getDataRelated = async () => {
        const data = await axios.get(ApiRelated, {
            params: {
                api_key: 'e06dfd90d926d62130148f7ba938baa8'
            }
        })
        const results = data.data
        setRelatedMovie(results)
    }

    useEffect(() => {
        getDataMovie()
        getDataCast()
        getDataRelated()
    }, [id])

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 300)
    }, [])

    const modalTrailer = () => {
        setTrailer(!switchTrailer)
    }
    useEffect(() => {
        const close = (e) => {
            if (e.keyCode === 27 && !switchTrailer) {
                setTrailer(switchTrailer)
            }
        }
        window.addEventListener('keydown', close)
        return () => window.removeEventListener('keydown', close)
    }, [])

    return (
        <>
            {switchTrailer && <TrailerMovie {...{modalTrailer, currentMovie}}/>}
            <MovieHeader {...{currentMovie, imagesMovieDetail, loading, modalTrailer}} />
            <MovieContent {...{currentMovie, castMovie, relatedMovie, loading, setLoading}} />
        </>
    );
};

export default MovieDetail;