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
  <div className="overflow-x-auto max-w-7xl mx-auto mt-10 p-4">
    <table className="min-w-full border border-gray-300 rounded-lg shadow-md text-sm">
      <thead className="bg-gray-100 text-gray-700">
        <tr>
          <th className="px-4 py-2 border">Full Name</th>
          <th className="px-4 py-2 border">Age</th>
          <th className="px-4 py-2 border">Email</th>
          <th className="px-4 py-2 border">Education</th>
          <th className="px-4 py-2 border">Department</th>
          <th className="px-4 py-2 border">Job Title</th>
          <th className="px-4 py-2 border">Job Type</th>
        </tr>
      </thead>

      <tbody>
        {dummyData.map((data, index) => (
          <tr
            key={index}
            className="border hover:bg-gray-50 even:bg-gray-50 transition"
          >
            <td className="px-4 py-2 border">{data.fullname}</td>
            <td className="px-4 py-2 border">{data.age}</td>
            <td className="px-4 py-2 border">{data.email}</td>
            <td className="px-4 py-2 border">{data.education}</td>
            <td className="px-4 py-2 border">{data.department}</td>
            <td className="px-4 py-2 border">{data.jobtitle}</td>
            <td className="px-4 py-2 border">{data.jobtype}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
}

export default Survey
