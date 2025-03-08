import { useEffect, useRef } from 'react';

const logos = [
  "/logos/logo1.png",
  "/logos/logo2.png",
  "/logos/logo3.png",
  "/logos/logo4.png",
  "/logos/logo5.png",
  "/logos/logo6.png",
  "/logos/logo7.png",
  "/logos/logo8.png",
  "/logos/logo9.png",
  "/logos/logo10.png",
  "/logos/logo11.png",
  "/logos/logo12.png",
];

const TrustedPartners = () => {
  const logosContainerRef = useRef(null);

  useEffect(() => {
    const logosContainer = logosContainerRef.current;
    let animationFrameId;

    const scrollLogos = () => {
      logosContainer.scrollLeft += 1;
      if (logosContainer.scrollLeft >= logosContainer.scrollWidth / 2) {
        logosContainer.scrollLeft = 0;
      }
      animationFrameId = requestAnimationFrame(scrollLogos);
    };

    animationFrameId = requestAnimationFrame(scrollLogos);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <>


      <div className="max-w-full mx-auto min-h-screen flex flex-col justify-center items-center bg-blue-100 relative">
        {/* Title Section */}
        <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-700 mb-4 text-center">
          Trusted <span className="text-black italic">Partners</span>
        </h2>

        <div className="absolute inset-0 bg-blue-100 bg-opacity-30 z-0"></div>
        {/* Moving Logos Section */}
        <div
          className="flex items-center w-full py-12 z-10 cursor-pointer space-x-4 overflow-x-hidden"
          ref={logosContainerRef}
        >
          <div className="flex w-[200%]">
            {[...logos, ...logos].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Logo ${index % logos.length + 1}`}
                className={`w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 rounded-full border-2 border-sky-600 hover:bg-white transition-transform transform hover:scale-105 mx-2 ${index === 4 ? 'special-class-for-5th-logo' : ''
                  }`}
              />
            ))}
          </div>
        </div>
      </div>


    </>
  );
};

export default TrustedPartners;