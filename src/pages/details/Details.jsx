import React, { useEffect, useState } from 'react'
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
const Details = () => {

  const {mediaType, id} = useParams();
  const [data,  setData] = useState('')
  const [loading,  setLoading] = useState(false)
  const [credits,  setCredits] = useState('')
  const [creditLoading,  setCreditLoading] = useState(false)
  const [person,  setPerson] = useState('')
  const [personLoading,  setPersonLoading] = useState(false)
  const [personMovie, setPersonMovie] = useState('')
  const [movieLoading, setMovieLoading] = useState(false)
  console.log(mediaType)

  
  // const {data, loading} = useFetch(`/${mediaType}/${id}/videos`)
  // const {data: credits, loading: creditLoading} = useFetch(`/${mediaType}/${id}/credits`)

  console.log(person)

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
  const fetchpersonMovieData = () => {
    setMovieLoading(true)
    FetchDataFromApi(`/${mediaType}/${id}/videos`).then((res)=> {
      setPersonMovie(res)
      setMovieLoading(false)
    })
  }
  console.log(personMovie)

  useEffect(()=> {
    if(mediaType !== 'person') {
      fetchmovieVideo()
      fetchCastData()
    } else {
      fetchpersonData()
      fetchpersonMovieData()
    }
  }, [id])

  console.log(mediaType)
  return (
    <>
    {(mediaType === 'person') ? (
      <>
        <PersonBanner data={person} loading={personLoading}/>
      </>
    ) : (
      <>
      <DetailBanner video={data?.results?.[0]} crew={credits?.crew}/>
      <Cast data={credits} loading={creditLoading}/>
      <Videos data={data} loading={loading}/>
      <Simillar mediaType={mediaType} id={id}/>
      <Recommended mediaType={mediaType} id={id}/>
      </>
    )}
    </>
  )
}

export default Details;
