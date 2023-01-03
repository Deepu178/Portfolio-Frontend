import React from 'react'
import {BsTwitter, BsGithub, BsLinkedin} from 'react-icons/bs'

export default function SocialMedia() {
  return (
    <div className='app__social'>
        <div>
          <a href='https://www.twitter.com/deepuReact' > <BsTwitter/>
          </a>
        </div>
        <div>
         <a href='https://www.github.com/deepu178'>   <BsGithub  /> </a>
        </div>
        <div>
           <a href='https://www.linkedin.com/in/deependra-kumar-760563166/'> <BsLinkedin /> </a> 
        </div>
        </div>
  )
}
