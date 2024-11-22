import { StyleSheet, Text, View, Button, Image, TouchableOpacity, Alert } from 'react-native';
import * as React from 'react';

type ButtonStyle2Props = {
    onPress: () => void;
    title: string;
  };
  
  export default function ButtonStyle2({ onPress, title }: ButtonStyle2Props) {



    return (
        <TouchableOpacity style={style.cover} onPress={onPress}>
            <Text style={style.text}>{title}</Text>
        </TouchableOpacity>
    );

}

const style = StyleSheet.create({
    cover: {
        height: 50,
        flex: 1,
        backgroundColor: "black",
        borderColor: "red",
        borderWidth: 2,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center"

    },

    text: {
        color: "white",
        fontSize: 15,
        fontWeight: "900"
    }
});