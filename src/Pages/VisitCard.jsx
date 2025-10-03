// src/components/VisitCard.js
import React, { useState } from 'react';
import { FaCalendarAlt, FaUsers, FaStar, FaVideo, FaChild } from 'react-icons/fa';

const VisitCard = ({ visit }) => {
  const totalStudents = visit.TotalMaleStudentsAttended + visit.TotalFemaleStudentsAttended;
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Prevent the page from scrolling when the modal is open
  if (isModalOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    // A React Fragment is used to return the card and modal as siblings
    <>
      <div className="bg-slate-700 rounded-xl shadow-lg border border-slate-700 overflow-hidden flex flex-col sm:flex-row transition-all duration-300 ease-in-out hover:shadow-cyan-500/10">
        
        {/* --- Left Panel: Highlight Section (Star or Stats) --- */}
        <div className="sm:w-48 flex-shrink-0 bg-slate-800/50 p-5 flex flex-col items-center justify-center text-center sm:border-r border-slate-700">
          {visit.StarOfTheDayStudentName ? (
            <>
              <img
                src={visit?.StarOfTheDayPhotoUrl || 'https://via.placeholder.com/150'}
                alt={visit?.StarOfTheDayStudentName}
                className="w-24 h-24 rounded-full object-cover border-4 border-slate-600 shadow-md cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => setIsModalOpen(true)} // Open modal on click
              />
              <h3 className="mt-3 font-bold text-amber-400 flex items-center gap-2 text-sm"><FaStar /> Star of the Day</h3>
              <p className="font-semibold text-white mt-1">
  {visit?.StarOfTheDayStudentName || 'Unnamed Student'}
</p>
            </>
          ) : (
            <>
              <div className="text-green-400 bg-green-900/50 p-4 rounded-full">
                  <FaUsers className="h-8 w-8" />
              </div>
              <p className="text-slate-400 text-sm mt-3">Total Students</p>
              <p className="text-4xl font-bold text-white">{(visit?.TotalMaleStudentsAttended || 0) + (visit?.TotalFemaleStudentsAttended || 0)}</p>
            </>
          )}
        </div>

        {/* --- Right Panel: Details Section --- */}
        <div className="p-5 flex flex-col flex-grow">
          {/* School Info */}
          <div>
            <p className="text-sm font-semibold text-sky-400">SCHOOL VISIT</p>
            <h2 className="text-xl font-bold text-white truncate" title={visit?.SchoolName || 'Unknown School'}>
              {visit?.SchoolName || 'Unknown School'}
            </h2>
            <p className="text-xs text-slate-400">UDISE: {visit?.SchoolUdise}</p>
          </div>

          {/* Date & Attendance Details */}
          <div className="my-4 pt-4 border-t border-slate-700/50 text-slate-300">
            <div className="flex items-center gap-2 text-sm mb-2">
              <FaCalendarAlt className="text-slate-500" />
              <span>{visit?.DateOfVisit?.slice(0, 10)}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <FaChild className="text-slate-500" />
              <span>{visit?.TotalMaleStudentsAttended} Male / {visit?.TotalFemaleStudentsAttended} Female</span>
            </div>
          </div>

          {/* Star's Experience Quote */}
          {visit?.StarOfTheDayStudentName && (
              <div className="bg-slate-800/60 p-3 rounded-lg flex-grow">
                 <p className="text-sm italic text-slate-400">
  "{visit?.StarOfTheDayExperience || 'No experience shared'}"
</p>
              </div>
          )}

          {/* Video Link Footer */}
          {visit?.VideoUrl && (
            <div className="mt-auto pt-4">
              <a
                href={visit?.VideoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-sm bg-sky-500/10 text-sky-400 font-semibold hover:bg-sky-500/20 transition-colors py-2 rounded-lg"
              >
                <FaVideo />
                <span>Watch Visit Video</span>
              </a>
            </div>
          )}
        </div>
      </div>

      {/* --- Image Modal --- */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-4"
          onClick={() => setIsModalOpen(false)} // Close on overlay click
        >
          {/* Modal Content */}
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
          >
            <img 
              src={visit?.StarOfTheDayPhotoUrl} 
              alt={`Full-size view of ${visit?.StarOfTheDayStudentName}`} 
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-5 -right-5 bg-white text-black rounded-full h-10 w-10 flex items-center justify-center text-2xl font-bold hover:bg-gray-200 transition-colors"
              aria-label="Close image viewer"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default VisitCard;