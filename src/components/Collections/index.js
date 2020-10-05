import React, { useEffect } from 'react';
import CollectionRow from '../../components/CollectionRow';
import { fetchMovieCollections } from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectMovieCollections,
  setNetflixOriginalsCollection,
  setAnimationCollection,
  setActionCollection,
  setDocumentaryCollection,
} from '../../redux/movieCollectionSlice';

import './Collections.scss';

function Collections({ genre, title, collectionUrl, showPosters }) {
  const movieCollections = useSelector(selectMovieCollections);

  const dispatch = useDispatch();

  //Dispatch & Update Store
  useEffect(() => {
    fetchMovieCollections(collectionUrl, genre).then(function (result) {
      switch (genre) {
        case 'netflixOriginals':
          return dispatch(
            setNetflixOriginalsCollection({
              movieCollection: result,
            })
          );
        case 'action':
          return dispatch(
            setActionCollection({
              movieCollection: result,
            })
          );
        case 'animation':
          return dispatch(
            setAnimationCollection({
              movieCollection: result,
            })
          );
        case 'documentary':
          return dispatch(
            setDocumentaryCollection({
              movieCollection: result,
            })
          );
        default:
          return dispatch(
            setNetflixOriginalsCollection({
              movieCollection: result,
            })
          );
      }
    });
    return () => {
      console.log('unmount....');
    };
  }, [collectionUrl, dispatch, genre]);

  // Pass genres specific collections
  function getCollection() {
    switch (genre) {
      case 'netflixOriginals':
        return movieCollections.netflixOriginals;
      case 'animation':
        return movieCollections.animation;
      case 'action':
        return movieCollections.action;
      case 'documentary':
        return movieCollections.documentary;
      default:
        return movieCollections.netflixOriginals;
    }
  }

  return (
    <div className='movieListRow'>
      <h2>{title}</h2>
      <CollectionRow showPosters={showPosters} collections={getCollection()} />
    </div>
  );
}

export default Collections;
