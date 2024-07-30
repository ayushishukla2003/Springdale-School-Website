














// import React from 'react';
// import { Link } from 'react-router-dom';

// function Header() {
//   return (
//     <header className="bg-blue-700 text-white py-4 shadow-lg">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-2xl font-bold">Springdale Public School</h1>
//         <nav className="space-x-4">
//           <Link to="/" className="hover:underline">Home</Link>
//           <Link to="/about" className="hover:underline">About Us</Link>
//           <Link to="/academics" className="hover:underline">Academics</Link>
//           <Link to="/admissions" className="hover:underline">Admissions</Link>
//           <Link to="/faculty" className="hover:underline">Faculty</Link>
//           <Link to="/students" className="hover:underline">Students</Link>
//           <Link to="/gallery" className="hover:underline">Gallery</Link>
//           <Link to="/contact" className="hover:underline">Contact Us</Link>
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Header;








// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FiMenu, FiX } from 'react-icons/fi';

// function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className="bg-blue-700 text-white py-4 shadow-lg">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-2xl font-bold">Springdale Public School</h1>
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="text-3xl focus:outline-none">
//             {isMenuOpen ? <FiX /> : <FiMenu />}
//           </button>
//         </div>
//         <nav className={`md:flex space-x-4 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
//           <Link to="/" className="block mt-2 md:mt-0 md:inline-block hover:underline">Home</Link>
//           <Link to="/about" className="block mt-2 md:mt-0 md:inline-block hover:underline">About Us</Link>
//           <Link to="/academics" className="block mt-2 md:mt-0 md:inline-block hover:underline">Academics</Link>
//           <Link to="/admissions" className="block mt-2 md:mt-0 md:inline-block hover:underline">Admissions</Link>
//           <Link to="/faculty" className="block mt-2 md:mt-0 md:inline-block hover:underline">Faculty</Link>
//           <Link to="/students" className="block mt-2 md:mt-0 md:inline-block hover:underline">Students</Link>
//           <Link to="/gallery" className="block mt-2 md:mt-0 md:inline-block hover:underline">Gallery</Link>
//           <Link to="/contact" className="block mt-2 md:mt-0 md:inline-block hover:underline">Contact Us</Link>
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Header;










// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FiMenu, FiX } from 'react-icons/fi';

// function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className="bg-blue-700 text-white py-4 shadow-lg">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-2xl font-bold">Springdale Public School</h1>
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="text-3xl focus:outline-none">
//             {isMenuOpen ? <FiX /> : <FiMenu />}
//           </button>
//         </div>
//         <nav className={`fixed top-0 left-0 h-full w-64 bg-blue-700 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:static md:flex md:items-center md:space-x-4 md:w-auto`}>
//           <div className="p-4 md:hidden">
//             <button onClick={toggleMenu} className="text-3xl text-white focus:outline-none">
//               <FiX />
//             </button>
//           </div>
//           <Link to="/" className="block mt-2 md:mt-0 md:inline-block px-4 py-2 hover:underline">Home</Link>
//           <Link to="/about" className="block mt-2 md:mt-0 md:inline-block px-4 py-2 hover:underline">About Us</Link>
//           <Link to="/academics" className="block mt-2 md:mt-0 md:inline-block px-4 py-2 hover:underline">Academics</Link>
//           <Link to="/admissions" className="block mt-2 md:mt-0 md:inline-block px-4 py-2 hover:underline">Admissions</Link>
//           <Link to="/faculty" className="block mt-2 md:mt-0 md:inline-block px-4 py-2 hover:underline">Faculty</Link>
//           <Link to="/students" className="block mt-2 md:mt-0 md:inline-block px-4 py-2 hover:underline">Students</Link>
//           <Link to="/gallery" className="block mt-2 md:mt-0 md:inline-block px-4 py-2 hover:underline">Gallery</Link>
//           <Link to="/contact" className="block mt-2 md:mt-0 md:inline-block px-4 py-2 hover:underline">Contact Us</Link>
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Header;























// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FiMenu, FiX } from 'react-icons/fi';

