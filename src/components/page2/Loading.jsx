import React from 'react'

import '../../styles/Loading.scss'

function Loading(props) {
  return (
      <div className='loading-div'>
          <div className='loading'>
             <img src={props.image} alt='loading'></img>
        </div>
      </div>
    
  )
}

export default Loading

