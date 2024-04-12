import './App.css';
import Course from './components/Course';
import { useState } from 'react';

function getRandomCourse(){
  const courseArray=['Angular','Bootstrap', 'CSharp', 'KompleWeb'];
  const randomNumber = courseArray[Math.floor(Math.random()*courseArray.length)];
  return randomNumber;
}

function App() {
  const [courses, setCourses] = useState([]);
  const handleClick= ()=>{
    setCourses([...courses, getRandomCourse()]);
  }
  const courseList= courses.map((course, index)=>{
    return <Course key={index} courseName={course}/>
   });

  return (
    <div className="App">
      <button className='btn' onClick={handleClick}>Random Kurs Ekle</button>
      <div className='courseList'>{courseList}</div>
    </div>
  );
}

export default App;
