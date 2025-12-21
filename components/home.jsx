// importing icons
import React, { useState, useEffect, useRef } from "react";
// home section
const HomeSection = ({
  sectionRef,
  visibleSections,
  cardBg,
  borderColor,
  textSecondary,
  hoverBg,
}) => {
  const stats = [
    { label: "Projects Completed", value: "5+" },
    { label: "Happy Clients", value: "3+" },
    { label: "Years Experience", value: "1+" },
    { label: "Code Commits", value: "100+" },
  ];

  return (
    <section
      ref={sectionRef}
      className={`min-h-screen flex items-center justify-center px-4 relative overflow-hidden transition-all duration-1000 ${
        visibleSections.has("home")
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      <div className="text-center max-w-4xl z-10 mt-20">
        <div
          className={`w-32 h-32 rounded-full ${cardBg} mx-auto mb-2% flex items-center justify-center shadow-xl border-2 ${borderColor} transform transition-all duration-700 ${
            visibleSections.has("home") ? "scale-100" : "scale-0"
          }`}
        >
          <div className="text-6xl">
            <img src="https://instagram.fbwa1-1.fna.fbcdn.net/v/t51.2885-19/https://instagram.fbwa1-1.fna.fbcdn.net/v/t51.2885-19/558964716_17963150114983741_6686008014759526145_n.jpg?stp=dst-jpg_s150x150_tt6&efg=https://instagram.fbwa1-1.fna.fbcdn.net/v/t51.2885-19/558964716_17963150114983741_6686008014759526145_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fbwa1-1.fna.fbcdn.net&_nc_cat=101&_nc_oc=Q6cZ2QH8l6RFXi9GsNT8yXtABAoBbTlQUVTy45qCVuIJwPj8amCV3yrkKo9thZ9UIiWeMPQ&_nc_ohc=WnIhwzsbZlUQ7kNvwGKWsKB&_nc_gid=nSVwS59zKF_LWZ-Vo96PSg&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfmGjBkc59tb_-105QVWBV4aEN3T-YN1pRa9c5IO9zAX9g&oe=694DF235&_nc_sid=7a9f4b&_nc_ht=instagram.fbwa1-1.fna.fbcdn.net&_nc_cat=101&_nc_oc=Q6cZ2QH8l6RFXi9GsNT8yXtABAoBbTlQUVTy45qCVuIJwPj8amCV3yrkKo9thZ9UIiWeMPQ&_nc_ohc=WnIhwzsbZlUQ7kNvwGKWsKB&_nc_gid=nSVwS59zKF_LWZ-Vo96PSg&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfmGjBkc59tb_-105QVWBV4aEN3T-YN1pRa9c5IO9zAX9g&oe=694DF235&_nc_sid=7a9f4b.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fbwa1-1.fna.fbcdn.net&_nc_cat=101&_nc_oc=Q6cZ2QE2LzXfDYC0xLOLqRD_z-yYetX4umv4JcFlopHGhohMopRiwqGj9LfBY_gtHxC7kX8&_nc_ohc=WnIhwzsbZlUQ7kNvwGKWsKB&_nc_gid=6ZunnSRxAjnTe7VyniAcBQ&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AfnNXFIpdJIWzocWTrcPM6d3PalhEiHUm7BgEF-6n6UiXA&oe=694DF235&_nc_sid=7d3ac5" />
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl font-bold mb-6">Suyog Adhikari</h1>

        <p
          className={`text-2xl md:text-3xl ${textSecondary} mb-8 font-semibold`}
        >
          Full Stack Developer & Designer
        </p>

        <p
          className={`text-lg md:text-xl ${textSecondary} max-w-2xl mx-auto mb-12 leading-relaxed`}
        >
          creating a best looging and user quierable website with best features.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`${cardBg} rounded-xl p-6 shadow-lg border ${borderColor} ${hoverBg} cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
              style={{
                transitionDelay: `${idx * 100}ms`,
                opacity: visibleSections.has("home") ? 1 : 0,
              }}
            >
              <div className="text-3xl font-bold mb-1 text-blue-500">
                {stat.value}
              </div>
              <div className={`text-sm ${textSecondary}`}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
