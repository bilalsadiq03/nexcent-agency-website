import React from 'react'
import AboutImg from '../assets/icons/banner2.jpeg' 

function About() {
  return (
    <div>
        {/* About Text  */}
        <div className='px-4 lg:px-14 md:flex flex-row max-w-screen-2xl mx-auto my-8' id='about'>
            <div className='md:width-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12 '>
                <img src={AboutImg} alt="" />
            </div>
            <div className='md:w-3/5 mx-auto'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5' >The unseen of spending three years at Pixelgrade</h2>
                <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptates est explicabo, laudantium ad quas placeat temporibus facilis, in aliquam quod officia quasi rem sequi ratione dolorem qui, facere architecto. Rerum, fugit. Iusto optio enim similique! Dignissimos sequi ipsam maxime! Dolorum tempora error fuga quisquam!</p>
                <button className='btn-primary'>Learn More</button>

            </div>
        </div>

        {/* Company stats  */}
        <div className='px-4 lg:px-14 md:flex flex-row max-w-screen-2xl mx-auto py-16 bg-neutralSilver'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-8  '>
            <div className='md:w-3/2 '>
            <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3' >Helping a local <span className='text-brandPrimary'>business reinvent itself</span></h2>
                <p>We reached here with our hardwork and dedication</p>
              
            </div>

            {/* stats  */}
            <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-16'>
              <div className='space-y-8'>
                <div className='flex items-center gap-4'>
                  <img className='logo' src='/src/assets/icons/membership.png' alt="" />
                  <div>
                    <h4 className='text-2xl text-neutralDGrey font-semibold'>2,245,341</h4>
                    <p>Members</p>
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  <img className='logo' src='/src/assets/icons/association.png' alt="" />
                  <div>
                    <h4 className='text-2xl text-neutralDGrey font-semibold'>1,225,300</h4>
                    <p>Clubs</p>
                  </div>
                </div>
              </div>
              
              <div className='space-y-8'>
                <div className='flex items-center gap-4'>
                  <img className='logo' src='/src/assets/icons/membership.png' alt="" />
                  <div>
                    <h4 className='text-2xl text-neutralDGrey font-semibold'>828,341</h4>
                    <p >Bookings</p>
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  <img className='logo' src='/src/assets/icons/membership.png' alt="" />
                  <div>
                    <h4 className='text-2xl text-neutralDGrey font-semibold'>46,780 </h4>
                    <p>Members</p>
                  </div>
                </div>
                
                
                
              </div>
            





            </div>
          </div>
        </div>

    </div>
  )
}

export default About