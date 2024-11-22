import { StyleSheet, Text, View, Button, Image } from 'react-native';
import * as React from 'react';


interface TotalProps {
    total: string;
  
  }

export default function Total({total} :TotalProps) {
    return (
        <View style={style.container}>

            <View style={style.logo}>

                <Image
                    source={require('../images/image2.png')}  // Add your image URL or local image path
                    // (Stockcake,2024);
                    style={style.logoImage}
                />


            </View>

            <View style={style.total}>
                <View style={style.around}><Text style={style.text}>{total}</Text></View>
                <Text style={style.textDish}>Total Dishes</Text>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
     
        width: "100%",
        height: "10%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        marginTop: 5

    },

    around: {
        backgroundColor: 'red',

        borderColor: 'black',
        borderWidth: 1.5,
        borderRadius: 100,
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        color: "white"


    },


    total: {

        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold"
    },

    text: {
        color: "white",
        fontWeight: "bold",
        fontSize: 25
    },

    textDish: {
        fontWeight: "bold",
        fontSize: 15,
        marginTop: 5
    },

    logo: {

        height: "100%",
        width: 80,
        alignItems: "center",
        justifyContent: "center"
    },

    logoImage: {
        height: 60,
        width: 80
    }
})