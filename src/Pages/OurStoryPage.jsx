import React from 'react';
import { Link } from 'react-router-dom';

const OurStoryPage = () => {
  return (
    <div className="bg-white text-black">

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] bg-cover bg-center flex items-center" 
               style={{ backgroundImage: "url('first.jpeg')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4 animate-fade-in-up font-serif sm:text-3xl">
            Our Story: Driving Vocational Education Across India
          </h1>
          <p className="text-lg md:text-xl text-slate-200 animate-fade-in-up delay-200 font-serif">
            From an innovative idea to a national movement, discover the journey of Skills on Wheels.
          </p>
        </div>
      </section>

      {/* The Core Idea - Problem & Solution */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 font-serif">How It All Started: Identifying the Gap</h2>
              <p className="mt-4 text-lg text-black leading-relaxed">
                The <span className='text-amber-500 font-bold'> Skills on Wheels </span>program by <span className='text-amber-500 font-bold'> Lend A Hand India </span> began as an innovative answer to a major challenge faced by hundreds of government schools across India: the lack of infrastructure for hands-on vocational training. In the early 2010s, Lend A Hand India observed that even when funds and vocational kits were provided by the government, many schools—especially in rural and remote areas—lacked dedicated rooms or labs to effectively deliver practical, skill-based classes.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img src="second.jpeg" 
                   alt="Empty classroom or school with basic infrastructure" 
                   className="w-full h-80 object-cover" />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-20">
             <div className="lg:order-last rounded-xl overflow-hidden shadow-xl">
              <img src="third.jpg" 
                   alt="Customized truck with mobile lab equipment" 
                   className="w-full h-80 object-cover" />
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-6 font-serif">The Solution: A Classroom on Wheels</h3>
              <p className="mt-4 text-lg text-black leading-relaxed">
                The team imagined a <span className='text-amber-500 font-bold'> classroom on wheels </span>—a truck retrofitted with workstations, tools, a generator, and Wi-Fi. This mobile lab could bring multi-skill training directly to any school, anywhere, for a day or a week. This innovative approach allowed students to engage in practical activities regardless of the school's existing facilities, transforming barriers into opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Beginning - Launch and Design */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 font-serif">The Launch: Maharashtra, 2012-13</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="text-left bg-blue-50 p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-blue-700 mb-4 font-serif">The First Mobile Lab</h3>
              <p className="text-lg text-black leading-relaxed font-serif">
                The first Skills on Wheels mobile lab was launched in <span className='text-amber-500 font-bold'>Maharashtra in 2012-13</span>. It was meticulously equipped to teach students grades 9-12 a diverse range of vocational skills.
              </p>
            </div>
            <div className="text-left bg-orange-50 p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-orange-700 mb-4 font-serif">What Was Inside?</h3>
              <ul className="list-disc list-inside text-lg text-black leading-relaxed space-y-2 font-serif">
                <li>Specialized toolkits, materials, and mobile workbenches</li>
                <li>A generator for power in off-grid locations</li>
                <li>Audio-visual aids and IT infrastructure for digital learning</li>
                <li>Fresh learning materials, posters, and real products for students to make</li>
                <li>Training for ten different vocational skills including plumbing, electrical, health, agriculture, welding, carpentry, and mobile repairs.</li>
              </ul>
            </div>
          </div>
          <div className="mt-16 rounded-xl overflow-hidden shadow-2xl">
              <img src="our_story_page_image.jpg" 
                   alt="Students actively participating in a mobile lab workshop" 
                   className="w-full h-96 object-cover" />
            </div>
        </div>
      </section>

      {/* First Impact & Expansion */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 font-serif">Inspiring a Nation: The First Skill Yatra</h2>
              <p className="mt-4 text-lg text-black leading-relaxed">
                The first <span className='text-amber-500 font-bold'>Skill Yatra</span> saw the bus travel through over <span className='text-amber-500 font-bold'> 50 towns and villages in Maharashtra</span>, igniting a spark of interest among local students, teachers, and parents. Visits to renowned educational institutions, such as the <span className='text-amber-500 font-bold'>Druk White Lotus School in Ladakh (famously known as "the Rancho School" from the movie 3 Idiots)</span>, alongside remote rural towns, powerfully demonstrated how accessible and engaging vocational education could truly be.
              </p>
              <p className="mt-4 text-lg text-black leading-relaxed font-serif">
                This early success garnered <span className='text-amber-500 font-bold'>national media coverage</span> and praise from policymakers, proving the model's effectiveness and potential.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img src="sow_requirement.jpg" 
                   alt="Students learning in an open environment or a unique school" 
                   className="w-full h-80 object-cover" />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-20">
            <div className="lg:order-last rounded-xl overflow-hidden shadow-xl">
              <img src="fourth.jpeg" 
                   alt="Map of India with highlighted states or a diverse group of students" 
                   className="w-full h-80 object-cover" />
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-6 font-serif">Expansion and National Influence</h3>
              <p className="mt-4 text-lg text-black leading-relaxed font-serif">
                Building on this momentum, Lend A Hand India forged <span className='text-amber-500 font-bold'>state government partnerships</span>, allowing Skills on Wheels to expand its reach significantly. The program has now grown to <span className='text-amber-500 font-bold'>10+ states across India</span>, always maintaining its core focus on hands-on, inclusive, and community-based skill training. A crucial aspect of this expansion is the deliberate effort to reach and empower <span className='text-amber-500 font-bold'>girls and underserved youth</span>, ensuring vocational opportunities are available to everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Story - Philosophy */}
     
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 font-serif text-black">Our Philosophy: Learning by Doing</h2>
          <p className="text-xl leading-relaxed text-black">
            Rather than traditional lectures, Skills on Wheels has always focused on <span className='text-amber-500 font-bold'>making, doing, and experiencing</span>. Students don't just read about concepts; they fix electrical circuits, grow plants, repair mobile phones, and even sell compost they make.
          </p>
          <p className="mt-6 text-xl leading-relaxed text-black">
            This hands-on approach quickly established SOW as a model for mobile, scalable education and significantly contributed to developing policy best practices for India’s national <span className='text-amber-500 font-bold'>Skill India campaign</span>, influencing vocational training nationwide.
          </p>
        </div>
      

      {/* Final Call to Action - Optional, but good practice */}

    </div>
  );
};

export default OurStoryPage;