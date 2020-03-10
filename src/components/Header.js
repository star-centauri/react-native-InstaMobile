import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

const Header: () => React$Node = ({ image, userName }) => {
    return (
        <View style={styles.header}>
            <Image source={{ uri: image }} style={styles.profilePicture} />
            <Text>{userName}</Text>
        </View>
    )
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
    }
  });

  export default Header;