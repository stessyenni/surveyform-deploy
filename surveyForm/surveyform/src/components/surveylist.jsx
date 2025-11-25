'use client'
import React, {useEffect, useState} from 'react'

function Surveylist({fullname, age, email, education, department, jobtitle, jobtype}) {

  useEffect(() => {
    let state = location.state
    setLocationState(state)
  }, [location.state])
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Names</th>
            <th>Age</th>
            <th>Email</th>
            <th>Education</th>
            <th>Department</th>
            <th>Job Title</th>
            <th>Job Type</th>
          </tr>
        </thead>
        {/* table mapping to display form data */}
        <tbody>
          {state && (
           <tr>
             <td>{state.fullname}</td>
             <td>{state.age}</td>
             <td>{state.email}</td>
             <td>{state.education}</td>
             <td>{state.department}</td>
             <td>{state.jobtitle}</td>
             <td>{state.jobtype}</td>
           </tr>
           )}
        </tbody>
      </table>
    </div>
  )
}

export default Surveylist
