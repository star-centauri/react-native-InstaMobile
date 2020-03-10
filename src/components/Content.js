import React, { Fragment, useState } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import {captureImgLike, clickLikePhoto} from '../api/likes';

var width = Dimensions.get('screen').width;

const Content: () => React$Node = ({image, description, countLike }) => {
    const [myLike, setMyLike] = useState(false);
    const [likes, setLikes] = useState(countLike);

    const likePhoto = () => {
        const [stateLike, count] = clickLikePhoto(likes, myLike);
    
        setLikes(count);
        setMyLike(stateLike);
    }

    return (
        <Fragment>
            <Image source={{ uri: image }} style={styles.photoPost} />
            <Text>{description}</Text>

            <View style={styles.viewAction}>
            <TouchableOpacity onPress={likePhoto}>
                <Image source={captureImgLike(myLike)} style={styles.like}/>
            </TouchableOpacity>
            <Text>Curtidas {likes}</Text>
            </View>
        </Fragment>
    )
}

const styles = StyleSheet.create({
    photoPost: {
      width: width, 
      height: width
    },
    like: {
      width: 40, 
      height: 40,
      marginLeft: 10
    },
    viewAction: {
      flexDirection: 'row', 
      alignItems: 'center'
    }
  });

export default Content;