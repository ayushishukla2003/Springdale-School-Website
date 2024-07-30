// import React from 'react';

// function Gallery() {
//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">Gallery</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         <img src="/src/assets/images/sports_day.jpg" alt="Sports Day" className="w-full h-auto" />
//         <img src="/src/assets/images/science_exhibition.jpeg" alt="Science Exhibition" className="w-full h-auto" />
//         <img src="/src/assets/images/cultural_fest.jpg" alt="Cultural Fest" className="w-full h-auto" />
//         <img src="/src/assets/images/classroom.jpg" alt="Classroom" className="w-full h-auto" />
//         <img src="/src/assets/images/library.jpg" alt="Library" className="w-full h-auto" />
//       </div>
//       <h3 className="text-xl font-bold mt-4">Videos:</h3>
//       <video controls className="w-full h-auto mb-4">
//         <source src="/src/assets/videos/school_tour.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <video controls className="w-full h-auto">
//         <source src="/src/assets/videos/annual_function.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//     </div>
//   );
// }

// export default Gallery;















// import React, { useState } from 'react';

// const galleryItems = [
//   { id: 1, type: 'Sports Day', date: '2024-05-01', src: '/src/assets/images/sports_day.jpg', alt: 'Sports Day', isVideo: false },
//   { id: 2, type: 'Science Exhibition', date: '2024-06-15', src: '/src/assets/images/science_exhibition.jpeg', alt: 'Science Exhibition', isVideo: false },
//   { id: 3, type: 'Cultural Fest', date: '2024-07-10', src: '/src/assets/images/cultural_fest.jpg', alt: 'Cultural Fest', isVideo: false },
//   { id: 4, type: 'Classroom', date: '2024-08-01', src: '/src/assets/images/classroom.jpg', alt: 'Classroom', isVideo: false },
//   { id: 5, type: 'Library', date: '2024-09-15', src: '/src/assets/images/library.jpg', alt: 'Library', isVideo: false },
//   { id: 6, type: 'School Tour', date: '2024-04-01', src: '/src/assets/videos/school_tour.mp4', alt: 'School Tour', isVideo: true },
//   { id: 7, type: 'Annual Function', date: '2024-11-01', src: '/src/assets/videos/annual_function.mp4', alt: 'Annual Function', isVideo: true },
// ];

// function Gallery() {
//   const [filterType, setFilterType] = useState('');
//   const [filterDate, setFilterDate] = useState('');

//   const handleTypeChange = (event) => {
//     setFilterType(event.target.value);
//   };

//   const handleDateChange = (event) => {
//     setFilterDate(event.target.value);
//   };

//   const filteredItems = galleryItems.filter((item) => {
//     const matchesType = filterType === '' || item.type === filterType;
//     const matchesDate = filterDate === '' || item.date === filterDate;
//     return matchesType && matchesDate;
//   });

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">Gallery</h2>

//       <div className="mb-4">
//         <label className="mr-2">Filter by Event Type:</label>
//         <select value={filterType} onChange={handleTypeChange} className="mr-4 p-2 border border-gray-300 rounded">
//           <option value="">All</option>
//           <option value="Sports Day">Sports Day</option>
//           <option value="Science Exhibition">Science Exhibition</option>
//           <option value="Cultural Fest">Cultural Fest</option>
//           <option value="Classroom">Classroom</option>
//           <option value="Library">Library</option>
//           <option value="School Tour">School Tour</option>
//           <option value="Annual Function">Annual Function</option>
//         </select>

