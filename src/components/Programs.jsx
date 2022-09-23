import React from 'react'
import './Programs.css'
import {programsData} from '../data/programsData'
import RightArrow from '../assets/rightArrow.png'

const Programs = () => {
  return (
    <div className='programs' id="programs">
        {/**header */}
        <div className="programs-header">
            <span className='stroke-text'>Explore our </span>
            <span>programs</span>
            <span className='stroke-text'>to shape you</span>
        </div>


        <div className="program-categories">
            {
                programsData.map((p)=>(
                    <div className="category" key={p.heading}>
                        {p.image}
                        <span>{p.heading}</span>
                        <span>{p.details}</span>
                        <div className="join-now">
                            <span>Join now</span>
                            <img src={RightArrow} />
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Programs