import React from 'react';
import PlayWite from "../../image/play_white.svg";
import {Link} from "react-router-dom";

const MovieHeader = (props) => {
    const {poster_path, title, genres, overview, tagline, release_date, backdrop_path, runtime} = props.currentMovie
    const imagesMovie = props.imagesMovie
    const genresMovie = genres?.map(genre => {
        return (
            <Link to={'/'} key={genre.id} style={{marginLeft: '10px'}}>{genre.name}</Link>
        )
    })
    const formatTime = (time) => {
        const hours = Math.floor(time / 60);
        const minutes = time % 60;
        return `${hours}h ${minutes < 10 ? `0${minutes}` : minutes}m`;
    }
    return (
        <>
            <div className={'movie-header'} style={{backgroundImage: `url(${imagesMovie}${backdrop_path})`}}>
                <div className={'movie-detail'}>
                    <div className={'movie-banner'}>
                        <div className={'poster-wrapper'}>
                            <img className={'poster'}
                                 src={`${imagesMovie}${poster_path}`}/>
                        </div>
                        <div className={'intro-wrapper'}>
                            <div className={'intro-title'}>
                                <h2>
                                    {title}
                                    <span>(2022)</span>
                                </h2>
                                <div className={'fact'}>
                                    <span className={'release-date'}>{release_date}</span>
                                    <span>{genresMovie}</span>
                                    <span>{formatTime(runtime)}</span>
                                </div>
                            </div>
                            <div className={'actions'}>
                                <img src={PlayWite} alt={''}/>
                                Play Trailer
                            </div>
                            <div className={'intro-overview'}>
                                <h3 className={'tagline'}>{tagline}</h3>
                                <h3>Overview</h3>
                                <p>{overview}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MovieHeader;