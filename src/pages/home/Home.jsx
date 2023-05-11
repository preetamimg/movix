import React from 'react';
import { Helmet } from 'react-helmet';
import './style.scss';
import HeroBanner from './heroBanner/HeroBanner';
import Trending from './trending/Trending';
import Popular from './popular/Popular';
import TopRated from './topRated/TopRated';
const Home = ({websiteName}) => {
  return (
    <>
      <Helmet>
        <title>Latest Movies, Ratings, Trailers & TV Shows | {`${websiteName}`}</title>
        <meta name="title" content={`Latest Movies, Ratings, Trailers & TV Shows | ${websiteName}`} />
        <meta name="description" content={`Find the latest movies, ratings, trailers, and TV shows on ${websiteName}. Get all the details about your favorite films and shows, including cast, category, and reviews. Stay updated with the latest news and trends in the entertainment industry.`} />
        <meta name="keywords" content="movie news, movie ratings, movie reviews, latest movies, TV shows, trailers, cast, categories" />
        <meta name="robots" content="index, follow"></meta>
        <link rel="canonical" href="https://moviewalas.com/"/>
      </Helmet>
      <HeroBanner/>
      <Trending/>
      <Popular/>
      <TopRated/>
    </>
  )
}

export default Home;
