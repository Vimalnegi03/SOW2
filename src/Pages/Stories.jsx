import React, { useState, useEffect, useMemo } from 'react';
import { Link } from "react-router-dom";
import useVisitStore from '../store/useSchoolVisits'; // Assuming the store is at this path

function Stories() {
    // Data Fetching from Zustand Store
    const { visits, loading, fetchVisits } = useVisitStore();

    useEffect(() => {
        fetchVisits();
    }, [fetchVisits]);

    // Process and filter the data to get only valid "stories"
    const storiesData = useMemo(() => {
        return visits
            .filter(visit =>
                visit.StarOfTheDayStudentName &&
                visit.StarOfTheDayPhotoUrl &&
                visit.StarOfTheDayExperience
            )
            .map(visit => ({
                id: visit.SchoolUdise + visit.StarOfTheDayStudentName, // Create a unique ID
                image: visit.StarOfTheDayPhotoUrl,
                title: visit.StarOfTheDayStudentName,
                paragraph: visit.StarOfTheDayExperience,
                link: `/stories/${visit.SchoolUdise}`, // Example dynamic link
            }));
    }, [visits]);

    // Take only the first 3 stories to feature on the page
    const featuredStories = storiesData.slice(0, 3);

    if (loading) {
        return <div className="flex justify-center items-center h-screen"><p className="text-xl text-black">Loading Stories...</p></div>;
    }

    return (
        <>
            <section className="max-w-7xl mx-auto px-4 sm:px-8 py-8 lg:py-16">
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-black mb-4">
                        Stories Of Change
                    </h1>
                    <p className="text-black text-base sm:text-lg leading-relaxed font-serif">
                        Step into the heart of Skills on Wheels mission through our Stories of Change—a collection of real-life journeys that showcase the resilience, determination, and hope of those we serve.
                    </p>
                    <Link
                        to="/stories" // Link to a page that will show all stories
                        className="mt-6 inline-block bg-orange-500 text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-orange-600 transition"
                    >
                        View All Stories
                    </Link>
                </div>

                {featuredStories.length > 0 ? (
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {featuredStories.map(({ id, image, title, link, paragraph }) => (
                            <article
                                key={id}
                                className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            >
                                <img
                                    src={image}
                                    alt={title}
                                    className="w-full h-56 object-cover"
                                    loading="lazy"
                                />
                                <div className="p-6 flex flex-col flex-grow">
                                    <h2 className="text-xl font-serif font-semibold text-gray-900 mb-2">
                                        {title}
                                    </h2>
                                    <p className='font-sans text-black line-clamp-3 flex-grow'>{paragraph}</p>
                                    
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <h2 className="text-2xl font-semibold text-black">No Stories Available Yet</h2>
                        <p className="text-black mt-2">Please check back later to read about our amazing students.</p>
                    </div>
                )}
            </section>
            
            {/* --- Partners Section (Unchanged) --- */}
              <div className="py-10 bg-gray-50">
  <h1 className="font-serif text-3xl text-center font-bold text-black">
    Our Partners
  </h1>

  {/* Container */}
  <div className="w-full py-4 mt-4 flex justify-center">
    <div
      className="
        flex flex-wrap justify-center items-center gap-10
        md:gap-20 md:flex-nowrap md:animate-marquee w-full md:w-max
      "
    >
      {/* Logo 1 */}
      <img
        src="websites_lahi.png"
        alt="Lend A Hand India"
        className="h-16 sm:h-20 md:h-24 w-auto object-contain"
      />

      {/* Logo 2 */}
      <img
        src="CBSE.png"
        alt="CBSE"
        className="h-16 sm:h-20 md:h-24 w-auto object-contain"
      />
    </div>
  </div>
</div>
            
        </>
    );
}

export default Stories;