import React from 'react'

const Course = ({ title, description, image }) => {
  return (
    <div className='card'>
      <img src={image} alt='' />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export default Course;
