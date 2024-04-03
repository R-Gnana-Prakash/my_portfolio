'use client'
import './page.scss'
import ThreeJsComponent from '@/components/ThreeJsComponent'
import { useEffect, useState } from 'react'
import BallAnimation from '@/components/BallAnimation'
import LandingPage from '@/Sections/LandingPage/LandingPage'
import Experience from '@/Sections/experience/Experience'
import MyWorks from '@/Sections/myWorks/MyWorks'

export default function Home() {
     return (
          <div className='wrapper'>
               <BallAnimation />
               <div className='skyBackground'></div>
               <div className='container' id='sectionWrapper'>
                    <LandingPage />
                    <Experience />
                    <MyWorks />
               </div>
          </div>
     )
}
