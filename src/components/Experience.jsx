import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import github from '../assets/github.png'
import javascript from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'
import reactImage from '../assets/react.png'
import ruby from '../assets/ruby.jpeg'
import rails from '../assets/Rails.png'
import git from '../assets/git.png'
import postgress from '../assets/postgress.png'

function Experience() {

const techno=[

{
 id:1,
 src:html,
 title:"HTML",
 style:'shadow-orange-500'
},
{
 id:2,
 src:css,
 title:"CSS",
 style:'shadow-blue-500'
},
{
 id:3,
 src:javascript,
 title:"JavaScript",
 style:'shadow-yellow-500'
},

{
 id:4,
 src:reactImage,
 title:"React",
 style:'shadow-blue-600'
},
{
 id:5,
 src:tailwind,
 title:"Tailwind",
 style:'shadow-sky-500'
},
{
 id:6,
 src:github,
 title:"Github",
 style:'shadow-gray-400'
},
{
 id:7,
 src:ruby,
 title:"Ruby",
 style:'shadow-red-500'
},
{
 id:8,
 src:rails,
 title:"Ruby on Rails",
 style:'shadow-red-500'
},
{
 id:9,
 src:postgress,
 title:"Postgress",
 style:'shadow-blue-500'
},

{
 id:10,
 src:git,
 title:"Git",
 style:'shadow-gray-500'
},

]



  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black
    w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center
        w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500
                p-2 inline'>
                    Experience
                </p>
                <p className='py-6'>I'm comfortable working with the following <br/>
                Languages and  Frameworke</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 
            px-12 sm:px-0'>

                    {
                        techno.map(({id,src,style,title})=>(

                             <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg
                             ${style}`}>
                    <img src={src} alt='experienceImage'  className='w-20 mx-auto'/>
                    <p className='mt-4'>{title}</p>
                </div>



                        ))

                    }


               

            </div>

        </div>

    </div>
  )
}

export default Experience