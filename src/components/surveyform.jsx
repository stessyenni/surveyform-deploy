'use client'
import React, { useState } from 'react'

export default function SurveyForm () {
    // const [values, setValues] = useState({
    //     fullname: '',
    //     age: '',
    //     email: '',
    //     education: '',
    //     department: '',
    //     jobtitle: '',
    //     jobtype: '',
    // })

    // const [quest, setQuest] = useState(localStorage.getItem('values') ? JSON.parse(localStorage.getItem('values')) : '')

    const [fullname, setFullname] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [education, setEducation] = useState('')
    const [department, setDepartment] = useState('')
    const [jobtitle, setJobtitle] = useState('')
    const [jobtype, setJobtype] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [success, setSuccess] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    

    // const [message, setMessage] = useState('')

    // const [error, setError] = useState([])

    
    // const handleChanges = (e) => {
    //     setValues({ ...values, [e.target.name]: e.target.value })
  // }
  
//The appreciation displays only after the form has been submitted
  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitted(true);
    setIsSubmitting(true);

    console.log({fullname, age, email, education, department, jobtitle, jobtype})
      
      const res = await fetch('/api/survey', {
          method: 'POST',
          headers: {
              'content-type': 'application/json',
          },
          body: JSON.stringify({fullname, age, email, education, department, jobtitle, jobtype}),
      });

      if (!res.ok) {
          const errData = await res.json();
        console.error('Server error', errData.msg)
        setSubmitted(true)
        setSuccess(false);
          return;
      }
      
      const { msg, success } = await res.json();
      //   setError(msg)
      setSuccess(success)
      console.log('Successful:', msg);

      if (success) {
          setFullname('');
          setAge('');
          setEmail('');
          setEducation('');
          setDepartment('');
          setJobtitle('');
          setJobtype('');
          setIsSubmitting(false)
      }
  }
    

  return (
    <div className='w-full p-5 border-10 border-x-[#3c357c] border-y-[#ea5535] flex flex-col gap-12 cursor-pointer'>
      <h1 className='font-bold text-center text-[24px] text-[#000249] '>New Employee Data Survey Form</h1>
          
              <form onSubmit={handleSubmit}
              className='text-[13.7px] flex flex-col lg:flex-col lg:items-center cursor-pointer lg:p- gap-5 '>
            
            <label htmlFor='fullname' className='lg:text-[17px] lg:font-bold'>
                1. What are your full names?*
            </label>
            <input
                onChange={(e) => setFullname(e.target.value)}
                  required
                value={fullname}
                className='lg:w-[40%] h-11 border rounded-lg px-3'
                        type='text'
                    name='fullname'    
                id='fullname'
                placeholder='e.g John Doe' />
           
            
            <label htmlFor='age' className='font-bold text-[16px] lg:text-[17px]'>
                2. Which is your Age Range?*
            </label>
            <div className='lg:w-[40%] grid grid-cols-2 gap-y-3 md:grid-cols-3'>
                <label>
                      <input
                          type='radio'
                          name='age'
                          id='age'
                          value='20-24'
                        onChange={(e) => setAge(e.target.value)}
                      /> 20-24 years
                </label>
                <label>
                      <input
                          type='radio'
                          name='age'
                          id='age'
                          value='25-29'
                        onChange={(e) => setAge(e.target.value)}
                      /> 25-29 years
                </label>
                <label>
                      <input
                          type='radio'
                          name='age'
                          id='age'
                          value='30-34'
                        onChange={(e) => setAge(e.target.value)}
                      /> 30-34 years
                </label>
                <label>
                      <input
                          type='radio'
                          name='age' id='age'
                          value='35-49'
                        onChange={(e) => setAge(e.target.value)}
                      /> 35-49 years
                </label>
                <label>
                      <input
                          type='radio'
                          name='age'
                          id='age'
                          value='50-60'
                        onChange={(e) => setAge(e.target.value)}
                      /> 50-60 years
                </label>
            </div>
            
            <label htmlFor='email' className='font-bold text-[16px] lg:text-[17px] lg:font-bold'>
                3. Your Email Address*
            </label>
            <input
                onChange={(e) => setEmail(e.target.value)}
                  required
                value={email}
                className='lg:w-[40%] h-11 border rounded-lg px-2'
                        type='email'
                        name='email'
                id='email'
                placeholder='Enter your email' />
            
            
            <label htmlFor='education' className='font-bold text-[16px] lg:text-[17px] lg:font-bold'>
                5. What is your educational level?*
            </label>
              <select name='education' id='education'
                  value={education}
                onChange={(e) => setEducation(e.target.value)}
                  required className='w-[40%] h-10 border-slate-300 shadow-md'>
                <option value=''>
                Select
                </option>
                <option value='Olevel'>
                O/L Certificate
                </option>
                <option value='Alevel'>
                A/L Certificate
                </option>
                <option value='Bachelors'>
                Bachelors Degree
                </option>
                <option value='Masters'>
                Masters Degree
                </option>
                <option value='PostGraduate'>
                Post Graduate
                </option>
            </select>
            
            
            <label htmlFor='department' className='font-bold text-[16px] lg:text-[17px] lg:font-bold'>
                6. What is your Department*
            </label>
            <input
                onChange={(e) => setDepartment(e.target.value)}
                  required
                value={department}
                className='lg:w-[40%] h-11 border rounded-lg px-2'
                        type='text'
                        name='department'
                id='department'
                placeholder='e.g Product Department' />
            
            
            <label htmlFor='JobTitle' className='font-bold text-[16px] lg:text-[17px] lg:font-bold'>
                7. What is your Job Title*
            </label>
              <select name='jobtitle' id='jobtitle'
                  value={jobtitle}
                onChange={(e) => setJobtitle(e.target.value)}
                  required className='w-[40%] h-10 border-slate-300 shadow-md'>
                <option value=''>
                Select
                </option>
                <option value='AppDeveloper'>
                App Developer
                </option>
                <option value='WebDeveloper'>
                Web Developer
                </option>
                <option value='GraphicDesigner'>
                Graphic Designer
                </option>
                <option value='Analyst'>
                Data / Business Analyst
                </option>
                <option value='Manager'>
                Manager
                </option>
                <option value='Secretary'>
                Secretary
                </option>
            </select>
            
            
            <label htmlFor='jobtype' className='font-bold text-[16px] lg:text-[17px] lg:font-bold'>
                8. What is your Job type?*
                    </label>
                    
              <select name='jobtype' id='jobtype'
                  value={jobtype}
                onChange={(e) => setJobtype(e.target.value)}
                  required className='w-[40%] h-10 border-slate-300 shadow-md'>
                        <option value=''>
                            Select
                        </option>
                        <option value='PartTime'>
                            Part-time</option>
                        <option value='Full-time'>Full-time</option>
                        <option value='Contract'>
                            Contract</option>
                        <option value='Internship'>
                            Internship</option>
                    </select>
            
            <div className='lg:w-[60%] flex items-center justify-center lg:items-center'>
            <button type='submit' className={`${isSubmitting ? 'w-[50%] h-[30px] lg:h-13 border border-black bg-[#ea5535] font-bold text-[16px] rounded-2xl text-gray-700' : 'w-[50%] h-[30px] lg:h-13 border border-black bg-[#3c357c] text-white font-bold text-[16px] rounded-2xl'}`}>
                {isSubmitting ? 'Form Submitting...' : 'Submit'}
            </button>
            </div>
      </form>
      {submitted && success &&
        <h2 className={'font-bold text-[16px] text-center text-green-800'}>
          Form Submitted Successfully! Thank You For Your Response!</h2>
      }
      {submitted && !success &&
        <h2 className={'font-bold text-[16px] text-center text-red-500'}>
          Something went wrong! Please try again</h2>
      }
    </div>
  )
}
