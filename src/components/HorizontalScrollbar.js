import React from 'react';
import { Box } from '@mui/material';

import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  const scrollbarStyle = `
    .horizontal-scrollbar {
      overflow-x: auto;
      overflow-y: hidden; /* Hide vertical scrollbar */
      white-space: nowrap;
      cursor: pointer; /* Change cursor to pointer */
    }

    .horizontal-scrollbar::-webkit-scrollbar {
      width: 10px; /* Width of the scrollbar */
    }
    .horizontal-scrollbar::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.1); /* Track color with opacity */
    }

    .horizontal-scrollbar::-webkit-scrollbar-thumb {
      background-color: rgba(255, 0, 0, 0.7); /* Thumb color with opacity */
      border-radius: 5px; /* Roundness of the thumb */
    }

    .scroll-content {
      display: flex;
    }

    .scroll-item {
      margin: 0 10px; /* Adjust spacing between items */
    }
  `;

  return (
    <>
      <style>{scrollbarStyle}</style>
      <div className="horizontal-scrollbar">
        <div className="scroll-content">
          {data.map((item) => (
            <Box
              key={item.id || item}
              itemID={item.id || item}
              title={item.id || item}
              className="scroll-item"
            >
              {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} /> }
            </Box>
          ))}
        </div>
      </div>
    </>
  );
};

export default HorizontalScrollbar;
