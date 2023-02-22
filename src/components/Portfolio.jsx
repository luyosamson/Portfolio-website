import React from 'react'
import Example from '../assets/portfolio/NewLife.png'
import Example1 from '../assets/portfolio/usestate.jpg'
import Example2 from '../assets/portfolio/usestate1.jpg'
import Example3 from '../assets/portfolio/usestate2.jpg'
import Example4 from '../assets/portfolio/usestate3.jpg'
import Example5 from '../assets/portfolio/usestate4.jpg'
// import { Link } from 'react-router-dom'

function Portfolio() {

  const portfolios=[
    {
      id:1,
      src: Example,
      demo:"https://livelife-hospital.vercel.app/",
      code:"https://github.com/luyosamson/Livelife_Hospital"
    },
    {
      id:2,
      src:Example1,
      demo:"https://livelife-hospital.vercel.app/",
      code:"https://github.com/luyosamson/Livelife_Hospital"
    },
    {
      id:3,
      src:Example2,
      demo:"https://livelife-hospital.vercel.app/",
      code:"https://github.com/luyosamson/Livelife_Hospital"
    },
    {
      id:4,
      src:Example3,
      demo:"https://livelife-hospital.vercel.app/",
      code:"https://github.com/luyosamson/Livelife_Hospital"
    },
    {
      id:5,
      src:Example4,
      demo:"https://livelife-hospital.vercel.app/",
      code:"https://github.com/luyosamson/Livelife_Hospital"
    },
    {
      id:6,
      src:Example5,
      demo:"https://livelife-hospital.vercel.app/",
      code:"https://github.com/luyosamson/Livelife_Hospital"
    }
  ]

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800
    w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline-border-b-4 border-gray-500'>
            Projects
          </p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {portfolios.map(({id,src,demo,code})=>(
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              <img src={src} alt='portfolioimage' className='rounded-md duration-200 hover:scale-105'/>
              <div className='flex items-center justify-center'>
                <a href={demo} target="_blank" rel="noopener noreferrer" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                  Demo
                </a>
                <a href={code} target="_blank" rel="noopener noreferrer" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
