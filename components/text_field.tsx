import { StyleSheet, Text, View, Button, Image, TextInput, KeyboardTypeOptions  } from 'react-native';
import * as React from 'react';

interface FieldProps {
    title: string;
    hint: string;
    value : string
    keyboardType?: KeyboardTypeOptions ;
    onChangeText: (input: string) => void;

}


export default function TextField({ title, hint, value, keyboardType = "default", onChangeText }: FieldProps) {

    const [text, setText] = React.useState('');

    const handleChangeText = (input: string) => {
        setText(input);
        onChangeText(input); // Pass the value back to parent
    };


    return (
        <View style={style.container}>
            <Text style={style.text}>{title}</Text>
            <TextInput
                style={style.textInput}
                placeholder={hint}
                keyboardType = {keyboardType} 
                value={value}
                onChangeText={handleChangeText}
            />
        </View>
    );
}


const style = StyleSheet.create({
    container: {
        marginHorizontal: 30,
        marginVertical: 5
    },
    textInput: {
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 15,
        height: 50,
        paddingHorizontal: 10
    },

    text: {
        fontSize: 18,
        fontWeight: "bold"
    }
});