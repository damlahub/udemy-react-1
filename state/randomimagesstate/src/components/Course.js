import React from 'react'
import Angular from '../images/angular.jpg'
import Bootstrap from '../images/bootstrap5.png'
import CSharp from '../images/ccsharp.png'
import KompleWeb from '../images/kompleweb.jpg'
const courseMap={
    Angular,
    Bootstrap,
    CSharp,
    KompleWeb
}

const Course = ({courseName}) => {
  return (
    <div>
      <img src={courseMap[courseName]} alt=""/>
    </div>
  )
}

export default Course
