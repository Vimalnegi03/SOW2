import React from 'react';

function ReachStats() {
  const stats = [
    {
      number: '25',
      label: 'States & Union Territories',
      description: 'Activities in',
    },
    {
      number: '9K',
      label: 'Children reached',
      description: 'Through direct programs and government partnerships',
    },
    {
      number: '3000',
      label: 'Girls and women reached',
      description: "Through mothers' groups and other programs",
    },
    {
      number: '118K',
      label: 'Youth reached',
      description: 'Through vocational/non-vocational courses',
    },
  ];

  return (
    <>
    <section className="bg-white py-12 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold font-serif text-gray-900 mb-12">
          Reach 2023-24
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto font-serif">
          {stats.map(({ number, label, description }, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center border-2 border-b-blue-500 border-amber-50"
            >
              <div className="text-5xl sm:text-6xl font-black text-orange-500 font-mono">
                {number}
              </div>
              <h3 className="mt-3 text-xl sm:text-2xl font-semibold text-gray-800 font-serif">
                {label}
              </h3>
              {description && (
                <p className="mt-2 text-gray-600 text-sm sm:text-base leading-relaxed max-w-xs">
                  {description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
<img
  src="Down_image.png"
  alt=""
  className="w-full h-auto"
  loading="lazy"
/>

    </>
  );
}

export default ReachStats;
