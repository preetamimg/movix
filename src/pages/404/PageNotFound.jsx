import React from 'react'
import { Helmet } from 'react-helmet';
import pageNotFound from './../../assets/img/pageNotFound.gif'
import './style.scss'
const PageNotFound = () => {
  return (
    <div>
    <Helmet>
      <meta name="robots" content="noindex, nofollow"></meta>
    </Helmet>
      <div className="">
        <img src={pageNotFound} alt="page not found" />
      </div>
    </div>
  )
}

export default PageNotFound
