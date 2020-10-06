import React from 'react';
import Banner from '../../components/Banner';
import Collections from '../../components/Collections';
import { genres } from '../../appConfig';
function Home() {
  return (
    <div>
      <Banner />
      {genres.map((genre, i) => (
        <Collections
          key={genre.genre}
          genre={genre.genre}
          title={genre.title}
          collectionUrl={genre.collectionUrl}
          showPosters={genre.showPosters}
        />
      ))}
    </div>
  );
}

export default Home;