// function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className="bg-blue-700 text-white py-4 shadow-lg relative z-10">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-2xl font-bold">Springdale Public School</h1>
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="text-3xl focus:outline-none">
//             {isMenuOpen ? <FiX /> : <FiMenu />}
//           </button>
//         </div>
//         <nav className="hidden md:flex space-x-4">
//           <Link to="/" className="hover:underline">Home</Link>
//           <Link to="/about" className="hover:underline">About Us</Link>
//           <Link to="/academics" className="hover:underline">Academics</Link>
//           <Link to="/admissions" className="hover:underline">Admissions</Link>
//           <Link to="/faculty" className="hover:underline">Faculty</Link>
//           <Link to="/students" className="hover:underline">Students</Link>
//           <Link to="/gallery" className="hover:underline">Gallery</Link>
//           <Link to="/contact" className="hover:underline">Contact Us</Link>
//         </nav>
//       </div>
//       <nav className={`fixed top-0 left-0 h-full w-64 bg-blue-700 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden z-20`}>
//         <div className="p-4">
//           <button onClick={toggleMenu} className="text-3xl text-white focus:outline-none">
//             <FiX />
//           </button>
//         </div>
//         <Link to="/" className="block mt-2 px-4 py-2 hover:underline" onClick={toggleMenu}>Home</Link>
//         <Link to="/about" className="block mt-2 px-4 py-2 hover:underline" onClick={toggleMenu}>About Us</Link>
//         <Link to="/academics" className="block mt-2 px-4 py-2 hover:underline" onClick={toggleMenu}>Academics</Link>
//         <Link to="/admissions" className="block mt-2 px-4 py-2 hover:underline" onClick={toggleMenu}>Admissions</Link>
//         <Link to="/faculty" className="block mt-2 px-4 py-2 hover:underline" onClick={toggleMenu}>Faculty</Link>
//         <Link to="/students" className="block mt-2 px-4 py-2 hover:underline" onClick={toggleMenu}>Students</Link>
//         <Link to="/gallery" className="block mt-2 px-4 py-2 hover:underline" onClick={toggleMenu}>Gallery</Link>
//         <Link to="/contact" className="block mt-2 px-4 py-2 hover:underline" onClick={toggleMenu}>Contact Us</Link>
//       </nav>
//     </header>
//   );
// }

// export default Header;

















// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FiMenu, FiX } from 'react-icons/fi';

// function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className="bg-blue-700 text-white py-4 shadow-lg relative z-50">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-2xl font-bold">Springdale Public School</h1>
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="text-3xl focus:outline-none">
//             {isMenuOpen ? <FiX /> : <FiMenu />}
//           </button>
//         </div>
//         <nav className="hidden md:flex space-x-4">
//           <Link to="/" className="hover:underline">Home</Link>
//           <Link to="/about" className="hover:underline">About Us</Link>
//           <Link to="/academics" className="hover:underline">Academics</Link>
//           <Link to="/admissions" className="hover:underline">Admissions</Link>
//           <Link to="/faculty" className="hover:underline">Faculty</Link>
//           <Link to="/students" className="hover:underline">Students</Link>
//           <Link to="/gallery" className="hover:underline">Gallery</Link>
//           <Link to="/contact" className="hover:underline">Contact Us</Link>
//         </nav>
//       </div>
//       <nav className={`fixed top-0 left-0 h-full w-64 bg-blue-700 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden z-50`}>
//         <div className="p-4">
//           <button onClick={toggleMenu} className="text-3xl text-white focus:outline-none">
//             <FiX />
//           </button>
//         </div>
//         <Link to="/" className="block mt-2 px-4 py-2 hover:underline" onClick={toggleMenu}>Home</Link>
//         <Link to="/about" className="block mt-2 px-4 py-2 hover:underline" onClick={toggleMenu}>About Us</Link>
//         <Link to="/academics" className="block mt-2 px-4 py-2 hover:underline" onClick={toggleMenu}>Academics</Link>
//         <Link to="/admissions" className="block mt-2 px-4 py-2 hover:underline" onClick={toggleMenu}>Admissions</Link>
//         <Link to="/faculty" className="block mt-2 px-4 py-2 hover:underline" onClick={toggleMenu}>Faculty</Link>
//         <Link to="/students" className="block mt-2 px-4 py-2 hover:underline" onClick={toggleMenu}>Students</Link>
//         <Link to="/gallery" className="block mt-2 px-4 py-2 hover:underline" onClick={toggleMenu}>Gallery</Link>
//         <Link to="/contact" className="block mt-2 px-4 py-2 hover:underline" onClick={toggleMenu}>Contact Us</Link>
//       </nav>
//     </header>
//   );
// }

// export default Header;









































































// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FiMenu, FiX } from 'react-icons/fi';