//         <label className="mr-2">Filter by Date:</label>
//         <input type="date" value={filterDate} onChange={handleDateChange} className="p-2 border border-gray-300 rounded" />
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {filteredItems.map((item) => (
//           item.isVideo ? (
//             <video key={item.id} controls className="w-full h-auto mb-4">
//               <source src={item.src} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           ) : (
//             <img key={item.id} src={item.src} alt={item.alt} className="w-full h-auto" />
//           )
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Gallery;














// import React, { useState } from 'react';

// const galleryItems = [
//   { id: 1, type: 'Sports Day', date: '2024-05-01', src: '/src/assets/images/sports_day.jpg', alt: 'Sports Day', isVideo: false },
//   { id: 2, type: 'Science Exhibition', date: '2024-06-15', src: '/src/assets/images/science_exhibition.jpeg', alt: 'Science Exhibition', isVideo: false },
//   { id: 3, type: 'Cultural Fest', date: '2024-07-10', src: '/src/assets/images/cultural_fest.jpg', alt: 'Cultural Fest', isVideo: false },
//   { id: 4, type: 'Classroom', date: '2024-03-01', src: '/src/assets/images/classroom.jpg', alt: 'Classroom', isVideo: false },
//   { id: 5, type: 'Library', date: '2024-04-15', src: '/src/assets/images/library.jpg', alt: 'Library', isVideo: false },
//   { id: 6, type: 'School Tour', date: '2024-04-01', src: '/src/assets/videos/school_tour.mp4', alt: 'School Tour', isVideo: true },
//   { id: 7, type: 'Annual Function', date: '2024-7-01', src: '/src/assets/videos/annual_function.mp4', alt: 'Annual Function', isVideo: true },
// ];

// function Gallery() {
//   const [filterType, setFilterType] = useState('');
//   const [filterDate, setFilterDate] = useState('');

//   const handleTypeChange = (event) => {
//     setFilterType(event.target.value);
//   };

//   const handleDateChange = (event) => {
//     setFilterDate(event.target.value);
//   };

//   const uniqueDates = [...new Set(galleryItems.map(item => item.date))];

//   const filteredItems = galleryItems.filter((item) => {
//     const matchesType = filterType === '' || item.type === filterType;
//     const matchesDate = filterDate === '' || item.date === filterDate;
//     return matchesType && matchesDate;
//   });

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">Gallery</h2>

//       <div className="mb-4">
//         <label className="mr-2">Filter by Event Type:</label>
//         <select value={filterType} onChange={handleTypeChange} className="mr-4 p-2 border border-gray-300 rounded">
//           <option value="">All</option>
//           <option value="Sports Day">Sports Day</option>
//           <option value="Science Exhibition">Science Exhibition</option>
//           <option value="Cultural Fest">Cultural Fest</option>
//           <option value="Classroom">Classroom</option>
//           <option value="Library">Library</option>
//           <option value="School Tour">School Tour</option>
//           <option value="Annual Function">Annual Function</option>
//         </select>

//         <label className="mr-2">Filter by Date:</label>
//         <select value={filterDate} onChange={handleDateChange} className="p-2 border border-gray-300 rounded">
//           <option value="">All</option>
//           {uniqueDates.map(date => (
//             <option key={date} value={date}>{date}</option>
//           ))}
//         </select>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {filteredItems.map((item) => (
//           item.isVideo ? (
//             <video key={item.id} controls className="w-full h-auto mb-4">
//               <source src={item.src} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           ) : (
//             <img key={item.id} src={item.src} alt={item.alt} className="w-full h-auto" />
//           )
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Gallery;


















import React, { useState } from 'react';

const galleryItems = [
  { id: 1, type: 'Sports Day', date: '2022-05-01', src: '/src/assets/images/sports_day.jpg', alt: 'Sports Day', isVideo: false },
  { id: 2, type: 'Science Exhibition', date: '2024-06-15', src: '/src/assets/images/science_exhibition.jpeg', alt: 'Science Exhibition', isVideo: false },
  { id: 3, type: 'Cultural Fest', date: '2024-07-10', src: '/src/assets/images/cultural_fest.jpg', alt: 'Cultural Fest', isVideo: false },
  { id: 4, type: 'Classroom', date: '2024-08-01', src: '/src/assets/images/classroom.jpg', alt: 'Classroom', isVideo: false },
  { id: 5, type: 'Library', date: '2024-09-15', src: '/src/assets/images/library.jpg', alt: 'Library', isVideo: false },
  { id: 6, type: 'School Tour', date: '2024-04-01', src: '/src/assets/videos/school_tour.mp4', alt: 'School Tour', isVideo: true },
  { id: 7, type: 'Annual Function', date: '2023-11-01', src: '/src/assets/videos/annual_function.mp4', alt: 'Annual Function', isVideo: true },
  // Add more items as needed
];

const getTimePeriod = (dateString) => {
  const today = new Date();
  const eventDate = new Date(dateString);
  const sixMonthsAgo = new Date(today.setMonth(today.getMonth() - 6));
  const lastYear = new Date(today.getFullYear() - 1, 0, 1);

  if (eventDate >= sixMonthsAgo) return 'Recent';
  if (eventDate >= lastYear && eventDate < sixMonthsAgo) return 'Previous Year';
  return 'Older';
};

function Gallery() {
  const [filterType, setFilterType] = useState('');
  const [filterDate, setFilterDate] = useState('');
  const [filterTimePeriod, setFilterTimePeriod] = useState('');

  const handleTypeChange = (event) => {
    setFilterType(event.target.value);
  };

  const handleDateChange = (event) => {
    setFilterDate(event.target.value);
  };

  const handleTimePeriodChange = (event) => {
    setFilterTimePeriod(event.target.value);
  };

  const uniqueDates = [...new Set(galleryItems.map(item => item.date))];
  const timePeriods = ['Recent', 'Previous Year', 'Older'];

  const filteredItems = galleryItems.filter((item) => {
    const matchesType = filterType === '' || item.type === filterType;
    const matchesDate = filterDate === '' || item.date === filterDate;
    const matchesTimePeriod = filterTimePeriod === '' || getTimePeriod(item.date) === filterTimePeriod;
    return matchesType && matchesDate && matchesTimePeriod;
  });

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Gallery</h2>

      <div className="mb-4">
        <label className="mr-2">Filter by Event Type:</label>
        <select value={filterType} onChange={handleTypeChange} className="mr-4 p-2 border border-gray-300 rounded">
          <option value="">All</option>
          <option value="Sports Day">Sports Day</option>
          <option value="Science Exhibition">Science Exhibition</option>
          <option value="Cultural Fest">Cultural Fest</option>
          <option value="Classroom">Classroom</option>
          <option value="Library">Library</option>
          <option value="School Tour">School Tour</option>
          <option value="Annual Function">Annual Function</option>
        </select>

        <label className="mr-2">Filter by Date:</label>
        <select value={filterDate} onChange={handleDateChange} className="mr-4 p-2 border border-gray-300 rounded">
          <option value="">All</option>
          {uniqueDates.map(date => (
            <option key={date} value={date}>{date}</option>
          ))}
        </select>

        <label className="mr-2">Filter by Time Period:</label>
        <select value={filterTimePeriod} onChange={handleTimePeriodChange} className="p-2 border border-gray-300 rounded">
          <option value="">All</option>
          {timePeriods.map(period => (
            <option key={period} value={period}>{period}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map((item) => (
          item.isVideo ? (
            <video key={item.id} controls className="w-full h-auto mb-4">
              <source src={item.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img key={item.id} src={item.src} alt={item.alt} className="w-full h-auto" />
          )
        ))}
      </div>
    </div>
  );
}

export default Gallery;
