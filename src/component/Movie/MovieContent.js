import React from 'react';
import Fb from "../../image/facebook.svg";
import Ins from "../../image/instagram.svg";
import Tw from "../../image/twitter.svg";
import LinkImg from "../../image/link.svg";
import {Link} from "react-router-dom";
import NoImg from "../../image/user.svg";

const Cast = (props) => {
    const {imagesMovieContent='', member={}} = props
    const {name, profile_path, character} = member
    return (
        <div className={'cast'}>
            <Link to={'/'} className={'cast-img'}>
                <img src={profile_path ? `${imagesMovieContent}${profile_path}` : NoImg}  alt={''}/>
            </Link>
            <p style={{fontWeight: 'bold', color:'#000'}}>{name}</p>
            <p className={'cast-character'}>
                {character}
            </p>
        </div>
    )
}

const MovieContentRight = ({castMovie,...rest}) => {
    const {cast = []} = castMovie
    const sizeListCast = 6
    return (
        <div className={'wrapper-content-right'}>
            <div className={'panel top-cast'} style={{border: "none"}}>
                <h3>Top Billed Cast</h3>
                <div className={'people'}>
                    {
                    cast.slice(0, sizeListCast).map(member => <Cast {...{key:member.id, member}} {...rest}  />)
                }

                </div>
            </div>
            <div className={'panel'}>
                <h3>Review</h3>
                <div>

                </div>
            </div>
        </div>
    )
}
const MovieContentLeft = (props) => {
    const {status, original_title, budget, revenue} = props.currentMovie
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

const MovieContent = (props) => {
    const currentMovie = props.currentMovie
    const castMovie = props.castMovie
    const imagesMovieContent = 'https://image.tmdb.org/t/p/w500'
    return (
        <>
            <div className={'movie-header'}>
                <div className={'movie-detail'} style={{backgroundImage: "none"}}>
                    <div className={'movie-banner'}>
                        <MovieContentRight castMovie={castMovie} imagesMovieContent={imagesMovieContent}/>
                        <MovieContentLeft currentMovie={currentMovie}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MovieContent;