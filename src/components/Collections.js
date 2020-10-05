import React, { useEffect } from 'react';
import { fetchMovieCollections } from '../redux/actions';

import { useSelector, useDispatch } from 'react-redux';
import {
  selectMovieCollections,
  setNetflixOriginalsCollection,
  setAnimationCollection,
  setActionCollection,
  setDocumentaryCollection,
} from '../redux/movieCollectionSlice';
import CollectionRow from './CollectionRow';
import './Collections.scss';

function Collections({ genre, title, collectionUrl, showPosters }) {
  const movieCollections = useSelector(selectMovieCollections);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchMovieCollections(collectionUrl, genre).then(function (result) {
      switch (genre) {
        case 'netflixOriginals':
          dispatch(
            setNetflixOriginalsCollection({
              movieCollection: result,
            })
          );
          break;
        case 'action':
          dispatch(
            setActionCollection({
              movieCollection: result,
            })
          );
          break;
        case 'animation':
          dispatch(
            setAnimationCollection({
              movieCollection: result,
            })
          );
          break;
        case 'documentary':
          dispatch(
            setDocumentaryCollection({
              movieCollection: result,
            })
          );
          break;

        default:
          break;
      }
    });
    return () => {
      console.log('unmount....');
    };
  }, [collectionUrl, dispatch, genre]);

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
