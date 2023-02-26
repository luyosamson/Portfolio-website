import React from 'react'
import Example from '../assets/portfolio/NewLife.png'
import Example1 from '../assets/portfolio/MakaoHomes.png'
import Example2 from '../assets/portfolio/usestate1.jpg'
import Example3 from '../assets/portfolio/usestate2.jpg'
import Example4 from '../assets/portfolio/usestate3.jpg'
import Example5 from '../assets/portfolio/usestate4.jpg'


function Portfolio() {

  const portfolios=[
    {
      id:1,
      src: Example,
      name:"New Life Hospital",
      demo:"https://livelife-hospital.vercel.app/",
      code:"https://github.com/luyosamson/Livelife_Hospital"
    },
    {
      id:2,
      src:Example1,
      name:"Makao Homes",
      demo:"https://makao-homes.vercel.app/",
      code:"https://github.com/luyosamson/MakaoHomes"
    },
    {
      id:3,
      src:Example2,
      name:"Project 3",
      demo:"https://example.com/demo3",
      code:"https://github.com/example/project3"
    },
    {
      id:4,
      src:Example3,
      name:"Project 4",
      demo:"https://example.com/demo4",
      code:"https://github.com/example/project4"
    },
    {
      id:5,
      src:Example4,
      name:"Project 5",
      demo:"https://example.com/demo5",
      code:"https://github.com/example/project5"
    },
    {
      id:6,
      src:Example5,
      name:"Project 6",
      demo:"https://example.com/demo6",
      code:"https://github.com/example/project6"
    }
  ]

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline-border-b-4 border-gray-500'>
            Projects
          </p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {portfolios.map(({id,src,name,demo,code})=>(
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              <p className='text-center font-bold py-4'>{name}</p>
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
