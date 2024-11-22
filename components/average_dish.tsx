import { StyleSheet, Text, View, Button, Image } from 'react-native';
import * as React from 'react';

interface AverageProps {
    starterAvg: string;
    mainAvg: string;
    desertAvg: string;

}

export default function Average({ starterAvg, mainAvg, desertAvg }: AverageProps) {
    return (
        <View style={style.container}>


            <View style={style.containerOuterr}>
                <Text>R {starterAvg}</Text>
                <View style={style.imageContainer}>
                    <Image
                        source={require('../images/image1.png')}
                        // (Ideogram,2024);
                        style={style.logoImage}
                    />
                </View>
                <Text>Starter Avg</Text>
            </View>


            <View style={style.containerOuterr}>
                <Text>R {mainAvg}</Text>
                <View style={style.imageContainer}>
                    <Image
                        source={require('../images/image2.png')}
                        // (Ideogram,2024);
                        style={style.logoImage}
                    />
                </View>
                <Text>Main Avg</Text>
            </View>


            <View style={style.containerOuterr}>
                <Text>R {desertAvg}</Text>
                <View style={style.imageContainer}>
                    <Image
                        source={require('../images/image3.png')}
                        // (Ideogram,2024);
                        style={style.logoImage}
                    />
                </View>
                <Text>Desert Avg</Text>
            </View>

        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 20

    },

    logoImage: {
        height: 80,
        width: 80
    },

    imageContainer: {
        backgroundColor: "lightgrey",
        padding: 10,
        borderRadius: 100,
        borderColor: "black",
        borderWidth: 1.5
    },

    containerOuterr: {

        justifyContent: "center",
        alignItems: "center"
    }


})