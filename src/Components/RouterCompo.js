import React from 'react'
import { Link } from 'react-router-dom'

const RouterCompo = () => {
  return (
    <div>
      
      <div className='compo'>
   <Link to="/" className='home'>Home</Link><br/>
        <Link to="/Bollywood" className='bollywood'>Bollywood</Link><br/>
        <Link to="/Technology" className='tech'>Technology</Link><br/>
        <Link to="/Hollywood" className='hollywood'>Hollywood</Link><br/>
        <Link to="/Fitness" className='fit'>Fitness</Link><br/>
        <Link to="/Food" className='food'>Food</Link>
   </div>
   <hr id="hr"/>
    </div>
  )
}

export default RouterCompo

