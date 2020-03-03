/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState, useEffect } from 'react';
import {
  FlatList
} from 'react-native';

import Post from './src/components/Post';
import readPhotos from './src/api/feed';

const App: () => React$Node = () => {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    readPhotos(setPhotos);
  }, [])

  return (
    <FlatList 
      keyExtractor = {item => String(item.id)}
      data = {photos}
      renderItem = { ({item}) => 
      <Post 
        nomeUsuario={item.userName} 
        imgUser={item.userURL} 
        imgPost={item.url}
        description={item.description}
        countLike={item.likes}
      />
      }
    />
  );
};

export default App;
