// import React, { useState } from 'react';
// import { Box, Typography } from '@mui/material';

// type Event = {
//   id: number;
//   name: string;
//   category: string;
//   imageUrl: string;
//   info: string;
// };

// const events: Event[] = [
//   {
//     id: 1,
//     date: 'September 9',
//     category: "Women's Lacrosse",
//     imageUrl: 'https://via.placeholder.com/300x250',
//     info: "Additional info about Women's Lacrosse event",
//   },
//   {
//     id: 2,
//     date: 'October 16',
//     category: 'General',
//     imageUrl: 'https://via.placeholder.com/300x250',
//     info: 'Additional info about the General event',
//   },
//   {
//     id: 3,
//     date: 'July 25',
//     category: "Women's Volleyball",
//     imageUrl: 'https://via.placeholder.com/300x250',
//     info: "Additional info about Women's Volleyball event",
//   },
//   {
//     id: 4,
//     date: 'July 26',
//     category: "Women's Basketball",
//     imageUrl: 'https://via.placeholder.com/300x250',
//     info: "Additional info about Women's Basketball event",
//   },
// ];

// const PhotoGallery: React.FC = () => {
//   const [hoveredEvent, setHoveredEvent] = useState<number | null>(null);

//   const handleMouseEnter = (eventId: number) => setHoveredEvent(eventId);
//   const handleMouseLeave = () => setHoveredEvent(null);

//   return (
//     <Box textAlign="center" p={8}>
//       <Typography variant="h4" color="error" fontWeight="bold" mb={8}>
//         PHOTO GALLERIES
//       </Typography>
//       <Box
//         sx={{
//           display: 'flex',
//           overflow: 'hidden',
//           position: 'relative',
//           '&:hover .scroll-container': {
//             animationPlayState: 'paused',
//           },
//         }}
//       >
//         <Box
//           className="scroll-container"
//           sx={{
//             display: 'flex',
//             gap: 3,
//             animation: 'scroll 20s linear infinite',
//             '@keyframes scroll': {
//               '0%': { left: '0' },
//               '100%': { transform: `translateX(-100%)` },
//             },
//           }}
//         >
//           {[...events, ...events].map((event, index) => (
//             <Box
//               key={index}
//               sx={{
//                 position: 'relative',
//                 cursor: 'pointer',
//                 flexShrink: 0,
//                 width: 300,
//                 height: 300,
//                 borderRadius: 2,
//               }}
//               onMouseEnter={() => handleMouseEnter(event.id)}
//               onMouseLeave={handleMouseLeave}
//             >
//               <img
//                 src={event.imageUrl}
//                 alt={event.category}
//                 style={{
//                   width: '100%',
//                   height: '100%',
//                   objectFit: 'cover',
//                   transition: 'filter 0.3s ease',
//                   filter: hoveredEvent === event.id ? 'brightness(50%)' : 'brightness(100%)',
//                   borderRadius: '8px',
//                 }}
//               />
//               <Box
//                 sx={{
//                   position: 'absolute',
//                   bottom: 8,
//                   left: 8,
//                   backgroundColor: 'rgba(255, 255, 255, 0.8)',
//                   color: 'text.primary',
//                   borderRadius: 1,
//                   px: 1,
//                   py: 0.5,
//                   zIndex: 2,
//                 }}
//               >
//                 <Typography variant="subtitle2" fontWeight="bold">
//                   {event.date}
//                 </Typography>
//                 <Typography variant="subtitle2" color="error" fontWeight="bold">
//                   {event.category}
//                 </Typography>
//               </Box>
//               {hoveredEvent === event.id && (
//                 <Box
//                   sx={{
//                     position: 'absolute',
//                     inset: 0,
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     backgroundColor: 'rgba(0, 0, 0, 0.7)',
//                     color: 'white',
//                     p: 2,
//                     borderRadius: '8px',
//                     transition: 'opacity 0.3s ease',
//                   }}
//                 >
//                   <Typography variant="body2" textAlign="center">
//                     {event.info}
//                   </Typography>
//                 </Box>
//               )}
//             </Box>
//           ))}
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default PhotoGallery;
import { Typography, IconButton, Box } from '@mui/material';
import { useState, useRef } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AfconWatchParty from '../../assets/images/Sports/Afcon-watch-party.jpeg';
import draftNight from '../../assets/images/Sports/draft-night.jpg';
import marathon from '../../assets/images/Sports/marathon.jpeg';
import alumnimatch from '../../assets/images/Sports/alumni-match.jpg';
import battleOfCohorts from '../../assets/images/Sports/battle-of-cohorts.jpg';
import IUG from '../../assets/images/Sports/IUG.jpg';
import Coupe from '../../assets/images/Sports/coupe.jpeg';

