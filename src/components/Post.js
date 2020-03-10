/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';

import Header from './Header';
import Content from './Content';
import Comment from './Comment';

const Post: () => React$Node = ({ nomeUsuario, imgUser, imgPost, description, countLike, comments }) => {
  return (
    <Fragment>
        <Header image={imgUser} userName={nomeUsuario}/>
        <Content image={imgPost} description={description} countLike={countLike}/>
        <Comment comments={comments}/>
    </Fragment>
  );
};

export default Post;
