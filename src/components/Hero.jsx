import React from 'react'
import './Hero.css'
import Header from './Header'
import hero_image from '../assets/hero_image.png'
import hero_image_back from '../assets/hero_image_back.png'
import Heart from '../assets/heart.png'
import Calories from '../assets/calories.png'
import { motion } from 'framer-motion'
import NumberCounter from 'number-counter';

const Hero = () => {

    const transition = {type:'spring',duration:3}

    const mobile = window.innerWidth<=768 ? true : false

  return (
    <div className='hero' id='home'>
        <div className="blur blur-h"></div>
        <div className="left-h">
            <Header />
            {/**best ad  */}
            <div className="the-best-ad">
                <motion.div
                initial={{left:mobile ? "178px" : "238px"}}
                whileInView={{left:'8px'}}
                transition={{...transition,type:'tween'}}
                >

                </motion.div>
                <span>The best fitness club in town</span>
            </div>

        {/**Hero Heading  */}
        <div className="hero-text">
            <div>
                <span className='stroke-text'>Shape </span>
                <span>Your</span>
            </div>

            <div>
                <span>Ideal Body </span>
            </div>

            <div>
                <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </span>
            </div>
        </div>

        {/**Figures */}
        <div className="figures">
            <div>
                <span>
                    <NumberCounter end={140} start={0} delay='4'
                    preFix='+'/>
                </span>
                <span>Expert coaches</span>
            </div>
            <div>
                <span>
                <NumberCounter end={978} start={0} delay='4'
                    preFix='+'/>
                </span>
                <span>Members joined</span>
            </div>
            <div>
                <span>
                <NumberCounter end={50} start={0} delay='4'
                    preFix='+'/>
                </span>
                <span>Fitness programs</span>
            </div>

        </div>
        {/**Buttons */}
        <div className="hero-butttons">
            <button className='btn'>Get started</button>
            <button className='btn'>Learn more</button>

        </div>

        </div>

        {/**Right side */}
        <div className="right-h">
            <button className='btn'>Join now</button>

            <motion.div
            initial={{right:'-1rem'}}
            transition={transition}
            whileInView={{right:'4rem'}}
            className="heart-rate">
                <img src={Heart} alt=""/>
                <span>Heart rate</span>
                <span>116 bpm</span>
            </motion.div>


        {/**hero-images */}
        <img src={hero_image} className="hero-image" alt="hero-image"/>
        <motion.img 
        initial={{right:'11rem'}}
        whileInView={{right:'20rem'}}
        transition={transition}
        src={hero_image_back} className="hero-image-back" alt="hero-image-back"/>

        {/**Calories */}
        <div className="calories">
        <img src={Calories}  alt=""/>
        <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
        </div>
        
        </div>

        </div>
    </div>
  )
}

export default Hero