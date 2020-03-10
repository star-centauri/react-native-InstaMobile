import React, { Fragment, useState } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput
} from 'react-native';

const Comment: () => React$Node = ({ comments }) => {
    const [StateComments, SetComment] = useState(comments);
    const insertComment = () => {
        fieldInput.clear();
        const newComment = {
            date: Date.now(),
            text: contentFieldInput,
            userName: "Bugan"
        }

        SetComment([...StateComments, newComment]);
    }

    let fieldInput;
    let contentFieldInput = "";

    return (
        <Fragment>
            <FlatList 
                keyExtractor = {(item, index) => index.toString()}
                data = {StateComments}
                renderItem = { ({item}) => 
                    <View style={styles.inline}>
                        <Text> {item.userName} </Text>
                        <Text> {item.text} </Text>
                    </View>
                }
            />
            <View style={styles.inline}>
                <TextInput 
                ref={(textInput) => { fieldInput = textInput }}
                onChangeText={(text) => { contentFieldInput = text }}
                placeholder={"Deixe seu comentário..."} 
                style={styles.inputComment}/>
                <TouchableOpacity onPress={insertComment}>
                    <Image source={require('../../resouces/img/send.png')} style={styles.send}/>
                </TouchableOpacity>
            </View>
        </Fragment>
    )
}

const styles = StyleSheet.create({
    inline: {
      flexDirection: 'row', 
      alignItems: 'center'
    },
    send: {
        width: 25,
        height: 25,
        marginLeft: 10,
        marginRight: 10
    },
    inputComment: {
        flex: 1
    }
});

export default Comment;