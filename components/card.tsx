import { StyleSheet, Text, View, Button, Image } from 'react-native';
import * as React from 'react';

interface CardProps {
    name: string;
    description: string;
    type: string;
    price: string;
    image : any
  }


export default function Card({ name, description, type, price, image }: CardProps) {
    return (
        <View style={style.cardOuter}>
            <Text style={style.text}>{name}</Text>

            <View style={style.imageRow}>

                <Image
                    source={image}
                    style={style.image}
                />
                <View style={style.textView}>
                    <Text>{description}</Text>
                    <Text>{type}</Text>
                    <Text>{price}</Text>
                </View>

            </View>

        </View>
    );
}

const style = StyleSheet.create({

    cardOuter: {
        height: 175,
        width: 350,
        backgroundColor: "white",
        borderRadius: 20,
        borderColor: "red",
        borderWidth: 1.5,
        padding: 10,
        marginBottom : 10


    },


    image: {
        height: 100,
        borderRadius: 10,
        flex: 1,
        margin: 5

    },

    text: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20
    },

    textView: {
        justifyContent: "space-between",
        flex: 1,
        margin: 5,
        padding: 5
    },

    imageRow: {
        flexDirection: "row",
        justifyContent: "space-between"
    }


});