// function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className="bg-blue-700 text-white py-4 shadow-lg relative z-50">
//       <div className="container mx-auto flex justify-between items-center px-4 lg:px-8">
//         <h1 className="text-xl lg:text-2xl font-bold whitespace-nowrap">Springdale Public School</h1>
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="text-3xl focus:outline-none">
//             {isMenuOpen ? <FiX /> : <FiMenu />}
//           </button>
//         </div>
//         <nav className="hidden md:flex space-x-4 lg:space-x-6 text-base lg:text-lg">
//           <Link to="/" className="hover:underline">Home</Link>
//           <Link to="/about" className="hover:underline">About Us</Link>
//           <Link to="/academics" className="hover:underline">Academics</Link>
//           <Link to="/admissions" className="hover:underline">Admissions</Link>
//           <Link to="/faculty" className="hover:underline">Faculty</Link>
//           <Link to="/students" className="hover:underline">Students</Link>
//           <Link to="/gallery" className="hover:underline">Gallery</Link>
//           <Link to="/contact" className="hover:underline">Contact Us</Link>
//         </nav>
//       </div>
//       <nav className={`fixed top-0 left-0 h-full w-64 bg-blue-700 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden z-50`}>
//         <div className="p-4">
//           <button onClick={toggleMenu} className="text-3xl text-white focus:outline-none">
//             <FiX />
//           </button>
//         </div>
//         <Link to="/" className="block mt-2 px-4 py-2 hover:underline" onClick={toggleMenu}>Home</Link>
//         <Link to="/about" className="block mt-2 px-4 py-2 hover:underline" onClick={toggleMenu}>About Us</Link>
//         <Link to="/academics" className="block mt-2 px-4 py-2 hover:underline" onClick={toggleMenu}>Academics</Link>
//         <Link to="/admissions" className="block mt-2 px-4 py-2 hover:underline" onClick={toggleMenu}>Admissions</Link>
//         <Link to="/faculty" className="block mt-2 px-4 py-2 hover:underline" onClick={toggleMenu}>Faculty</Link>
//         <Link to="/students" className="block mt-2 px-4 py-2 hover:underline" onClick={toggleMenu}>Students</Link>
//         <Link to="/gallery" className="block mt-2 px-4 py-2 hover:underline" onClick={toggleMenu}>Gallery</Link>
//         <Link to="/contact" className="block mt-2 px-4 py-2 hover:underline" onClick={toggleMenu}>Contact Us</Link>
//       </nav>
//     </header>
//   );
// }

// export default Header;


































// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FiMenu, FiX } from 'react-icons/fi';

// function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className="bg-blue-700 text-white py-4 shadow-lg relative z-50">
//       <div className="container mx-auto flex justify-between items-center px-4 lg:px-8">
//         <h1 className="text-xl lg:text-2xl font-bold whitespace-nowrap">Springdale Public School</h1>
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="text-3xl focus:outline-none">
//             {isMenuOpen ? <FiX /> : <FiMenu />}
//           </button>
//         </div>
//         <nav className="hidden md:flex space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-6 text-sm sm:text-base md:text-lg">
//           <Link to="/" className="hover:underline">Home</Link>
//           <Link to="/about" className="hover:underline">About Us</Link>
//           <Link to="/academics" className="hover:underline">Academics</Link>
//           <Link to="/admissions" className="hover:underline">Admissions</Link>
//           <Link to="/faculty" className="hover:underline">Faculty</Link>
//           <Link to="/students" className="hover:underline">Students</Link>
//           <Link to="/gallery" className="hover:underline">Gallery</Link>
//           <Link to="/contact" className="hover:underline">Contact Us</Link>
//         </nav>
//       </div>
//       <nav className={`fixed top-0 left-0 h-full w-64 bg-blue-700 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden z-50`}>
//         <div className="p-4">
//           <button onClick={toggleMenu} className="text-3xl text-white focus:outline-none">
//             <FiX />
//           </button>
//         </div>
//         <Link to="/" className="block mt-2 px-4 py-2 hover:underline" onClick={toggleMenu}>Home</Link>
//         <Link to="/about" className="block mt-2 px-4 py-2 hover:underline" onClick={toggleMenu}>About Us</Link>
//         <Link to="/academics" className="block mt-2 px-4 py-2 hover:underline" onClick={toggleMenu}>Academics</Link>
//         <Link to="/admissions" className="block mt-2 px-4 py-2 hover:underline" onClick={toggleMenu}>Admissions</Link>
//         <Link to="/faculty" className="block mt-2 px-4 py-2 hover:underline" onClick={toggleMenu}>Faculty</Link>
//         <Link to="/students" className="block mt-2 px-4 py-2 hover:underline" onClick={toggleMenu}>Students</Link>
//         <Link to="/gallery" className="block mt-2 px-4 py-2 hover:underline" onClick={toggleMenu}>Gallery</Link>
//         <Link to="/contact" className="block mt-2 px-4 py-2 hover:underline" onClick={toggleMenu}>Contact Us</Link>
//       </nav>
//     </header>
//   );
// }

// export default Header;







































// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FiMenu, FiX } from 'react-icons/fi';

