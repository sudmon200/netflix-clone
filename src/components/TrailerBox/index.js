import React from 'react';
import YouTube from 'react-youtube';

function TrailerBox({ trailerUrl, opts }) {
  return (
    <div>
      <YouTube
        videoId={trailerUrl}
        opts={opts}
        className='movieListRow__youTube'
      />
    </div>
  );
}

export default TrailerBox;
