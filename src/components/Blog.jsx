import React from 'react'

function Blog() {
    const blogs = [
        {id: 1, title: "Creating Streamlined Safeguarding Processes with OneRen ", image: "/src/assets/blog1.jpeg"},
        {id: 2, title: "What are your safeguarding responsibilities and how can you manage them? ", image: "/src/assets/blog2.jpeg"},
        {id: 3, title: "Revamping the Membership Model with Triathlon Australia", image: "/src/assets/blog3.jpeg"}
    ]
  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12' id='faq'>
        <div className='text-center md:w-1/2 mx-auto'>
        <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 ' >Caring in new marketing</h2>
        <p className='md:w-3/4 text-sm text-neutralGrey mb-8 mx-auto '>The Nexcent Blog is Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis odit aliquid, officiis earum iste harum magni, eius dolorum blanditiis quo sed veniam. Eveniet, labore recusandae? </p>
        </div>

        {/* all blogs  */}
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>

            {
                blogs.map((blog, i) => <div key={blog.id} className='mx-auto relative mb-12 cursor-pointer '>
                    <img src={blog.image} alt=""  className='h-80 rounded-md hover:scale-95 transition-all duration-300'/>
                    <div className='text-center px-4 py-8 bg-white shadow-lg rounded md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12'>
                        <h3 className='text-neutralDGrey'>{blog.title}</h3>
                        <button className='btn-primary mt-4'>Read More</button>
                    </div>
                </div>)
            }
        </div>
    
    </div>
  )
}

export default Blog