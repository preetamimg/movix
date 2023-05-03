import React, { useRef } from "react";
import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill,} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import Img from "../lazyLoadImage/Img";
import PosterFallback from "../../assets/img/no-poster.png";
import './style.scss'
import CircleRating from './../circleRating/CircleRating';

const Carousel = ({data, loading, endPoint}) => {
    const CarouselContainer = useRef();
    const {url} = useSelector((state)=> state.home);
    const navigate = useNavigate();

    const skItem = ()=> {
        return (
            <div className="skeletonItem col">
            <div className="posterBlock skeleton"></div>
            <div className="textBlock">
                <span className="title skeleton"></span>
                <span className="date skeleton"></span>
            </div>
        </div>
        )
    }
    const navigation = (dir)=> {
        const container = CarouselContainer.current;

        const scrollAmount = dir === 'left' ? container.scrollLeft - (container.offsetWidth) :
        container.scrollLeft + (container.offsetWidth);

        container.scrollTo({
            left : scrollAmount,
            behavior : 'smooth'
        })
    }


    return <div className="carousel position-relative mt-3 mt-md-3">
        <div className="carouselInner">
            <BsFillArrowLeftCircleFill
            className="carouselLeftNav arrow"
            onClick={()=> navigation('left')}/>
            <BsFillArrowRightCircleFill
            className="carouselRightNav arrow"
            onClick={()=> navigation('right')}/>
            {!loading ? (
                <div className="carouselItems flex-nowrap mx-0 g-2 g-sm-3 g-lg-4 row row-cols-3 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6" ref={CarouselContainer}>
                    {data?.map((item)=> {
                        const posterUrl = item.poster_path ? url.poster + item.poster_path : PosterFallback
                        return (
                            <div key={item.id} className="carouselItem col"
                            onClick={()=> navigate(`/${item.media_type || endPoint}/${item.id}`)}>
                                <div className="posterBlock">
                                    <Img src={posterUrl}/>
                                    <CircleRating rating={item.vote_average.toFixed(1)}/>
                                    {/* <Genres data={item.genre_ids}/> */}
                                </div>
                                <div className="textBlock">
                                    <span className="title">
                                        {item.title || item.name}
                                    </span>
                                    <span className="date">
                                        {dayjs(item.release_Date).format("MMM D, YYYY")}
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            ): (
                <div className="loadingSkeleton flex-nowrap mx-0 overflow-hidden row g-2 g-sm-3 g-lg-4 row-cols-3 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6">
                    {skItem()}
                    {skItem()}
                    {skItem()}
                    {skItem()}
                    {skItem()}
                    {skItem()}
                    {skItem()}
                </div>
            )}
        </div>
    </div>;
};

export default Carousel;
