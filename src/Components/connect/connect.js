import React from 'react'
import './connect.css'
import NavbarN from '../Nav/navBar'
function Connect() {
  return (
      <div>
            <NavbarN/>
        <div className='heading'>
                               <h2>Follow Request</h2>
                               <h2>Manage</h2>
                            </div>
                            <div>
                                <div className='containner'>
                                    <div className='intro'>
                                        <div><img src='https://media.istockphoto.com/id/1027339010/photo/girl-playing-with-paper-airplane-stock-image.jpg?s=612x612&w=0&k=20&c=0v74npB36mdInjHtOXMoc3WicDw4EEZw1nBB9NcpqNI=' alt=''></img></div>
                                        <div><h4>Prajakta Tipugade</h4></div>
                                    </div>
                                    <div className='dicision'>
                                        <button style={{backgroundColor:'blue' }}>Accept</button>
                                        <button style={{backgroundColor:'red'}}>Reject</button>
                                    </div>
                                </div>
                            </div>
    </div>
  )
}

export default Connect