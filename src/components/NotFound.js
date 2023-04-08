import React from 'react'
import notFound from '../assets/images/404.png'

const NotFound = () => {
  return (
    <div className="not-found fadeIn">
    <img src={notFound} alt="Not found" />
    <p>Oops! Invalid location :/</p>
  </div>
  )
}

export default NotFound