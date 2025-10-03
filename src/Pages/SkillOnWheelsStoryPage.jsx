import React from 'react';
import { Link } from 'react-router-dom';

// --- Helper Components for Icons ---
const IconGuidance = () => <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const IconWorkshop = () => <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>;
const IconFutureSkills = () => <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;


const SkillsOnWheelsStoryPage = () => {
  return (
    <div className="bg-white">
      
      {/* --- Hero Section --- */}
      <section className="relative h-[70vh] md:h-[90vh] bg-cover bg-center text-white flex items-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/8947600/pexels-photo-8947600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20 "></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight font-serif">
              Sparking Curiosity, One Visit at a Time.
            </h1>
            <p className="mt-4 text-lg md:text-xl text-slate-200 font-serif">
              Skills on Wheels is more than a bus—it's a mobile gateway to a world of hands-on discovery, bringing the tools of tomorrow to the students of today.
            </p>
          </div>
        </div>
      </section>

      {/* --- Our Purpose Section --- */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight font-serif">Our Purpose: Bridging the Gap Between Curiosity and Opportunity.</h2>
              <p className="mt-6 text-lg text-white leading-relaxed font-serif">
                In a rapidly evolving world, access to modern technology and hands-on learning is not a luxury—it's a necessity. Yet, many schools, especially in remote areas, lack the resources to provide this critical exposure.
              </p>
              <p className="mt-4 text-lg text-black leading-relaxed">
               <span className='text-amber-500 font-bold font-serif'>Skills on Wheels</span> was born from a simple idea: <span className='font-serif'>If students can't get to the lab, we'll bring the lab to them.</span> Our mission is to break down geographical and economic barriers, making cutting-edge education accessible, engaging, and unforgettable for every single child.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="sixth.jpeg" 
                alt="A diverse group of students engaged in learning"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* --- A Day of Discovery (Activities) Section --- */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight font-serif">What a Visit Looks Like</h2>
            <p className="mt-4 text-lg text-black leading-relaxed font-serif">
              Each visit is a dynamic blend of orientation, hands-on practice, and career exploration, designed to provide a holistic vocational experience.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Guidance */}
            <div className="bg-white rounded-xl shadow-lg p-8 transform transition-transform duration-300 hover:-translate-y-2">
              <div className="flex items-center justify-center h-16 w-16 bg-blue-500 rounded-xl mb-6">
                <IconGuidance />
              </div>
              <h3 className="text-xl font-bold text-black font-serif">Awareness & Career Counseling</h3>
              <p className="mt-4 text-black font-serif">
                We begin with orientation sessions for students, teachers, and parents to highlight the future of vocational skills. This is followed by dedicated career guidance for 10th and 12th graders, focusing on employment and entrepreneurship.
              </p>
            </div>
            
            {/* Card 2: Workshops */}
            <div className="bg-white rounded-xl shadow-lg p-8 transform transition-transform duration-300 hover:-translate-y-2">
              <div className="flex items-center justify-center h-16 w-16 bg-orange-500 rounded-xl mb-6">
                <IconWorkshop />
              </div>
              <h3 className="text-xl font-bold text-black font-serif">Hands-On Skill Workshops</h3>
              <p className="mt-4 text-black font-serif">
                The core of our visit involves live demonstrations and interactive practice. Supervised by trained instructors, students get hands-on experience with welding, electrical wiring, food processing, mobile repair, and more.
              </p>
            </div>

            {/* Card 3: Future Skills */}
            <div className="bg-white rounded-xl shadow-lg p-8 transform transition-transform duration-300 hover:-translate-y-2">
              <div className="flex items-center justify-center h-16 w-16 bg-purple-500 rounded-xl mb-6">
                <IconFutureSkills />
              </div>
              <h3 className="text-xl font-bold text-black font-serif">Exploring Sectors & Digital Skills</h3>
              <p className="mt-4 text-black font-serif">
                We showcase tools from various sectors like agriculture, healthcare, and IT, explaining career paths. Students also learn essential digital life skills, from using DigiLocker and UPI to understanding digital financial literacy.
              </p>
            </div>
          </div>
          
          {/* Gender Inclusivity Spotlight */}
          <div className="mt-24 bg-slate-50 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img src="seventh.jpeg" alt="Girl student participating in a technical workshop" className="w-full h-full object-cover" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-black font-serif">Empowering Future Women Leaders</h3>
                    <p className="mt-4 text-lg text-black leading-relaxed font-serif">
                        A core part of our mission is promoting gender inclusivity. We actively encourage and create a supportive environment for girl students to participate in all activities, especially non-traditional and technical skills training, breaking barriers and building confidence.
                    </p>
                </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- Closing Vision Section --- */}
      <section className="bg-slate-800 py-20 lg:py-28">
          <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight font-serif">Igniting the Innovators of Tomorrow</h2>
              <p className="mt-6 text-lg text-slate-300 leading-relaxed font-serif">
                  A visit from Skills on Wheels is more than just a day of fun—it's a spark. By planting the seeds of curiosity and providing the tools to explore, we believe we're helping to cultivate the next generation of thinkers, creators, and problem-solvers.
              </p>
          </div>
      </section>

    </div>
  );
};

export default SkillsOnWheelsStoryPage;