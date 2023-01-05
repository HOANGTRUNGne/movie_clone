import React, {useEffect, useState} from 'react';
import '../../style/TrailerMovie.scss'
import movieTrailer from 'movie-trailer';
import ReactPlayer from 'react-player';
import User from '../../image/user.svg'

const TrailerMovie = (props) => {
    const {handleModal} = props
    const {title} = props.currentMovie
    const [video, setVideo] = useState("");
    const [videoURL, setVideoURL] = useState("");

    const handleSearch = ()  => {
        setVideo(title)
        movieTrailer(video).then((res) => {
            setVideoURL(res);
        });
    }
    useEffect(() =>{
        handleSearch()
    }, [videoURL])
    return (
        <div className={'modal'} onClick={() => handleModal()}>
            <div className={'modal-content'} onClick={e => e.stopPropagation()}>
                <span className="close" onClick={() => handleModal()}>&times;</span>
                <ReactPlayer url={videoURL ? videoURL : User } controls={true} width={'1000px'} height={'700px'} muted={false} />
            </div>
        </div>
    );
};

export default TrailerMovie;