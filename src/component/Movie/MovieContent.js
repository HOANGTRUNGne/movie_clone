import React, {useEffect} from 'react';
import Fb from "../../image/facebook.svg";
import Ins from "../../image/instagram.svg";
import Tw from "../../image/twitter.svg";
import LinkImg from "../../image/link.svg";
import {Link} from "react-router-dom";
import NoImg from "../../image/user.svg";
import MovieContentLeft from './MovieContentLeft'
import LoadingSkeleton from "../loading/LoadingSkeleton";

const MovieContentRight = (props) => {
    const {currentMovie = {}} = props
    const {status, original_title, budget, revenue} = currentMovie
    return (
        <div className={'content-status'}>
            <div className={'fact-left-col'}>
                <div className={'social-icon'}>
                    <img src={Fb} alt={''}/>
                    <img src={Ins} alt={''}/>
                    <img src={Tw} alt={''}/>
                    <img src={LinkImg} alt={''}
                         style={{borderLeft: '1px solid #d7d7d7', paddingLeft: '15px'}}/>
                </div>
                <p>
                    <strong>
                        <bdi>Status</bdi>
                    </strong>
                    {status}
                </p>
                <p>
                    <strong>
                        <bdi>Original Title</bdi>
                    </strong>
                    {original_title}
                </p>
                <p>
                    <strong>
                        <bdi>Budget</bdi>
                    </strong>
                    ${Intl.NumberFormat('en-US').format(budget)}
                </p>
                <p>
                    <strong>
                        <bdi>Revenue</bdi>
                    </strong>
                    ${Intl.NumberFormat('en-US').format(revenue)}
                </p>
            </div>
        </div>
    )
}
const MovieContentRightLoading = () => {
    return (
            <LoadingSkeleton className={'content-status'} style={{minHeight:'692px'}}/>
    )
}

const MovieContent = (props) => {
    const {currentMovie = {}, castMovie = {}, relatedMovie = {}, loading, setLoading} = props
    const imagesMovieContent = 'https://image.tmdb.org/t/p/w500'


    return (
        <>
            <div className={'movie-header'}>
                <div className={'movie-detail'} style={{backgroundImage: "none"}}>
                    <div className={'movie-banner'}>
                        {!loading && <MovieContentLeft  {...{currentMovie, castMovie, imagesMovieContent, relatedMovie}}/>}
                        {loading && <MovieContentLeft.Loading/>}
                        {loading && <MovieContentRight.Loading/>}
                        {!loading && <MovieContentRight {...{currentMovie}}/>}
                    </div>
                </div>
            </div>
        </>
    );
};
MovieContentRight.Loading = MovieContentRightLoading

export default MovieContent;