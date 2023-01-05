import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import NoImg from "../../image/user.svg";
import Star from "../../image/star.svg";
import LoadingSkeleton from "../loading/LoadingSkeleton";
import MovieHeader from "./MovieHeader";

const Cast = (props) => {
    const {imagesMovieContent = '', member = {}} = props
    const {name, profile_path, character} = member
    return (
        <div className={'cast'}>
            <Link to={'/'} className={'cast-img'}>
                <img src={profile_path ? `${imagesMovieContent}${profile_path}` : NoImg} alt={''}/>
            </Link>
            <p style={{fontWeight: 'bold', color: '#000'}}>{name}</p>
            <p className={'cast-character'}>
                {character}
            </p>
        </div>
    )
}

const Related = (props) => {
    const navigate = useNavigate()
    const {imagesMovieContent = '', movie = {}} = props
    const {backdrop_path, poster_path, title, vote_average, id} = movie
    const ChangeMovie = (id) =>{
        navigate(`/info/${id}`)
        window.scrollTo(0, 0)
    }
    return (
        <div className={'card'} onClick={() => ChangeMovie(id)}>
                <div className={'image'}>
                    <img
                       draggable={"false"} src={backdrop_path ? `${imagesMovieContent}${backdrop_path}` : `${imagesMovieContent}${poster_path}`}/>
                </div>
                <div className={'content'}>
                    <p>{title}</p>
                    <span>
                        <img  src={Star} alt={''} />
                        {`${Math.floor(vote_average * 10)}%`}
                    </span>
                </div>
        </div>
    )
}

const MovieContentLeftLoading = () => {
    return(
        <div className={'wrapper-content-left'}>
           <LoadingSkeleton style={{minHeight:'692px'}}/>
        </div>
    )
}

const MovieContentLeft = ({currentMovie, castMovie, relatedMovie, ...rest}) => {
    const {cast = []} = castMovie
    const {title = ''} = currentMovie
    const {results: relatedMovies = []} = relatedMovie
    const sizeListCast = 6
    const sizeListRelated = 4
    return (
        <div className={'wrapper-content-left'}>
            <div className={'panel top-cast'} style={{border: "none"}}>
                <h3>Top Billed Cast</h3>
                <div className={'people'}>
                    {
                        cast.slice(0, sizeListCast).map(member => <Cast {...{key: member.id, member}} {...rest}  />)
                    }

                </div>
            </div>
            <div className={'panel'}>
                <h3>Recommendations</h3>
                <div className={'recommendation'}>
                    {
                        relatedMovies.length > 0 ?
                            relatedMovies.slice(0, sizeListRelated).map(movie => <Related {...{key: movie.id, movie}} {...rest} />)
                            :
                            <p>We don't have enough data to suggest any movies based on <strong>{title}</strong>. You
                                can help by rating movies you've seen.</p>
                    }
                </div>
            </div>
        </div>
    );
};

MovieContentLeft.Loading = MovieContentLeftLoading
export default MovieContentLeft;