import React from 'react'

const Survey = () => {

const dummyData = [
  {
    fullname: "John Doe",
    age: 28,
    email: "johndoe@example.com",
    education: "Bachelor's Degree",
    department: "Marketing",
    jobtitle: "Marketing Analyst",
    jobtype: "Full-Time",
  },
  {
    fullname: "Sarah Kim",
    age: 34,
    email: "sarah.kim@example.com",
    education: "Master's Degree",
    department: "Human Resources",
    jobtitle: "HR Manager",
    jobtype: "Part-Time",
  },
  {
    fullname: "Michael Smith",
    age: 41,
    email: "michael.smith@example.com",
    education: "PhD",
    department: "Research & Development",
    jobtitle: "Lead Researcher",
    jobtype: "Contract",
  },
];

return (
  <div>
    <table>
      <thead>
        <td>Full Name</td>
        <td>Age</td>
        <td>Email</td>
        <td>Education</td>
        <td>Department</td>
        <td>Jobtitle</td>
        <td>Jobtype</td>
      </thead>
      <tbody>
        {dummyData.map((data, index) => (
          <tr key={index}>
            <td>{data.fullname}</td>
            <td>{data.age}</td>
            <td>{data.email}</td>
            <td>{data.education}</td>
            <td>{data.department}</td>
            <td>{data.jobtitle}</td>
            <td>{data.jobtype}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
}

export default Survey
