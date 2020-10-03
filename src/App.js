import React from 'react';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Collections from './components/Collections';
import config from './api/config';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Banner />
      <Collections
        title='Netflix Originals'
        collectionUrl={config.fetchNetflixOriginals}
        showPosters={true}
      />
      <Collections title='Horror Movies' collectionUrl={config.fetchHorror} />
      <Collections title='War Movies' collectionUrl={config.fetchWar} />
      <Collections
        title='Animated Movies'
        collectionUrl={config.fetchAnimations}
      />
      <Collections
        title='Documentries'
        collectionUrl={config.fetchDocumentries}
      />
      <Collections title='Action Movies' collectionUrl={config.fetchActions} />
      <Collections title='Best Dramas' collectionUrl={config.fetchBestDramas} />
    </div>
  );
}

export default App;
