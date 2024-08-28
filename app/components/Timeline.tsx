// 'use client';

// import React from 'react';
// import Image from 'next/image';

// interface TimelineEvent {
//   title: string;
//   description: string;
//   imageSrc: string;
//   videoSrc?: string;
// }

// const events: TimelineEvent[] = [
//   {
//     title: "Na Pali Coast Boat Tour",
//     description: "Explored the stunning Na Pali coastline by boat, witnessing towering cliffs and hidden beaches.",
//     imageSrc: "/images/napali-coast.jpg",
//     videoSrc: "/videos/napali-tour.mp4"
//   },
//   {
//     title: "Kauai Air Tour",
//     description: "Soared above the island for breathtaking aerial views of Kauai's diverse landscapes.",
//     imageSrc: "/images/air-tour.jpg",
//     videoSrc: "/videos/air-tour.mp4"
//   },
//   // Add more events...
// ];

// const Timeline: React.FC = () => {
//   return (
//     <section id="journey" className="py-16 bg-gray-100">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">My Kauai Journey</h2>
//         <div className="space-y-16">
//           {events.map((event, index) => (
//             <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center bg-white rounded-lg shadow-md overflow-hidden`}>
//               <div className="w-full md:w-1/2 relative h-64 md:h-auto">
//                 <Image
//                   src={event.imageSrc}
//                   alt={event.title}
//                   layout="fill"
//                   objectFit="cover"
//                 />
//               </div>
//               <div className="w-full md:w-1/2 p-8">
//                 <h3 className="text-2xl font-bold mb-4 text-gray-800">{event.title}</h3>
//                 <p className="mb-4 text-gray-600">{event.description}</p>
//                 {event.videoSrc && (
//                   <video controls className="w-full rounded-lg shadow-lg">
//                     <source src={event.videoSrc} type="video/mp4" />
//                     Your browser does not support the video tag.
//                   </video>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Timeline;