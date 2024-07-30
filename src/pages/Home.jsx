// import React from 'react';

// function Home() {
//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">Welcome to Springdale Public School</h2>
//       <p>Where we nurture young minds for a brighter future.</p>
//       <div className="mt-4">
//         <img src="/src/assets/images/classroom.jpg" alt="Classroom" className="w-full h-auto" />
//         <img src="/src/assets/images/library.jpg" alt="Library" className="w-full h-auto" />
//       </div>
//     </div>
//   );
// }

// export default Home;





















// import React from 'react';
// import carousel1 from '../assets/images/sports_day.jpg';
// import carousel2 from '../assets/images/science_exhibition.jpeg';
// import carousel3 from '../assets/images/cultural_fest.jpg';

// function Home() {
//   return (
//     <div>
//       <div className="container mx-auto mt-4">
//         <h2 className="text-3xl font-bold text-center mb-4">Welcome to Springdale Public School</h2>
//         <p className="text-center mb-8">"Where we nurture young minds for a brighter future."</p>
        
//         <div className="carousel">
//           <div className="carousel-item">
//             <img src={carousel1} alt="Annual Sports Day" className="w-full h-64 object-cover" />
//           </div>
//           <div className="carousel-item">
//             <img src={carousel2} alt="Science Exhibition" className="w-full h-64 object-cover" />
//           </div>
//           <div className="carousel-item">
//             <img src={carousel3} alt="Cultural Fest" className="w-full h-64 object-cover" />
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
//           <div className="bg-white shadow-md rounded-lg p-4 text-center">
//             <h3 className="text-xl font-bold mb-2">Annual Sports Day</h3>
//             <p>Celebrating Excellence in Sports</p>
//           </div>
//           <div className="bg-white shadow-md rounded-lg p-4 text-center">
//             <h3 className="text-xl font-bold mb-2">Science Exhibition</h3>
//             <p>Showcasing Student Innovations</p>
//           </div>
//           <div className="bg-white shadow-md rounded-lg p-4 text-center">
//             <h3 className="text-xl font-bold mb-2">Cultural Fest</h3>
//             <p>Embracing Diversity and Creativity</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;












// import React from 'react';
// import carousel1 from '../assets/images/sports_day.jpg';
// import carousel2 from '../assets/images/science_exhibition.jpeg';
// import carousel3 from '../assets/images/cultural_fest.jpg';

// function Home() {
//   return (
//     <div className="container mx-auto mt-8 px-4">
//       <div className="text-center mb-8">
//         <h2 className="text-4xl font-bold text-blue-700 mb-4">Welcome to Springdale Public School</h2>
//         <p className="text-lg text-gray-700">"Where we nurture young minds for a brighter future."</p>
//       </div>

//       <div className="carousel relative mb-8">
//         <div className="carousel-item absolute inset-0 transition-opacity duration-1000 ease-in-out">
//           <img src={carousel1} alt="Annual Sports Day" className="w-full h-96 object-cover rounded-lg shadow-lg" />
//         </div>
//         <div className="carousel-item absolute inset-0 transition-opacity duration-1000 ease-in-out opacity-0">
//           <img src={carousel2} alt="Science Exhibition" className="w-full h-96 object-cover rounded-lg shadow-lg" />
//         </div>
//         <div className="carousel-item absolute inset-0 transition-opacity duration-1000 ease-in-out opacity-0">
//           <img src={carousel3} alt="Cultural Fest" className="w-full h-96 object-cover rounded-lg shadow-lg" />
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         <div className="bg-white shadow-lg rounded-lg p-6 text-center">
//           <h3 className="text-2xl font-bold text-blue-700 mb-2">Annual Sports Day</h3>
//           <p className="text-gray-600">Celebrating Excellence in Sports</p>
//         </div>
//         <div className="bg-white shadow-lg rounded-lg p-6 text-center">
//           <h3 className="text-2xl font-bold text-blue-700 mb-2">Science Exhibition</h3>
//           <p className="text-gray-600">Showcasing Student Innovations</p>
//         </div>
//         <div className="bg-white shadow-lg rounded-lg p-6 text-center">
//           <h3 className="text-2xl font-bold text-blue-700 mb-2">Cultural Fest</h3>
//           <p className="text-gray-600">Embracing Diversity and Creativity</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;













// import React, { useState, useEffect } from 'react';
// import carousel1 from '../assets/images/sports_day.jpg';
// import carousel2 from '../assets/images/science_exhibition.jpeg';
// import carousel3 from '../assets/images/cultural_fest.jpg';
// import './Home.css';

// function Home() {
//   const images = [carousel1, carousel2, carousel3];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [images.length]);

//   const handlePrevClick = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   const handleNextClick = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   return (
//     <div className="container mx-auto mt-8 px-4">
//       <div className="text-center mb-8">
//         <h2 className="text-4xl font-bold text-blue-700 mb-4">Welcome to Springdale Public School</h2>
//         <p className="text-lg text-gray-700">"Where we nurture young minds for a brighter future."</p>
//       </div>

