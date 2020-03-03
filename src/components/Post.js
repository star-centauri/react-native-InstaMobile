/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet
} from 'react-native';

var width = Dimensions.get('screen').width;

const Post: () => React$Node = ({ nomeUsuario, imgUser, imgPost, description, countLike }) => {
  return (
    <Fragment>
        <View style={styles.header}>
            <Image source={{ uri: imgUser }} style={styles.profilePicture} />
            <Text>{nomeUsuario}</Text>
        </View>
        <Image source={{ uri: imgPost }} style={styles.photoPost} />
        <Text>{description}</Text>
        <Image source={captureImgLike(countLike)} style={styles.like}/>
    </Fragment>
  );
};

const captureImgLike = (countLike) => {
  if (countLike) {
    return require('../../resouces/img/s2-checked.png');
  }
  return require('../../resouces/img/s2.png');
}

const styles = StyleSheet.create({
  header: { 
    margin: 10, 
    flexDirection: 'row', 
    alignItems: 'center'
  },
  profilePicture: {
    marginRight: 10, 
    borderRadius: 20, 
    width: 50, 
    height: 50
  },
  photoPost: {
    width: width, 
    height: width
  },
  like: {
    width: 40, 
    height: 40,
    marginLeft: 10
  }
});

export default Post;