// function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className="bg-blue-700 text-white py-4 shadow-lg relative z-50">
//       <div className="container mx-auto flex justify-between items-center px-4 lg:px-8">
//         <h1 className="text-xl lg:text-2xl font-bold whitespace-nowrap">Springdale Public School</h1>
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="text-3xl focus:outline-none">
//             {isMenuOpen ? <FiX /> : <FiMenu />}
//           </button>
//         </div>
//         <nav className="hidden md:flex space-x-4">
//           <Link to="/" className="hover:underline text-sm lg:text-base">Home</Link>
//           <Link to="/about" className="hover:underline text-sm lg:text-base">About Us</Link>
//           <Link to="/academics" className="hover:underline text-sm lg:text-base">Academics</Link>
//           <Link to="/admissions" className="hover:underline text-sm lg:text-base">Admissions</Link>
//           <Link to="/faculty" className="hover:underline text-sm lg:text-base">Faculty</Link>
//           <Link to="/students" className="hover:underline text-sm lg:text-base">Students</Link>
//           <Link to="/gallery" className="hover:underline text-sm lg:text-base">Gallery</Link>
//           <Link to="/contact" className="hover:underline text-sm lg:text-base">Contact Us</Link>
//         </nav>
//       </div>
//       <nav className={`fixed top-0 left-0 h-full w-64 bg-blue-700 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden z-50`}>
//         <div className="p-4">
//           <button onClick={toggleMenu} className="text-3xl text-white focus:outline-none">
//             <FiX />
//           </button>
//         </div>
//         <Link to="/" className="block mt-2 px-4 py-2 hover:underline" onClick={toggleMenu}>Home</Link>
//         <Link to="/about" className="block mt-2 px-4 py-2 hover:underline" onClick={toggleMenu}>About Us</Link>
//         <Link to="/academics" className="block mt-2 px-4 py-2 hover:underline" onClick={toggleMenu}>Academics</Link>
//         <Link to="/admissions" className="block mt-2 px-4 py-2 hover:underline" onClick={toggleMenu}>Admissions</Link>
//         <Link to="/faculty" className="block mt-2 px-4 py-2 hover:underline" onClick={toggleMenu}>Faculty</Link>
//         <Link to="/students" className="block mt-2 px-4 py-2 hover:underline" onClick={toggleMenu}>Students</Link>
//         <Link to="/gallery" className="block mt-2 px-4 py-2 hover:underline" onClick={toggleMenu}>Gallery</Link>
//         <Link to="/contact" className="block mt-2 px-4 py-2 hover:underline" onClick={toggleMenu}>Contact Us</Link>
//       </nav>
//     </header>
//   );
// }

// export default Header;























import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-700 text-white py-4 shadow-lg relative z-50">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-8">
        <h1 className="text-lg md:text-xl lg:text-2xl font-bold whitespace-nowrap">Springdale Public School</h1>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-3xl focus:outline-none">
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
        <nav className="hidden md:flex flex-wrap space-x-2 lg:space-x-4">
          <Link to="/" className="hover:underline text-xs md:text-sm lg:text-base">Home</Link>
          <Link to="/about" className="hover:underline text-xs md:text-sm lg:text-base">About Us</Link>
          <Link to="/academics" className="hover:underline text-xs md:text-sm lg:text-base">Academics</Link>
          <Link to="/admissions" className="hover:underline text-xs md:text-sm lg:text-base">Admissions</Link>
          <Link to="/faculty" className="hover:underline text-xs md:text-sm lg:text-base">Faculty</Link>
          <Link to="/students" className="hover:underline text-xs md:text-sm lg:text-base">Students</Link>
          <Link to="/gallery" className="hover:underline text-xs md:text-sm lg:text-base">Gallery</Link>
          <Link to="/contact" className="hover:underline text-xs md:text-sm lg:text-base">Contact Us</Link>
        </nav>
      </div>
      <nav className={`fixed top-0 left-0 h-full w-64 bg-blue-700 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden z-50`}>
        <div className="p-4">
          <button onClick={toggleMenu} className="text-3xl text-white focus:outline-none">
            <FiX />
          </button>
        </div>
        <Link to="/" className="block mt-2 px-4 py-2 hover:underline" onClick={toggleMenu}>Home</Link>
        <Link to="/about" className="block mt-2 px-4 py-2 hover:underline" onClick={toggleMenu}>About Us</Link>
        <Link to="/academics" className="block mt-2 px-4 py-2 hover:underline" onClick={toggleMenu}>Academics</Link>
        <Link to="/admissions" className="block mt-2 px-4 py-2 hover:underline" onClick={toggleMenu}>Admissions</Link>
        <Link to="/faculty" className="block mt-2 px-4 py-2 hover:underline" onClick={toggleMenu}>Faculty</Link>
        <Link to="/students" className="block mt-2 px-4 py-2 hover:underline" onClick={toggleMenu}>Students</Link>
        <Link to="/gallery" className="block mt-2 px-4 py-2 hover:underline" onClick={toggleMenu}>Gallery</Link>
        <Link to="/contact" className="block mt-2 px-4 py-2 hover:underline" onClick={toggleMenu}>Contact Us</Link>
      </nav>
    </header>
  );
}

export default Header;
