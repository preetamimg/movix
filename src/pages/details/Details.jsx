import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import './style.scss'
import { useParams } from 'react-router-dom'
// import useFetch from './../../hooks/useFetch'
import DetailBanner from './detailBanner/DetailBanner'
import Cast from './cast/Cast'
import Videos from './videos/Videos'
import Simillar from './carousels/Simillar'
import Recommended from './carousels/Reccommend'
import {FetchDataFromApi} from './../../utils/api'
import PersonBanner from './personBanner/PersonBanner'
import RelatedMovie from './carousels/RelatedMovie'
import Reviews from './detailBanner/Reviews';
import Ads from '../../components/ads/Ads';
const Details = ({websiteName}) => {

  const {mediaType, id} = useParams();
  const [data,  setData] = useState('')
  const [loading,  setLoading] = useState(false)
  const [credits,  setCredits] = useState('')
  const [creditLoading,  setCreditLoading] = useState(false)
  const [person,  setPerson] = useState('')
  const [personLoading,  setPersonLoading] = useState(false)
  // console.log(mediaType)

  
  // const {data, loading} = useFetch(`/${mediaType}/${id}/videos`)
  // const {data: credits, loading: creditLoading} = useFetch(`/${mediaType}/${id}/credits`)

  // console.log(person)

  const fetchmovieVideo = ()=> {
    setLoading(true)
    FetchDataFromApi(`/${mediaType}/${id}/videos`).then((res)=> {
    setData(res)
    setLoading(false)
    })
  }
  const fetchCastData = () => {
    setCreditLoading(true)
    FetchDataFromApi(`/${mediaType}/${id}/credits`).then((res)=> {
      setCredits(res)
    setCreditLoading(false)
    })
  }
  const fetchpersonData = () => {
    setPersonLoading(true)
    FetchDataFromApi(`/${mediaType}/${id}`).then((res)=> {
      setPerson(res)
    setPersonLoading(false)
    })
  }
  

  useEffect(()=> {
    if(mediaType !== 'person') {
      fetchmovieVideo()
      fetchCastData()
    } else {
      fetchpersonData()
    }
  }, [id])

  return (
    <>
    {(mediaType === 'person') ? (
      <>
      <Helmet>
        <title>{`${person?.name}`} - Movies and TV Shows featuring {`${person?.name}`} - {`${websiteName}`}</title>
        <meta name="title" content={`${person?.name} - Movies and TV Shows featuring ${person?.name} - ${websiteName}`} />
        <meta name="description" content={`Explore the movies and TV shows featuring ${person?.name} on ${websiteName}. Learn more about ${person?.name} and their work in the film and television industry.`} />
        <meta name="keywords" content={` ${person?.name}, movies, TV shows, film industry, television industry,${websiteName}`} />
        <meta name="robots" content="index, follow"></meta>
      <link rel="canonical" href={`https://moviewalas.com/person/${person?.id}`}/>
      </Helmet>
      <PersonBanner data={person} loading={personLoading}/>
      <RelatedMovie mediaType={mediaType} id={id}/>
      <div className="container-fluid">
        <div className="container overflow-hidden bg-white rounded">
          <Ads slot={9581863358}/>
        </div>
      </div>
      </>
    ) : (
      <>
      {(mediaType === 'movie') ? (
        
      <Helmet>
      <title>Latest Movie Ratings and Reviews - {`${websiteName}`}</title>
      <meta name="title" content={`Latest Movie Ratings and Reviews - ${websiteName}`} />
      <meta name="description" content={`Get the latest movie ratings and reviews at ${websiteName}. Find out what other movie-goers think about the latest releases and discover new movies to add to your watchlist.`} />
      <meta name="keywords" content={`movie ratings, movie reviews, latest movies, watchlist,${websiteName} `} />
      <meta name="robots" content="index, follow"></meta>
      <link rel="canonical" href={`https://moviewalas.com/movie/${data?.id}`}/>
    </Helmet>
      ) : (
        
      <Helmet>
      <title>Latest TV Show Ratings and Reviews - {`${websiteName}`}</title>
      <meta name="title" content={`Latest TV Show Ratings and Reviews - ${websiteName}`} />
      <meta name="description" content={`Keep up with the latest TV show ratings and reviews at ${websiteName}. Find out what other viewers think about the latest episodes and discover new shows to add to your queue.`} />
      <meta name="keywords" content={`TV show ratings, TV show reviews, latest episodes, queue, ${websiteName} `} />
      <meta name="robots" content="index, follow"></meta>
      <link rel="canonical" href={`https://moviewalas.com/tv/${data?.id}`}/>
    </Helmet>
      )}
      <DetailBanner video={data?.results?.[0]} crew={credits?.crew}/>
      <Cast data={credits} loading={creditLoading}/>
      <Videos data={data} loading={loading}/>
      <Simillar mediaType={mediaType} id={id}/>
      <Recommended mediaType={mediaType} id={id}/>
      <div className="container-fluid">
        <div className="container overflow-hidden bg-white rounded">
          <Ads slot={9581863358}/>
        </div>
      </div>
      <Reviews mediaType={mediaType} id={id}/>
      </>
    ) }
    </>
  )
}

export default Details;
