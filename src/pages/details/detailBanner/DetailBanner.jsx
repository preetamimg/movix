import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import useFetch from './../../../hooks/useFetch'
import { useSelector } from 'react-redux'
import dayjs from 'dayjs'
import './style.scss'
import Genres from './../../../components/genres/Genres'
import CircleRating from './../../../components/circleRating/CircleRating'
import Img from './../../../components/lazyLoadImage/Img'
import PosterFallback from './../../../assets/img/no-poster.avif'
import {PlayIcon} from './../../../components/playIcon/PlayIcon'
import VideoPopup from '../../../components/videoPopup/VideoPopup'


const DetailBanner = ({video, crew}) => {
    const {mediaType, id} = useParams();
    const {data, loading} = useFetch(`/${mediaType}/${id}`)
    const {url} = useSelector((state) => state.home)

    const director = crew?.filter((f)=> f.job === 'Director');
    const writer = crew?.filter((f)=> f.job === 'Screenplay' || f.job === "Writer" || f.job === "Story")

    const [show, setShow] = useState(false)
    const [videoId, setVideoId] = useState(null)

    const toHoursAndMinutes = (totalMinutes) => {
        const hours = Math.floor(totalMinutes / 60);
        // console.log(hours)
        const minutes = totalMinutes % 60;
        // console.log(minutes)
        return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
    };

    return (
        <>
        <div className="container-fluid detailBanner px-0 mb-4">
            <div className="container detailBannerInner px-0">
                <div className="row mx-0 detailBannerWrapper justify-content-center">
                    <div className="col-lg-9 px-0">
                        <div className="row mx-0">
                            {!loading ? (
                                <>
                                    <div className="col-md-6 detailPosterIg px-0">
                                        <div className="posterImgWrapper">
                                            <Img className='w-100' width={'400'} height={'600'} alt={'Poster Image'} src={data?.poster_path ? url.backdrop + data?.poster_path : PosterFallback}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 text-white px-0 mt-3 mt-md-0 detailSection">
                                        <div className="row px-2 mx-0">
                                            <div className="col-12 title">
                                                {`${data?.title || data?.name} (${dayjs(data?.release_date).format("YYYY")})`}
                                            </div>
                                            <div className="col-12 subTitle">
                                                {data?.tagline}
                                            </div>
                                            <div className="col-12 genres">
                                                <div className="row mx-0 g-2 g-lg-3 genresInner">
                                                    {data?.genres.map((genre)=> (
                                                        <div className="col-auto ps-0 genre" key={genre.id}>
                                                            <div className="genreText">{genre.name}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="row align-items-center">
                                                    <div className="col-auto">
                                                        <div className="rating">
                                                            <CircleRating rating={data?.vote_average.toFixed(1)}/>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <div className="playbtn"
                                                        onClick={()=> {
                                                            setShow(true)
                                                            setVideoId(video?.key)
                                                        }}>
                                                            <PlayIcon/>
                                                            <span className='text'>Watch Trailer</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 overview">
                                                <div className="heading">Overview :</div>
                                                <div className="overViewText">{data?.overview}</div>
                                            </div>
                                            {data?.status && data?.release_date && data?.runtime &&   <div className="col-12">
                                                <div className="row mx-0">
                                                        {
                                                            data?.status && 
                                                            <div className="col-auto ps-0 info">
                                                                <span>Status : </span>
                                                                <span>{data.status}</span>
                                                            </div>
                                                        }
                                                        {
                                                            data?.release_date && 
                                                            <div className="col-auto ps-0 info">
                                                                <span>Release Date : </span>
                                                                <span>{dayjs(data.release_date).format("MMM D, YYYY")}</span>
                                                            </div>
                                                        }
                                                        {
                                                            data?.runtime && 
                                                            <div className="col-auto ps-0 info">
                                                                <span>Runtime : </span>
                                                                <span>{toHoursAndMinutes(data.runtime)}</span>
                                                            </div>
                                                        }
                                                </div>
                                            </div>
                                            }
                                            {director?.length > 0 && 
                                            <div className='col-12 info mt-2'>
                                                <span>Director : </span>
                                                {director.map((item, index)=> (
                                                    <span key={index}>
                                                        {item.name}
                                                        {director?.length -1 !==index && ", "}
                                                    </span>
                                                ))}
                                            </div>
                                            }
                                            {writer?.length > 0 && 
                                            <div className='col-12 info mt-2'>
                                                <span>Writer : </span>
                                                {writer.map((item, index)=> (
                                                    <span key={index}>
                                                        {item.name}
                                                        {writer?.length -1 !==index && ", "}
                                                    </span>
                                                ))}
                                            </div>
                                            }
                                            {data?.created_by?.length > 0 && 
                                            <div className='col-12 info mt-2'>
                                                <span>Created by : </span>
                                                {data?.created_by?.map((item, index)=> (
                                                    <span key={index}>
                                                        {item.name}
                                                        {data?.created_by?.length -1 !==index && ", "}
                                                    </span>
                                                ))}
                                            </div>
                                            }
                                        </div>
                                    </div>
                                    <VideoPopup show={show} setShow={setShow} videoId={videoId} setVideoId={setVideoId}/>
                                </>
                            ) : (
                                <>
                                    <div className="col-md-6 detailPosterIg px-0 loader">
                                        <div className="posterImgWrapper skeleton">
                                        </div>
                                    </div>
                                    <div className="col-md-6 text-white px-0 mt-3 mt-md-0 detailSection loader">
                                        <div className="row px-2 mx-0">
                                            <div className="col-12 title skeleton">
                                            </div>
                                            <div className="col-12 subTitle skeleton">
                                            </div>
                                            <div className="col-12 genres px-0 mb-3">
                                                <div className="row mx-0 genresInner">
                                                    <div className="col-auto ps-0 genre">
                                                        <div className="genreSkeletonText skeleton"></div>
                                                    </div>
                                                    <div className="col-auto ps-0 genre">
                                                        <div className="genreSkeletonText skeleton"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="row align-items-center">
                                                    <div className="col-auto ps-0">
                                                        <div className="rating skeleton">
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <div className="playbtn">
                                                            <span className='skeleton'></span>
                                                            <span className='text skeleton'></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 overview px-0 mt-2">
                                                <div className="heading skeleton"></div>
                                                <div className="overViewText skeleton"></div>
                                                <div className="overViewText skeleton"></div>
                                                <div className="overViewText skeleton"></div>
                                            </div> 
                                            <div className="col-12 px-0 mt-md-2">
                                                <div className="row mx-0">
                                                    <div className="col-auto ps-0 info skeleton"></div>
                                                    <div className="col-auto ps-0 info skeleton"></div>
                                                    <div className="col-auto ps-0 info skeleton"></div>
                                                </div>
                                            </div>
                                            <div className="col-12 px-0 mt-2 mt-md-3">
                                                <div className="row mx-0">
                                                    <div className="col-auto ps-0 info skeleton"></div>
                                                    <div className="col-auto ps-0 info skeleton"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default DetailBanner