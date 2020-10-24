import './Schedule.css'
import Class from '../class'
import React from 'react';

export default function Schedule(props) {
  const listOfClasses = props.classes.map(function(classObj, index) {
    return (
      <Class
        key={index}
      />
    )
  })
  return (
    <div className="schedule">

    </div>
  )
}
