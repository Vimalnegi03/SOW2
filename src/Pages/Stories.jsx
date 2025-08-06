import React from 'react';

const storiesData = [
  {
    id: 1,
    image: "https://media.istockphoto.com/id/2212838775/photo/happy-rural-indian-school-girl-using-laptop-female-student-working-on-computer-digital.jpg?s=1024x1024&w=is&k=20&c=m0maTtJY9fldKAeZN9Jr9jPhflyAwAOupTwrmnZ2pNA=", // Replace with your actual image paths
    title: "Rubina",
    paragraph:"This is my story i have learnt all these things during sow visit",
    link: "#",
  },
  {
    id: 2,
    image: "https://media.istockphoto.com/id/651570952/photo/schoolgirls-on-bicycle.jpg?s=1024x1024&w=is&k=20&c=vFMTl4kKlTVbG9fWjZd-CvUvcxI4fUFy1zC76NEzKdE=",
    title: "Shalini",
    paragraph:"This is my story i have learnt all these things during sow visit",
    link: "#",
  },
  {
    id: 3,
    image: "https://media.istockphoto.com/id/1444492898/photo/mother-preparing-little-girl-for-school.jpg?s=1024x1024&w=is&k=20&c=mIhj72jJqmcbQZnUaypr7oD9OheADAP4CzLegkNIk98=",
    title: "Jaya",
    paragraph:"This is my story i have learnt all these things during sow visit",
    link: "#",
  },
];

function Stories() {
  return (
    <>
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-8 lg:py-16">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-black mb-4">
          Stories Of Change
        </h1>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          Step into the heart of Skills’s on wheels mission through our Stories of Change—a collection of real-life journeys that showcase the resilience, determination, and hope of those we serve. From children building strong learning foundations to youth rewriting their futures, these stories highlight the transformative power of education and skills. Explore how, together with our communities and partners, we’re creating lasting impact, one story at a time.
        </p>
        <button
          type="button"
          className="mt-6 inline-block bg-orange-500 text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-orange-600 transition"
        >
          View all
        </button>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {storiesData.map(({ id, image, title, link,paragraph }) => (
          <article
            key={id}
            className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-serif font-semibold text-gray-900 mb-4 flex-grow">
                {title}
              </h2>
              <p className='font-serif'>{paragraph}</p>
              <a
                href={link}
                className="inline-block text-orange-500 font-semibold hover:underline mt-4"
                aria-label={`Read more about ${title}`}
              >
                Read More &rarr;
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
    <div>
        <h1 className='font-serif text-4xl text-center font-bold'>Our Partners</h1>
        <div>
       <div className="w-full overflow-x-hidden py-4 bg-white flex justify-center mt-4">
  <div className="flex animate-marquee space-x-20 w-max">
    <img
      src="websites_lahi.png"
      alt="Lend A Hand India"
      className="h-24 w-auto object-contain rounded shadow"
    />
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Logo_of_the_Central_Board_of_Secondary_Education.png?20250210073916"
      alt="CBSE"
      className="h-24 w-auto object-contain rounded shadow"
    />
    {/* Repeat logos for seamless looping */}
 
  </div>
  {/* Animation style (can be in Tailwind config for production) */}
  {/* <style>{`
    @keyframes marquee {
      0% { transform: translateX(0%);}
      100% { transform: translateX(-50%);}
    }
    .animate-marquee {
      animation: marquee 20s linear infinite;
    }
  `}</style> */}
</div>

</div>
    </div>
    </>
  );
}

export default Stories;
