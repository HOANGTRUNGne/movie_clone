import React, {useState} from 'react';
import PlayWhite from "../../image/play_white.svg";
import {Link} from "react-router-dom";
import LoadingSkeleton from "../loading/LoadingSkeleton";

const LoadingMovieHeader = () => {
    return (
        <div className={'movie-header'}>
            <div className={'movie-detail'} style={{color: 'white',}}>
                <div className={'movie-banner'}>
                    <div className={'poster-wrapper'}>
                        <LoadingSkeleton className={'poster'}/>
                    </div>
                    <div className={'intro-wrapper'}>
                        <div className={'intro-title'}>
                            <LoadingSkeleton style={{minHeight: '71px', margin: '0'}}/>

                        </div>
                        <div className={'actions'}>
                            <LoadingSkeleton style={{minHeight: '40px', minWidth: '980px'}}/>
                        </div>
                        <div className={'intro-overview'}>
                            <LoadingSkeleton style={{minHeight: '127px', minWidth: '980px'}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
const MovieHeader = (props) => {
    const {currentMovie = {}, imagesMovieDetail = '', modalTrailer, loading, imagesBanner = ''} = props
    const {poster_path, title, genres, overview, tagline, release_date, backdrop_path, runtime} = currentMovie
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
            {loading ?
                <LoadingMovieHeader/>
                :
                <div className={'movie-header'} style={{backgroundImage: `url(${imagesBanner}${backdrop_path})`}}>
                    <div className={'movie-detail'} style={{color: 'white',}}>
                        <div className={'movie-banner'}>
                            <div className={'poster-wrapper'}>
                                <img className={'poster'}
                                     src={`${imagesMovieDetail}${poster_path}`}/>
                            </div>
                            <div className={'intro-wrapper'}>
                                <div className={'intro-title'}>
                                    <h2>
                                        {title}
                                        <span>({parseInt(release_date)})</span>
                                    </h2>
                                    <div className={'fact'}>
                                        <span className={'release-date'}>{release_date}</span>
                                        <span>{genresMovie}</span>
                                        <span>{formatTime(runtime)}</span>
                                    </div>
                                </div>
                                <div className={'actions'}>
                                    <div className={''}>

                                    </div>
                                    <div className={'play-trailer'} onClick={() => modalTrailer()}>
                                        <img src={PlayWhite} alt={''}/>
                                        Play Trailer
                                    </div>
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

            }
        </>
    );
};

MovieHeader.Loading = LoadingMovieHeader

export default MovieHeader;