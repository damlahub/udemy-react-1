import './App.css';
import Course from './components/Course';
import { useState } from 'react';

function getRandomCourse(){
  const courseArray=['Angular','Bootstrap', 'CSharp', 'KompleWeb'];
  return courseArray[Math.floor(Math.random()*courseArray.length)];
}

function App() {
  const [courses, setCourses] = useState([]);
  const handleClick= ()=>{
    setCourses([...courses, getRandomCourse()]);
  }
  const courseList= courses.map((course, inddex)=>{
    return <Course key={inddex} courseName={course}/>
   });

  return (
    <div className="App">
      <button className='btn' onClick={handleClick}>Random Kurs Ekle</button>
      <div>{courseList}</div>
    </div>
  );
}

export default App;
