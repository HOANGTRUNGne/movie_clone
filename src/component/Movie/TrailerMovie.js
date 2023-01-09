import React, {useEffect, useState} from 'react';
import '../../style/TrailerMovie.scss'
import movieTrailer from 'movie-trailer';
import ReactPlayer from 'react-player';
import User from '../../image/user.svg'
import LoadingSkeleton from "../loading/LoadingSkeleton";

const TrailerMovie = (props) => {
    const {modalTrailer, loading, setLoading} = props
    const {title} = props.currentMovie
    const [video, setVideo] = useState("");
    const [videoURL, setVideoURL] = useState("");
    console.log(loading)
    const handleSearch = () => {
        setVideo(title)
        movieTrailer(video).then((res) => {
            setVideoURL(res);
        });
    }
    useEffect(() => {
        handleSearch()
    }, [videoURL])
    return (
        <>
            <div className={'modal'} onClick={() => modalTrailer()}>
                <div className={'modal-content modal-trailer'} style={{backgroundColor: 'transparent'}}
                     onClick={e => e.stopPropagation()}>
                    <span className="close" onClick={() => modalTrailer()}>&times;</span>
                    <ReactPlayer url={videoURL} controls={true} width={'1000px'} height={'700px'}
                                 muted={false}/>
                </div>
            </div>
        </>
    );
};

export default TrailerMovie;