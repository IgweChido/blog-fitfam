import React from 'react'
import '../../styles/page2/CommentSec.scss'
import ErrorBoundary from '../ErrorBoundary'
import UserComments from './UserComments'
import UserwriteCom from './UserwriteCom'

function CommentSec() {

  return (
    // {/* border with cancel icon */}
    <div className='csbwicon'>
       


        {/* main comments div */}
        <div className='csmain'>

            <p className='commwords'>Comments</p>
            
            {/* user comments */}
            <div className='csucomments'>
                <ErrorBoundary>
                  <UserComments/>
                </ErrorBoundary>
                
                

            </div>

            {/* user write comments */}
            <div className='csuwritecom'>
                <UserwriteCom/>
            </div>
        </div>
    </div>            
  )
}

export default CommentSec