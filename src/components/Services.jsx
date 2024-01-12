import React from 'react'
import logo1 from '../assets/icons/company1.png'
import logo2 from '../assets/icons/company2.png'
import logo3 from '../assets/icons/company3.png'
import logo4 from '../assets/icons/company4.png'
import logo5 from '../assets/icons/company5.png'
import logo6 from '../assets/icons/company6.png'


function Services() {
    const services = [
        {id:1, title: "Membership Organistions", desc:"Our memebership management software provides full automation of membership renewals amd payments", image: '/src/assets/icons/membership.png' },
        {id:2, title: "National Associations", desc:"Our memebership management software provides full automation of membership renewals amd payments", image: '/src/assets/icons/association.png'},
        {id:3, title: "Clubs and Groups", desc:"Our memebership management software provides full automation of membership renewals amd payments", image: '/src/assets/icons/group-club.png'},
        
    ]
  return (
    <div className='md:px-14 px-4 py-14 max-w-screen-2xl mx-auto' id='service'>
      <div className='text-center my-8'>
        <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Our Clients</h2>
        <p className='text-neutralDGrey'>We have been working with fortune 500+ clients </p>
        
        {/* company logo */}
        <div className='my-12 flex flex-wrap justify-between items-center gap-8'>
            <img src={logo1} alt="" className='logo' />
            <img src={logo2} alt="" className='logo' />
            <img src={logo3} alt="" className='logo' />
            <img src={logo4} alt="" className='logo' />
            <img src={logo5} alt="" className='logo' />
            <img src={logo6} alt="" className='logo' />
        </div>

        {/* Service card  */}
        <div className='mt-20 md:w-1/2 mx-auto text-center '>
            <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Manage your entire community in a single system</h2>
            <p className='text-neutralDGrey'>Who is Nextcent siutable for?</p>

        </div>

        {/* cards  */}
        <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/2 mx-auto gap-12'>
            {
                services.map(service => <div key={service.id} className='px-4 py-8 text-center md:w-[300px]  mx-auto md:h-80 rounded-md shadow cursor-pointer hover:translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full'>
                    <div>
                        <div className='bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl'><img src={service.image} className='h-8 -ml-5' alt="" /></div>
                        <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2'>{service.title}</h4>
                        <p className='text-sm text-neutralGrey'>{service.desc}</p>
                    </div>
                </div>)
            }
        </div>


      </div>
    </div>
  )
}

export default Services