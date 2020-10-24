import './Schedule.css'
import Class from '../class'
import React from 'react';
import axios from 'axios';

export default function Schedule(props) {
  const reserveClass = function (classId, userId) {
    const insertClass = axios.post(`http://localhost:3001/`, {
      name: 'bob'
    })
  }
  const listOfClasses = props.classes.map(function(classObj, index) {
    const id = classObj.id
    return (
      <Class
        key={id}
      />
    )
  })
  return (
    <div className="schedule">

    </div>
  )
}
