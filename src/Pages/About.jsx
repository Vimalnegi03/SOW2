import React from 'react'

const About = () => {
  return (
    <>
     <h1 className='text-center text-4xl text-black font-serif mt-12 font-black'>About Us</h1>
   <div className="mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  rounded-lg p-6">
  <div className="flex flex-col lg:flex-row items-center gap-8">
    <div className="w-full lg:w-1/2 aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
     <iframe
  className="w-full"
  style={{ height: '400px' }}  // or any px/rem value you want
  src="https://www.youtube.com/embed/GbYBbgYRTws?si=eYPdSGEidSsC9oyZ"
  title="YouTube video player"
  
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe>
    </div>
    <p className="font-serif text-2xl  text-justify w-full lg:w-1/2 ml-4 ">
     <span className='text-orange-400'> Lend A Hand India,</span> a Pune based NGO working in the field of vocational education in secondary 
      schools for last 10 years in 10 states across India in partnership with Governments of <span className='text-orange-400'>Maharashtra, 
      Gujarat, Andhra Pradesh, Telangana, NCT of Delhi, Odisha, Madhya Pradesh, Haryana, UT Of Diu and Daman. </span> 
      Our goal is to promote multi skill vocational education as part of secondary school curriculum across India.
    </p>
  </div>
</div>

    </>
  )
}

export default About
