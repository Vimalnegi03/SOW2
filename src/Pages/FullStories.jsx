// src/components/FullStories.js
import React, { useState, useEffect, useMemo } from 'react';
import { Link } from "react-router-dom";
import Pagination from './Pagination';
import useVisitStore from '../store/useSchoolVisits';
import AnimatedButterfly from './AnimatedButterfly'; // <-- 1. IMPORT THE BUTTERFLY

// SVG for the Flower


const FullStories = () => {
    const { visits, loading, fetchVisits } = useVisitStore();
    const [starStudentPage, setStarStudentPage] = useState(1);
    const [featuredVideoPage, setFeaturedVideoPage] = useState(1);

    const recordsPerPage = 4;

    useEffect(() => {
        fetchVisits();
    }, [fetchVisits]);

    const starStudents = useMemo(() => {
        return visits
            .filter(visit => visit.StarOfTheDayStudentName && visit.StarOfTheDayPhotoUrl && visit.StarOfTheDayExperience)
            .map((visit, index) => ({
                id: `${visit.SchoolUdise}-${visit.StarOfTheDayStudentName}-${index}`,
                name: visit.StarOfTheDayStudentName,
                image: visit.StarOfTheDayPhotoUrl,
                experience: visit.StarOfTheDayExperience,
            }));
    }, [visits]);

    const featuredVideos = useMemo(() => {
        return visits
            .filter(visit => visit.VideoUrl)
            .map(visit => {
                let embedUrl = visit.VideoUrl;
                if (embedUrl.includes("watch?v=")) {
                    embedUrl = embedUrl.replace("watch?v=", "embed/");
                } else if (embedUrl.includes("youtu.be/")) {
                    embedUrl = embedUrl.replace("youtu.be/", "youtube.com/embed/");
                }
                embedUrl += (embedUrl.includes("?") ? "&" : "?") + "modestbranding=1&rel=0";
                return {
                    id: visit.SchoolUdise,
                    title: `Highlights from ${visit.SchoolName}`,
                    embedUrl: embedUrl,
                };
            });
    }, [visits]);

    const studentStartIndex = (starStudentPage - 1) * recordsPerPage;
    const currentStarStudents = starStudents.slice(studentStartIndex, studentStartIndex + recordsPerPage);
    const studentTotalPages = Math.ceil(starStudents.length / recordsPerPage);

    const videoStartIndex = (featuredVideoPage - 1) * recordsPerPage;
    const currentFeaturedVideos = featuredVideos.slice(videoStartIndex, videoStartIndex + recordsPerPage);
    const videoTotalPages = Math.ceil(featuredVideos.length / recordsPerPage);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-slate-50">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-orange-500 mx-auto"></div>
                    <p className="text-xl font-semibold text-gray-700 mt-4">Loading Stories...</p>
                </div>
            </div>
        );
    }

    return (
      <>
        <div className="bg-slate-50">
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                
                {/* --- HEADER --- */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-black mb-4 tracking-tight font-serif">
                        Stories of Change
                    </h1>
                    <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
                    <p className="text-slate-600 text-lg sm:text-xl leading-relaxed">
                        Explore the journeys of our bright students and witness the transformative power of our mission through these featured highlights.
                    </p>
                </div>

                {/* --- OUR STAR STUDENTS SECTION --- */}
                {starStudents.length > 0 && (
                    <div className="mb-20">
                        <h2 className="text-3xl sm:text-4xl font-bold text-black mb-12 text-center font-serif">Our Star Students</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {currentStarStudents.map((student) => (
                                <div key={student.id} className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col">
                                   <img 
  src={student.image || "/placeholder.png"} 
  alt={student.name || "Unnamed Student"} 
  className="w-full h-56 object-cover" 
  loading="lazy"
  onError={(e) => e.target.src="/placeholder.png"} 
/>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-xl font-bold text-black">{student.name}</h3>
                                        <blockquote className="mt-4 pt-4 border-t border-slate-200 flex-grow">
                                            <p className="text-slate-600 italic text-sm">"{student.experience}"</p>
                                        </blockquote>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Pagination currentPage={starStudentPage} totalPages={studentTotalPages} onPageChange={setStarStudentPage} />
                    </div>
                )}

                {/* --- FEATURED VIDEOS SECTION --- */}
                {featuredVideos.length > 0 && (
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-black mb-12 text-center">Featured Videos</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {currentFeaturedVideos.map((video) => (
                                <div key={video.id} className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                                    <div className="aspect-video">
                                        <iframe
                                            className="w-full h-full"
                                            src={video.embedUrl}
                                            title={video.title}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-semibold text-slate-900">{video.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Pagination currentPage={featuredVideoPage} totalPages={videoTotalPages} onPageChange={setFeaturedVideoPage} />
                    </div>
                )}
            </section>

            {/* --- PARTNERS SECTION --- */}
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
        </div>
        </>
    );
};

export default FullStories;