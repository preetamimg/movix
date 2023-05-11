import React from 'react';
import { Helmet } from 'react-helmet';


const AboutUs = ({websiteName}) => {
  return (
    <>
    <Helmet>
      <title>About {`${websiteName}`} Learn More About Our Movie News and Reviews Site</title>
      <meta name="title" content={`About ${websiteName} Learn More About Our Movie News and Reviews Site`} />
      <meta name="description" content={`Learn more about ${websiteName}, the ultimate source for the latest movie news, ratings, and reviews. Discover our mission, team, and values.`} />
      <meta name="keywords" content="about us, movie news, movie reviews, our mission, our team, our values" />
      <meta name="robots" content="index, follow"></meta>
      <link rel="canonical" href="https://moviewalas.com/about-us"/>
    </Helmet>
    <div className="container pt-4">
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-12 text-white h6 text-center pb-4">About Us</div>
          </div>
          <ul className='row gap-4 text-white small list-unstyled'>
            <li className='col-12 small'>Welcome to {websiteName}, your ultimate source for the latest movie news, ratings, and reviews. Our goal is to provide you with the most accurate and up-to-date information about the latest movies, TV shows, and trailers.</li>
            <li className='col-12 small'>At {websiteName}, we are passionate about the world of movies and TV shows. Our team of movie experts and enthusiasts works hard to provide you with engaging and informative content, including movie reviews, ratings, cast and crew information, trailers, and more.</li>
            <li className='col-12 small'>We understand that movie enthusiasts are always looking for the latest news and updates about their favorite actors, directors, and upcoming movies. That's why we created {websiteName} - to provide you with a comprehensive and easy-to-use platform where you can find all the information you need in one place.</li>
            <li className='col-12 small'>Please note that we use API data from TMDB website to provide our users with the latest and most accurate information about movies, TV shows, and actors. We do not host any copyrighted content on our website.</li>
            <li className='col-12 small'>At {websiteName}, we believe in the power of information to inspire and entertain people. That's why we work hard to ensure that our website is always up-to-date and accurate, so that you can trust the information you find here.</li>
            <li className='col-12 small'>Whether you're a hardcore movie fan or just looking for the latest news and reviews, we've got you covered. So sit back, relax, and browse through our website to discover the latest and greatest in the world of movies and TV shows.</li>
            <li className='col-12 small'>Thank you for choosing {websiteName} as your go-to source for movie news and entertainment. If you have any questions or comments, please don't hesitate to contact us. We'd love to hear from you!</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default AboutUs
