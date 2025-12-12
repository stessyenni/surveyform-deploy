import React from 'react'

function Header () {
  return (
    <div className='Header'>
      <nav className='Menu'>
        <div>
          <ul className='flex flex-row gap-10 items-center justify-center'>
            <li>
              <link href='/'> Survey Form
              </link>
            </li>
            <li>
              <link href='/view'> Survey
              </link>
            </li>
          </ul>
        </div>
      </nav>
      <hr />
    </div>
  )
}

export default Header
