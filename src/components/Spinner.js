import React, { } from 'react'
import loading from './Loading.gif'

const Spinner = () => {

  return (
    <div className='text-center'>
      <img src={loading} alt="loading spinner" />
    </div>
  )

}

export default Spinner