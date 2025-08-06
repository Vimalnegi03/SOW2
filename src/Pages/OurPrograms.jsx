import React from 'react';

function OurPrograms() {
  return (
    <>
      <h1 className="text-4xl text-center mt-6 font-serif font-black tracking-tight text-black drop-shadow">
        Our Programs
      </h1>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-6">
        <div
          className="flex flex-col md:flex-row items-stretch gap-8 bg-white rounded-xl shadow-lg py-10 px-4 md:px-10 min-h-[420px] md:min-h-[500px] border-yellow-600 border-t-2"
        >
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img
              src="pratham.jpg"
              alt="Our Programs"
              className="w-full max-w-2xl  sm:h-96 md:h-[420px] lg:h-[500px] rounded-lg shadow-md object-cover border-yellow-600 border-b-2"
              loading="lazy"
            />
          </div>
          <div className="w-full md:w-1/2 flex items-center">
            <p className="font-serif text-xl md:text-2xl text-gray-800 leading-relaxed text-center md:text-left">
              To build a nation-wide movement of <span className="font-bold text-orange-500">10 million skilled rural youth by 2030</span>,
              redefining livelihoods and community leadership through accessible, mobile, industry-relevant training and impactful hyper-local actions like this.
            </p>
          </div>
        </div>
      </div>


   <div className="flex flex-col sm:flex-row flex-wrap gap-8 items-center justify-center mt-10 border border-amber-50 h-auto sm:h-[500px]">
  {/* Card 1 */}
  <div className="card bg-base-100 w-full sm:w-80 md:w-96 shadow-lg border border-amber-50 hover:shadow-2xl transition-all duration-300 h-auto sm:h-[380px]">
    <figure className="px-2 pt-2">
      <img
        src="sow_card.jpg"
        alt="Shoes"
        className="object-cover h-72 w-full"
      />
    </figure>
    <div className="card-body items-center text-center hover:bg-amber-300">
      <h2 className="card-title text-xl font-bold font-serif">Facilitated Skill Education</h2>
    </div>
  </div>

  {/* Card 2 */}
  <div className="card bg-base-100 w-full sm:w-80 md:w-96 shadow-lg border border-amber-50 hover:shadow-2xl transition-all duration-300 h-auto sm:h-[380px]">
    <figure className="px-2 pt-2">
      <img
        src="card(2).png"
        alt="Shoes"
        className="object-cover h-72 w-full"
      />
    </figure>
    <div className="card-body items-center text-center hover:bg-amber-300">
      <h2 className="card-title text-xl font-bold font-serif">Community Outreach</h2>
    </div>
  </div>

  {/* Card 3 */}
  <div className="card bg-base-100 w-full sm:w-80 md:w-96 shadow-lg border border-amber-50 hover:shadow-2xl transition-all duration-300 h-auto sm:h-[380px]">
    <figure className="px-2 pt-1">
      <img
        src="card(3).jpg"
        alt="Shoes"
        className="object-cover h-72 w-full"
      />
    </figure>
    <div className="card-body items-center text-center hover:bg-amber-300">
      <h2 className="card-title text-xl font-bold font-serif">Improving Public School Infrastructure</h2>
    </div>
  </div>
</div>



    </>
  );
}

export default OurPrograms;
