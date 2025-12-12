import React from 'react'

function Header () {
  return (
    <div className='Header'>
      <nav className='Menu'>
        <div>
          <ul>
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
