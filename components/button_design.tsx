import { StyleSheet, Text, View, Button, Image, TouchableOpacity, Alert } from 'react-native';
import * as React from 'react';

export default function ButtonStyle({ onPress }: { onPress: () => void }) {

   

    return (
        <TouchableOpacity style={style.cover} onPress={onPress}>
            <Text style={style.text}>Create Dish</Text>
        </TouchableOpacity>
    );

}

const style = StyleSheet.create({
    cover: {
        height: 50,
        width: 150,
        backgroundColor: "red",
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        flex : 1,
        marginRight : 20

    },

    text : {
        color: "white",
        fontSize: 15,
        fontWeight: "900"
    }
});