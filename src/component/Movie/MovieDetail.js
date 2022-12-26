import React from 'react';
import Play from "../../image/play.svg";
import '../../style/Videos.scss'
const MovieDetail = () => {
    return (
        <div>
            <div id={'movie-detail'}>
                <div className={'movie-banner'}>
                    <div className={'poster-wrapper'}>
                        <img className={'poster'} src={'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/iHZNuxT4IYwkhRiYGPFhHqDjgiG.jpg'} />
                    </div>
                    <div className={'intro-wrapper'}>
                        <div className={'intro-title'}>
                            <h2>The Witcher: Blood Origin (2022)</h2>
                            <span>Gener</span>
                        </div>
                        <div className={'actions'}>
                            <img src={Play} alt={''} />
                            Play Trailer
                        </div>
                        <div className={'intro-overview'}>
                            <h3>Overview</h3>
                            <p>More than a thousand years before the world of The Witcher, seven outcasts in the elven world unite in a blood quest against an unstoppable power.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;