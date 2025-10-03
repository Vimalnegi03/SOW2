// src/components/Visits.js
import React, { useEffect, useState } from "react";
import useVisitStore from "../store/useSchoolVisits"; // Your existing store
import VisitCard from "./VisitCard";

function Visits() {
  const { visits, loading, fetchVisits } = useVisitStore();
  const [page, setPage] = useState(1);
  const perPage = 5; // Increased for a better grid layout

  useEffect(() => {
    fetchVisits();
  }, [fetchVisits]);

  const startIndex = (page - 1) * perPage;
  const currentVisits = visits.slice(startIndex, startIndex + perPage);
  const totalPages = Math.ceil(visits.length / perPage);

  // Enhanced Loading State
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen ">
        <p className="text-xl font-semibold text-gray-600">Loading School Visits...</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-3xl font-bold text-amber-600 mb-8 border-b pb-4 mt-[70px]"><span className="text-amber-600 font-serif">Latest School Visits -:</span></h1>

        {/* Empty State UI */}
        {visits.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-700">No Visits Found</h2>
            <p className="text-gray-500 mt-2">There are currently no school visit records to display.</p>
          </div>
        ) : (
          <>
            {/* Responsive Grid Layout */}
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {currentVisits?.map((visit) => (
                <VisitCard key={visit.SchoolUdise} visit={visit} /> // Using SchoolUdise as a key
              ))}
            </div>

            {/* Styled Pagination */}
            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-4 mt-10">
                <button
                  onClick={() => setPage((p) => Math.max(p - 1, 1))}
                  disabled={page === 1}
                  className="px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
                >
                  Previous
                </button>
                <span className="text-sm font-medium text-gray-700">
                  Page {page} of {totalPages}
                </span>
                <button
                  onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                  disabled={page === totalPages}
                  className="px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Visits;