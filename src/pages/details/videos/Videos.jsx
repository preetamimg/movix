import React, { useState, useRef } from "react";
import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill,} from "react-icons/bs";

import "./style.scss";

import {PlayIcon} from './../../../components/playIcon/PlayIcon'
import VideoPopup from "../../../components/videoPopup/VideoPopup";
import Img from "../../../components/lazyLoadImage/Img";

const Videos = ({ data, loading }) => {
    const CarouselContainer = useRef();
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null);

    // console.log(data)

    const loadingSkeleton = () => {
        return (
            <div className="skItem">
                <div className="thumb skeleton"></div>
                {/* <div className="line1 skeleton"></div>
                <div className="line2 skeleton"></div> */}
            </div>
        );
    };

    const navigation = (dir)=> {
        const container = CarouselContainer.current;

        const scrollAmount = dir === 'left' ? container.scrollLeft - (container.offsetWidth) :
        container.scrollLeft + (container.offsetWidth);

        container.scrollTo({
            left : scrollAmount,
            behavior : 'smooth'
        })
    }

    return (
        <>
            {data?.results?.length > 1 && (
                <div className="container-fluid videosSection py-2 py-lg-3">
                <div className="container position-relative px-0">
                    {data?.results?.length > 4 && (
                        <>
                            <BsFillArrowLeftCircleFill
                            className="carouselLeftNav arrow d-none d-md-block"
                            onClick={()=> navigation('left')}/>
                            <BsFillArrowRightCircleFill
                            className="carouselRightNav arrow d-none d-md-block"
                            onClick={()=> navigation('right')}/>
                        </>
                    )}
                    <div className="sectionHeading">Official Videos</div>
                    {!loading ? (
                        <div className="row mx-0 g-2 g-sm-3 g-lg-4  row-cols-lg-4 row-cols-sm-3 row-cols-2 flex-nowrap videos" ref={CarouselContainer}>
                            {data?.results?.map((video)=> (
                                <div className="col videoItem" 
                                key={video.id}
                                onClick={()=> {
                                    setVideoId(video.key)
                                    setShow(true)
                                }}>
                                    <div className="videoThumbnail">
                                        <Img src={`https://img.youtube.com/vi/${video.key}/hqdefault.jpg`}/>
                                        <PlayIcon/>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="row mx-0 g-2 g-sm-3 g-lg-4  row-cols-lg-4 row-cols-sm-3 row-cols-2 flex-nowrap videoSkeleton">
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
            )}
        </>
        
    );
};

export default Videos;