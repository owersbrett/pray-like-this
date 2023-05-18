'use client';
import { useMediaQuery } from '@react-hook/media-query';
import React from 'react';

interface YouTubeProps {
  videoId: string;
}

const YouTubeVideo: React.FC<YouTubeProps> = ({ videoId }) => {
  const isWeb = useMediaQuery('(min-width: 768px)'); // Adjust the breakpoint to your needs

  return(
    <div className='p-8'>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;

