'use client';
import React from 'react';
import YouTube from 'react-youtube';

interface YouTubeVideoItemProps {
  videoId: string;
}

const YouTubeVideoItem: React.FC<YouTubeVideoItemProps> = ({ videoId }) => {
  return (
    <div className="p-4">
      <YouTube videoId={videoId} />
    </div>
  );
};

export default YouTubeVideoItem;
