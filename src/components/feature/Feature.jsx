import React from 'react'
import './feature.css';

const Feature = ( {title, text} ) => {
  return (
    <div className="skillup-features-container__feature">
      <div className="skillup__features-container-title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="skillup__features-container_feature-text">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature
