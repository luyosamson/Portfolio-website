import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b
    from-gray-800 to-black text-white'>
        {/* <div className='max-w-screen-lg p-4 max-auto flex flex-col
        justify-center w-full h-full'> */}
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full'>
            <div pb-8>
                <p className='text-4xl font-bold inline border-b-4
                border-gray-500'>About</p>
            </div>

            <p className='text-xl mt-20'>
               I am a full-stack software developer with a passion for creating robust, accessible, and user-friendly web applications.
                I have experience working with HTML, CSS, JavaScript, React, and  back-end technologies such as Ruby and Ruby on rail ,MySQL and Postgress. I enjoy problem-solving and developing innovative solutions to complex challenges.
                I am self-motivated, organized, and diligent in my work.
                I strive to stay current with the latest technologies and trends in the industry.
                I take pride in creating high-quality products that exceed customer expectations. 
                Yes, I love challenges and strive to be the best at what I do.
            </p>
            <br />
            <p className='text-xl'>
                I believe that good leadership helps to foster an environment of collaboration and team work.
                 I prioritize communication and empowerment when leading projects and strive to create an
                  open and inclusive environment that encourages constructive feedback and creative problem-solving.
                   I appreciate the diversity of perspectives that team work provides,
                    and I enjoy working together with others to achieve a common goal.


            </p>
        </div>

    </div>
  )
}

export default About