import React from 'react';
import Fb from "../../image/facebook.svg";
import Ins from "../../image/instagram.svg";
import Tw from "../../image/twitter.svg";
import Link from "../../image/link.svg";


const MovieContent = (props) => {
    return (
        <>
            <div className={'movie-header'}>
                <div className={'movie-detail'} style={{backgroundImage: "none"}}>
                    <div className={'movie-banner'}>
                        <div className={'content-wrapper'}>
                            <div>as</div>
                            <div className={'content-status'}>
                                <div className={'fact-left-col'}>
                                    <div className={'social-icon'}>
                                        <img src={Fb} alt={''}/>
                                        <img src={Ins} alt={''}/>
                                        <img src={Tw} alt={''}/>
                                        <img src={Link} alt={''}
                                             style={{borderLeft: '1px solid #d7d7d7', paddingLeft: '15px'}}/>
                                    </div>
                                    <p>
                                        <strong>
                                            <bdi>Status</bdi>
                                        </strong>
                                    </p>
                                      <p>
                                        <bdi>Original Language</bdi>
                                    </p>
                                      <p>
                                        <bdi>Budget</bdi>
                                    </p>
                                      <p>
                                        <bdi>Revenue</bdi>
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MovieContent;