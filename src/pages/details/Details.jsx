import React from 'react'
import './style.scss'
import { useParams } from 'react-router-dom'
import useFetch from './../../hooks/useFetch'
import DetailBanner from './detailBanner/DetailBanner'
import Cast from './cast/Cast'
import Videos from './videos/Videos'
import Simillar from './carousels/Simillar'
import Recommended from './carousels/Reccommend'
const Details = () => {

  const {mediaType, id} = useParams();
  const {data, loading} = useFetch(`/${mediaType}/${id}/videos`)
  const {data: credits, loading: creditLoading} = useFetch(`/${mediaType}/${id}/credits`)



  return (
    <>
      <DetailBanner video={data?.results?.[0]} crew={credits?.crew}/>
      <Cast data={credits} loading={creditLoading}/>
      <Videos data={data} loading={loading}/>
      <Simillar mediaType={mediaType} id={id}/>
      <Recommended mediaType={mediaType} id={id}/>
    </>
  )
}

export default Details;
