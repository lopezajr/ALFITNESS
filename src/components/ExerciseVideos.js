import React, { useState } from 'react';
import { Typography, Box, Stack } from '@mui/material';
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [hoveredVideo, setHoveredVideo] = useState(null);

  if (!exerciseVideos.length) return <Loader />;

  const playVideo = (videoId) => {
    setSelectedVideo(videoId === selectedVideo ? null : videoId);
  };

  return (
    <Box sx={{ marginTop: { lg: '203px', xs: '20px' }, p: '20px' }}>
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, fontWeight: 700, color: 'white', mb: '33px' }}>
        Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography>
      <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0px' }, justifyContent: 'flex-start', flexWrap: 'wrap', alignItems: 'flex-start' }}>
        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <div 
            key={index} 
            style={{ 
              cursor: 'pointer', 
              marginBottom: '20px', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              maxWidth: '400px', 
              width: '100%',
              transform: hoveredVideo === index ? 'scale(1.1)' : 'scale(1)', // Apply scaling transform on hover
              transition: 'transform 0.3s ease', // Add transition for smooth animation
            }}
            onMouseEnter={() => setHoveredVideo(index)} // Set hoveredVideo state on mouse enter
            onMouseLeave={() => setHoveredVideo(null)} // Reset hoveredVideo state on mouse leave
          >
            <div style={{ position: 'relative', width: '100%' }} onClick={() => playVideo(item.video.videoId)}>
              <img style={{ borderRadius: '10%', width: '100%' }} src={item.video.thumbnails[0].url} alt={item.video.title} />
              {selectedVideo === item.video.videoId && (
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                  <iframe
                    title="video-player"
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${selectedVideo}`}
                    style={{
                      borderRadius: '10%', // Example border radius
                    }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
            <Box>
              <Typography sx={{ fontSize: { lg: '28px', xs: '18px' }, fontWeight: 600, color: 'white', mt: '10px', maxWidth: '300px', textAlign: 'center' }}>
                {item.video.title}
              </Typography>
              <Typography fontSize="14px" color="white" mt="5px" textAlign="center">
                {item.video.channelName}
              </Typography>
            </Box>
          </div>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
