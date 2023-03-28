import React from 'react'
import HeroImage from '../assets/Portfollio.png'
import {MdKeyboardArrowRight} from 'react-icons/md'
import {Link} from 'react-scroll'
import "./Style.css"

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b 
    from-black via-black  to-gray-800 ' >

        <div className='max-w-screen-lg mx-auto flex flex-col items-center
        justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h4 className='text-2xl sm:text-7xl font-bold text-white  animate-fade-in duration-500 delay-100'>
                    Luyo Samson,A Fullstack Software Developer
                </h4>
                <p className='text-gray-500 py-4 max-w-md'>
            I am a full-stack software developer with experience in front-end web development, back-end server-side development, and database management. I am passionate about developing robust web applications that are intuitive and efficient. My experience includes working with various programming languages like HTML, CSS, JavaScript, Python, and SQL. I am also experienced in frameworks such as Angularand ReactJS.
            I am comfortable with version control systems such as Git.
            I am a fast learner and always open to new technologies and challenges.
                </p>
                <div>
                    <Link to='portfolio' smooth duration={500} className=' group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md
                    bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                        <MdKeyboardArrowRight size={25}
                        className='ml-1' />
                        </span>
                    </Link>
                </div>
            
            </div>

            <div>
                <img src={HeroImage} alt="Hero" className='rounded-full mx-auto w-2/6 md:w-full'/>
            </div>

        </div>
    </div>
  )
}

export default Home
