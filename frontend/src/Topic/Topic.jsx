import React from 'react'
import './Topic.css'
import logo from './logo.jpg'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Topic() {
  const navigate = useNavigate()
  return (
    <div>
      <header>
      <div className="head">
        <div className='tit'>
          <div><img src={logo} className='topicimg' alt="" /></div>
          <div><h1 className='top'>TestPortal</h1></div>
        </div>
     
      <div ><input className="search" type="text" placeholder='Search'/></div> </div>
      </header>

      <aside>
        <div className="content">
        <p className='list'  onClick={() => navigate('/Dashboard')}>DASHBOARD</p>
        <p className='list'>ONGOING COURSE</p>
        <p className='list'  onClick={() => navigate('/')}>LOG OUT</p> 
        </div>
      </aside>
      <main>

      </main>
    </div>
  )
}


export default Topic