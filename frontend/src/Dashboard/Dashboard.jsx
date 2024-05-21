import React from 'react'
import Topic from '../Topic/Topic'
import c from './cprogramming.png'
import { useNavigate } from 'react-router-dom'
import python from './pythonprogramming.png'
import java from './java.png'
import './Dashboard.css'

function Dashboard() {
 const navigate = useNavigate()

  return (
    <div>
      <Topic/>
      <main>
        <div className='courseimage'>
            <div className='course' onClick={() => navigate('/Level')}>
                <div><img className='cprog' src={c} alt="" /></div>
                <div><h2 className='coursename'>C PROGRMMING</h2></div> 
            </div>

            <div className='course' onClick={() => navigate('/Levelpy')}>
                <div><img className='python' src={python} alt="" /></div>
                <div><h2 className='coursename'>PYTHON PROGRMMING</h2></div>
            </div>

            <div className='course' onClick={() => navigate('/Leveljava')}>
                <div><img className='java' src={java} alt="" /></div>
                <div><h2 className='coursename'>JAVA PROGRMMING</h2></div>
            </div>

        </div>
      </main>
    </div>
  )
}


export default Dashboard