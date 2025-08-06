import React, { useState, useEffect } from "react";

function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % 2); // 2 slides total
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="relative w-full mt-6 rounded-xl overflow-hidden border-yellow-600 border-b-2">
      {/* Responsive height container */}
      <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] relative">
        {/* Slide 1 */}
        <div
          className={`absolute inset-0 flex items-center transition-opacity duration-1000 ease-in-out ${
            current === 0 ? "opacity-100 z-30" : "opacity-0 z-10"
          } bg-black bg-opacity-20`} // Subtle overlay for contrast
          style={{
            backgroundImage: `url(Lahi6.webp)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
          }}
        >
          {/* Text block for large screens */}
          <div className="hidden lg:flex flex-1 justify-start pl-12">
            <div className="bg-transparent backdrop-blur-sm p-4 rounded-xl max-w-md flex flex-col items-start gap-4">
              <img
                src="./sow_requirement.jpg"
                alt="Empowering Rural Youth"
                className="w-48 h-auto rounded-md shadow-lg"
              />
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-orange-400 font-bold leading-tight">
                Empowering Rural Youth Through Mobile Learning & Skills Training
              </h1>
            </div>
          </div>

          {/* Responsive Text & Image block for medium and smaller screens */}
          <div className="flex lg:hidden flex-1 justify-center items-center px-4">
            <div className="bg-transparent backdrop-blur-sm p-4 rounded-xl max-w-md flex flex-col items-center gap-4 text-center">
              <img
                src="./sow_requirement.jpg"
                alt="Empowering Rural Youth"
                className="w-36 h-auto rounded-md shadow-lg"
              />
              <h1 className="font-serif text-xl sm:text-2xl text-orange-400 font-bold leading-tight">
                Empowering Rural Youth Through Mobile Learning & Skills Training
              </h1>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
            current === 1 ? "opacity-100 z-30" : "opacity-0 z-10"
          }`}
          style={{
            backgroundImage: `url(Lahi9.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
          }}
        >
          {/* Slide 2 content if needed or just pure image */}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-50">
        {[0, 1].map((idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-5 h-5 rounded-full border-2 border-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary ${
              current === idx ? "bg-orange" : "bg-white/60"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
            aria-pressed={current === idx}
          />
        ))}
      </div>
    </div>
    </>
  );
}

export default Carousel;