//       <div className="carousel relative mb-8">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className={`carousel-item absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
//           >
//             <img src={image} alt={`Slide ${index}`} className="w-full h-96 object-cover rounded-lg shadow-lg" />
//           </div>
//         ))}
//         <button className="carousel-control prev" onClick={handlePrevClick}>
//           &#10094;
//         </button>
//         <button className="carousel-control next" onClick={handleNextClick}>
//           &#10095;
//         </button>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         <div className="bg-white shadow-lg rounded-lg p-6 text-center">
//           <h3 className="text-2xl font-bold text-blue-700 mb-2">Annual Sports Day</h3>
//           <p className="text-gray-600">Celebrating Excellence in Sports</p>
//         </div>
//         <div className="bg-white shadow-lg rounded-lg p-6 text-center">
//           <h3 className="text-2xl font-bold text-blue-700 mb-2">Science Exhibition</h3>
//           <p className="text-gray-600">Showcasing Student Innovations</p>
//         </div>
//         <div className="bg-white shadow-lg rounded-lg p-6 text-center">
//           <h3 className="text-2xl font-bold text-blue-700 mb-2">Cultural Fest</h3>
//           <p className="text-gray-600">Embracing Diversity and Creativity</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;
















import React, { useState, useEffect } from 'react';
import carousel1 from '../assets/images/sports_day.jpg';
import carousel2 from '../assets/images/science_exhibition.jpeg';
import carousel3 from '../assets/images/cultural_fest.jpg';
import './Home.css';

function Home() {
  const images = [carousel1, carousel2, carousel3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="container mx-auto mt-8 px-4">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-blue-700 mb-4">Welcome to Springdale Public School</h2>
        <p className="text-lg text-gray-700">"Where we nurture young minds for a brighter future."</p>
      </div>

      <div className="carousel relative mb-8">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={image} alt={`Slide ${index}`} className="w-full h-full object-contain rounded-lg shadow-lg" />
            <div className="carousel-text">Text for Slide {index + 1}</div>
          </div>
        ))}
        <button className="carousel-control prev" onClick={handlePrevClick}>
          &#10094;
        </button>
        <button className="carousel-control next" onClick={handleNextClick}>
          &#10095;
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h3 className="text-2xl font-bold text-blue-700 mb-2">Annual Sports Day</h3>
          <p className="text-gray-600">Celebrating Excellence in Sports</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h3 className="text-2xl font-bold text-blue-700 mb-2">Science Exhibition</h3>
          <p className="text-gray-600">Showcasing Student Innovations</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h3 className="text-2xl font-bold text-blue-700 mb-2">Cultural Fest</h3>
          <p className="text-gray-600">Embracing Diversity and Creativity</p>
        </div>
      </div>
    </div>
  );
}

export default Home;






// import React, { useState, useEffect } from 'react';
// import carousel1 from '../assets/images/sports_day.jpg';
// import carousel2 from '../assets/images/science_exhibition.jpeg';
// import carousel3 from '../assets/images/cultural_fest.jpg';
// import './Home.css';

// function Home() {
//   const images = [carousel1, carousel2, carousel3];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [images.length]);

//   const handlePrevClick = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   const handleNextClick = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   return (
//     <div className="container mx-auto mt-8 px-4">
//       <div className="text-center mb-8">
//         <h2 className="text-4xl font-bold text-blue-700 mb-4">Welcome to Springdale Public School</h2>
//         <p className="text-lg text-gray-700">"Where we nurture young minds for a brighter future."</p>
//       </div>

//       <div className="carousel relative mb-8">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className={`carousel-item absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
//           >
//             <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover rounded-lg shadow-lg" />
//             <div className="carousel-text">Text for Slide {index + 1}</div>
//           </div>
//         ))}
//         <button className="carousel-control prev" onClick={handlePrevClick}>
//           &#10094;
//         </button>
//         <button className="carousel-control next" onClick={handleNextClick}>
//           &#10095;
//         </button>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         <div className="bg-white shadow-lg rounded-lg p-6 text-center">
//           <h3 className="text-2xl font-bold text-blue-700 mb-2">Annual Sports Day</h3>
//           <p className="text-gray-600">Celebrating Excellence in Sports</p>
//         </div>
//         <div className="bg-white shadow-lg rounded-lg p-6 text-center">
//           <h3 className="text-2xl font-bold text-blue-700 mb-2">Science Exhibition</h3>
//           <p className="text-gray-600">Showcasing Student Innovations</p>
//         </div>
//         <div className="bg-white shadow-lg rounded-lg p-6 text-center">
//           <h3 className="text-2xl font-bold text-blue-700 mb-2">Cultural Fest</h3>
//           <p className="text-gray-600">Embracing Diversity and Creativity</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;