const PhotoGallery = () => {
  const items = [
    {
      id: 1,
      name: 'Coupe De Escriva Tournament',
      category: "Coupe De Escriva Tournament",
      imageUrl: Coupe,
      info: "The largest sports tournament at Pan-Atlantic University with events like football, volleyball, and basketball. Held from March to June.",
    },
    {
      id: 2,
      name: 'Coupe de Escriva Draft Night',
      category: 'General',
      imageUrl: draftNight,
      info: "Modeled after an NBA Draft, captains reveal player selections for the Coupe De Escriva tournament basketball teams.",
    },
    {
      id: 3,
      name: 'PAU Marathon',
      category: "PAU Marathon",
      imageUrl: marathon,
      info: "An annual 10-kilometer marathon hosted by Pan-Atlantic University.",
    },
    {
      id: 4,
      name: 'Alumni Match',
      category: "Alumni Match",
      imageUrl: alumnimatch,
      info: "A sports event where alumni return to compete in various games.",
    },
    {
      id: 5,
      name: 'Battle of Cohorts',
      category: "Battle of Cohorts",
      imageUrl: battleOfCohorts,
      info: "An event where different year groups compete in various challenges for bragging rights.",
    },
    {
      id: 6,
      name: 'Games Night',
      category: "Games Night",
      imageUrl: 'https://via.placeholder.com/300x250',
      info: "A social event with board and card games for students and staff to foster engagement on campus.",
    },
    {
      id: 7,
      name: 'Inter-University Games',
      category: "IUG",
      imageUrl: IUG,
      info: "An annual multi-sport competition among universities showcasing athletic talent from Nigerian students.",
    },
    {
      id: 8,
      name: 'Afcon Watch Party',
      category: "Afcon Watch Party",
      imageUrl: AfconWatchParty,
      info: "A social event for watching the Afcon matches together.",
    },
  ];


  // Using HTMLDivElement as the type for the ref
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Scroll functions
  const scrollLeft = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const togglePause = () => setIsPaused(!isPaused);

  return (
    <div className="carousel-container">
      <Typography variant="h4" color="primary" fontWeight="bold" mb={3} alignItems={'center'}>
        PHOTO GALLERIES
      </Typography>
      <div className="carousel-controls">
        <IconButton onClick={scrollLeft} className="arrow-btn">
          <ArrowBackIosIcon />
        </IconButton>

        <div className="carousel-track" ref={trackRef}>
          {items.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="carousel-item"
              onClick={togglePause}
            >
              <div className="slide-content">
                <img src={item.imageUrl} alt={item.category} className="carousel-image" />
                <div className="overlay">
                  <div className="overlay-text">
                    <Box>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: '16px', // small screens
                            sm: '18px', // medium screens
                            md: '20px', // large screens
                            lg: '24px', // extra large screens
                          },
                          fontWeight: 'bold', // Optional: add font weight

                        }}
                      >
                        {item.name}
                      </Typography>
                      <Typography

                        sx={{
                          fontSize: {
                            xs: '15px',
                            sm: '15px',
                            md: '15px',
                            lg: '15px',
                          },
                          color: '#FFFFFF', // Optional: set color
                          p: 1,
                        }}
                      >
                        {item.info}
                      </Typography>
                    </Box>



                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <IconButton onClick={scrollRight} className="arrow-btn">
          <ArrowForwardIosIcon />
        </IconButton>
      </div>

      <style>{`
        .carousel-container {
          width: 100%;
          max-width: 1700px;
          margin: 0 auto;
          overflow: hidden;
          border-radius: 20px;
          padding: 20px;
          position: relative;
        }

        .carousel-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .carousel-track {
          display: flex;
          overflow-x: auto;
          scroll-behavior: smooth;
          padding: 10px 0;
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE 10+ */
        }

        .carousel-track::-webkit-scrollbar {
          display: none; /* WebKit */
        }

        .carousel-item {
          flex-shrink: 0;
          width: 300px;
          margin-right: 10px;
          position: relative;
          border-radius: 10px;
        }

        .slide-content {
          position: relative;
          width: 100%;
          height: 100%;
          cursor: pointer;
          border-radius: 10px;
        }

        .carousel-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 10px;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(0, 0, 0, 0.7);
          opacity: 0;
          transition: opacity 0.3s ease;
          color: white;
          font-size: 16px;
          text-align: center;
          border-radius: 8px;
        }

        .slide-content:hover .overlay,
        .carousel-item:active .overlay {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .carousel-item {
            width: 80%;
            margin: 0 auto;
          }
          .arrow-btn {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default PhotoGallery;
