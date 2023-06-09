import React from 'react';
import { Helmet } from 'react-helmet';
import './style.scss';
import HeroBanner from './heroBanner/HeroBanner';
import Trending from './trending/Trending';
import Popular from './popular/Popular';
import TopRated from './topRated/TopRated';
import ogImg from './../../assets/img/android-chrome-256x256.png';
import Ads from '../../components/ads/Ads';
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

        <meta property="og:url" content="https://moviewalas.com/" />
        <meta property="og:title" content={`Latest Movies, Ratings, Trailers & TV Shows | ${websiteName}`} />
        <meta property="og:description" content={`Find the latest movies, ratings, trailers, and TV shows on ${websiteName}. Get all the details about your favorite films and shows, including cast, category, and reviews. Stay updated with the latest news and trends in the entertainment industry.`} />
        <meta property="og:image" content={ogImg} />
        <meta property="og:image:secure_url" content={ogImg} />

        <meta name="twitter:card" content={`Find the latest movies, ratings, trailers, and TV shows on ${websiteName}. Get all the details about your favorite films and shows, including cast, category, and reviews. Stay updated with the latest news and trends in the entertainment industry.`} />
        <meta name="twitter:title" content={`Latest Movies, Ratings, Trailers & TV Shows | ${websiteName}`} />
        <meta name="twitter:description" content={`Find the latest movies, ratings, trailers, and TV shows on ${websiteName}. Get all the details about your favorite films and shows, including cast, category, and reviews. Stay updated with the latest news and trends in the entertainment industry.`} />
        <meta name="twitter:image" content={ogImg} />
      </Helmet>
      <HeroBanner/>
      {/* <div className="container-fluid">
        <div className="container overflow-hidden bg-white rounded">
          <Ads slot={9581863358}/>
        </div>
      </div> */}
      <Trending/>
      <Popular/>
      <TopRated/>
      {/* <div className="container-fluid">
        <div className="container overflow-hidden bg-white rounded">
          <Ads slot={9581863358}/>
        </div>
      </div> */}
    </>
  )
}

export default Home;
