import React from 'react'
import pageNotFound from './../../assets/img/pageNotFound.gif'
import './style.scss'
const PageNotFound = () => {
  return (
    <div>
      <div className="">
        <img src={pageNotFound} alt="page not found" />
      </div>
    </div>
  )
}

export default PageNotFound
