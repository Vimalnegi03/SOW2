import React from 'react'

const FullStories = () => {
    const cardsData = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg",
    name: "Student Name",
    description:
      "Empowering rural youth with industry-relevant skills and hands-on training.",
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg",
    name: "Student Name",
    description:
      "Building leadership for impactful local change through youth participation.",
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg",
    name: "Student Name",
    description:
      "Integrating vocational training into education for sustainable futures.",
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/414518/pexels-photo-414518.jpeg",
    name: "Student Name",
    description:
      "Supporting women through skill development and community initiatives.",
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    name: "Student Name",
    description:
      "Engaging youth through programs that encourage growth and learning.",
  },
  {
    id: 6,
    image: "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg",
    name: "Student Name",
    description:
      "Improving local infrastructure to support education and training programs.",
  },
];

  return (
    <>
    <div
  className="relative w-full h-[30vh] flex items-center  mt-18"
  style={{
    backgroundImage: 'url("https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
    <div className=' border-orange-500 ml-4 pr-2 bg-yellow-400 h-[60px] mt-40 rounded-2xl hover:bg-amber-50 hover:text-yellow-400'>
  <h1 className="font-serif text-2xl  drop-shadow font-semibold ml-4 text-white text-center mt-4 hover:text-yellow-400">
    Stories of Change -:
  </h1>
  </div>
</div>
  <div className='border-1 border-b-yellow-400 mt-4 h-[80px] ml-6 border-white'>
    <span className='bg-amber-600 '>
  <h1 className='font-serif text-4xl justify-center  mt-10 pl-4 bg-yellow-400 w-[300px] text-white  '>Impacting Lives-:</h1>
  </span>
  </div>
     <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {cardsData.map(({ id, image, name, description }) => (
          <div key={id} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col font-serif">
            <img
              src={image}
              alt={name}
              className="h-48 w-full object-cover"
              loading="lazy"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-semibold mb-2 font-serif text-orange-600">{name}</h2>
              <p className="text-gray-700 flex-grow">{description}</p>
              <button className="mt-4 self-start btn btn-sm btn-warning font-semibold rounded-full">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
     <div className='border-1 border-b-yellow-400 mt-4 h-[80px] ml-6 border-white'>
    <span className='bg-amber-600 '>
  <h1 className='font-serif text-4xl justify-center  mt-10 pl-4 bg-yellow-400 w-[330px] text-white  '>Featured Videos-:</h1>
  </span>
  </div>
<div className="max-w-7xl mx-auto px-4 sm:px-8 py-6">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <div className="aspect-video">
      <iframe
        src="https://www.youtube.com/embed/oBIUeDP9Oo0?si=ha7eprSdSavRvkZF"
        title="YouTube video player 1"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-full"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>

    <div className="aspect-video">
      <iframe
        src="https://www.youtube.com/embed/n9XQQ4ZpAqA?si=0nhfk6qwte0dcZ08"
        title="YouTube video player 2"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-full"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>

    <div className="aspect-video">
      <iframe
        src="https://www.youtube.com/embed/LlHd91enrto?si=dZUNlGW7iDQv48J5"
        title="YouTube video player 3"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-full"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>

    <div className="aspect-video">
      <iframe
        src="https://www.youtube.com/embed/bIym870rG1E?si=kDuHEkuyXrwjfDYg"
        title="YouTube video player 4"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-full"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>

    <div className="aspect-video">
      <iframe
        src="https://www.youtube.com/embed/OPL6w_kU5fY?si=XdiyYPlWSoztaY29"
        title="YouTube video player 5"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-full"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>

    <div className="aspect-video">
      <iframe
        src="https://www.youtube.com/embed/PAX0xvvcEIw?si=tVwbTaIqKubm13mO"
        title="YouTube video player 6"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-full"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  </div>
</div>

    </>
  )
}

export default FullStories
