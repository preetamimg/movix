import React, { useEffect, useState } from 'react'
import './style.scss'
import useFetch from '../../../hooks/useFetch'
import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux'
import Img from './../../../components/lazyLoadImage/Img'
import imdbLogo from './../../../assets/img/imdbLogo.png'


const HeroBanner = () => {
  const [bannerInfo, setBannerInfo] = useState('')
  const {data, loading} = useFetch('/movie/upcoming')
  const {url} = useSelector((state)=> state.home)
  const navigate = useNavigate();
  useEffect(()=> {
    const BannerData = data?.results?.[Math.floor(Math.random() * 20)]
    setBannerInfo(BannerData)
    console.log(bannerInfo)

  }, [data])
  return (
    <>
    {!loading ? (
    <div className="heroSection container-fluid mb-3">
      <div className="container heroSectionInner heroSectionBefore position-relative px-0">
        {/* <Img className='heroImg w-100' src={url?.backdrop + bannerInfo?.backdrop_path} alt={'hero section image'}/> */}
        <Img className='heroImg w-100'
            src={url?.backdrop + bannerInfo?.backdrop_path}
            srcSet={`${url?.mobileBackdrop + bannerInfo?.backdrop_path} 768w, ${url?.backdrop + bannerInfo?.backdrop_path} 1280w`}
            sizes="(min-width: 1280px) 100vw, 100vw"
            alt={'hero banner image'}
          />
        <div className="row heroDetailBox position-absolute w-100 mx-0">
          <div className="col-lg-6 col-md-8 col-10 movieTitle">{bannerInfo?.title}</div>
          <div className="col-12 mt-sm-3 mt-2 mt-lg-4">
            <div className="row mx-0">
              <div className="col-auto imdbRating ps-0">
                <div className="d-flex align-items-center">
                  <img src={imdbLogo} alt="imdb logo" width={'36'} height={'18'} className='me-2' />
                  {bannerInfo?.vote_average}
                </div>
                </div>
              <div className="col-auto releaseDate">{bannerInfo?.release_date}</div>
              <div className="col-12 px-0 mt-3 mt-lg-4">
                <button className="btn watchBtn" 
                onClick={()=> navigate(`/movie/${bannerInfo?.id}`)}
                >Watch Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>) :
    (
    <div className="heroSection container-fluid">
      <div className="container heroSectionInner position-relative px-0 skeleton"></div>
    </div>
    )}
    </>
  )
}

export default HeroBanner
