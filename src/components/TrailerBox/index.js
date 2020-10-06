import React from 'react';
import YouTube from 'react-youtube';

function TrailerBox({ className, trailerUrl, opts }) {
  return (
    <div className={className}>
      <YouTube videoId={trailerUrl} opts={opts} />
    </div>
  );
}

export default TrailerBox;
