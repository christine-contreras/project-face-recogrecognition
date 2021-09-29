import React from 'react'

const Navigation = ({ onRouteChange }) => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <p
        className='f4 link dim black underline pa3 pointer'
        onClick={() => onRouteChange('sign-in')}>
        Sign Out
      </p>
    </nav>
  )
}

export default Navigation
