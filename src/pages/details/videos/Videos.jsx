import React, { useState } from "react";

import "./style.scss";

import {PlayIcon} from './../../../components/playIcon/PlayIcon'
import VideoPopup from "../../../components/videoPopup/VideoPopup";
import Img from "../../../components/lazyLoadImage/Img";

const Videos = ({ data, loading }) => {
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null);

    const loadingSkeleton = () => {
        return (
            <div className="skItem">
                <div className="thumb skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row2 skeleton"></div>
            </div>
        );
    };

    return (
        <div className="container-fluid videosSection">
            <div className="container">
                <div className="sectionHeading">Official Videos</div>
                {!loading ? (
                    <div className="row videos">
                        {data?.results?.map((video)=> (
                            <div className="col-3 videoItem" 
                            key={video.id}
                            onClick={()=> {
                                setVideoId(video.key)
                                setShow(true)
                            }}>
                                <div className="videoThumbnail">
                                    <Img src={`https://img.youtube.com/vi/${video.key}/hqdefault.jpg`} alt={'Video Image'} width={'306'} height={'230'} />
                                    <PlayIcon/>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="videoSkeleton">
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                    </div>
                )}
            </div>
            <VideoPopup
                show={show}
                setShow={setShow}
                videoId={videoId}
                setVideoId={setVideoId}
            />
        </div>
    );
};

export default Videos;