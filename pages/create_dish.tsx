import { StyleSheet, Text, View, ScrollView, Keyboard, Alert } from 'react-native';
import * as React from 'react';
import TextField from '../components/text_field';
import DropDown from '../components/dropdown';
import ButtonStyle2 from '../components/button_design2';

// (IIE,2024)
interface CreateProps {
    onChanged: (callback: (prevData: any) => any) => void;
    close: () => void; // function to update the parent component's state
}

//Author : Meta
//Link : https://reactnative.dev/docs/alert

const showAlert = () =>
    Alert.alert(
      'Congratulations',
      'You have created a dish !',
      [
        {
          text: 'OK',
          style: 'cancel',
        },
      ],
      {
        cancelable: true,
      },
    );

export default function Create({ onChanged, close }: CreateProps) {
    // Local states for each form field
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [selectedCourse, setSelectedCourse] = React.useState('Main');


    const course = (c: string) => {
        switch (c) {
            case "1":
                return "Starter";
            case "2":
                return "Main";
            case "3":
                return "Desert";
            default:
                return c;
        }
    };

    const handleSelection = (selectedValue: string) => {
        console.log('Selected Value:', selectedValue);
        setSelectedCourse(selectedValue); // Ensure you're handling the value
    };



    // This function adds the new dish to the list of dishes
    const addDish = () => {
         Keyboard.dismiss();

        console.log(`selected coaurse : ${course(selectedCourse)}`);

        const newDish = {
            name: name,
            description: description,
            price: price,
            type: course(selectedCourse)
        };




        // Append the new dish to the list using the onChanged function
        onChanged((prevData: any) => [...prevData, newDish]);

        // Clear the form fields after adding
        setName('');
        setDescription('');
        setPrice('');
      
        close();
        showAlert();
   
    };

    return (
        <ScrollView
        automaticallyAdjustKeyboardInsets={true}
          
        style={style.container}>
            <Text style={style.textHead}>Create Dish</Text>
            <TextField
                title='Name'
                hint='Please Enter Dish Name'
                onChangeText={setName}
                value={name}
            />
            <TextField
                title='Description'
                hint='Please Enter Dish Description'
                onChangeText={setDescription}
                value={description}
            />
            <TextField
                title='Price'
                hint='Please Enter Dish Price'
                onChangeText={setPrice}
                value={price.toString()}
                keyboardType='numeric'
            />
            <DropDown setSelectedF={handleSelection} />

            <View style={style.buttonContainer}>
                <ButtonStyle2
                    onPress={addDish}
                    title='Create'
                ></ButtonStyle2>
            </View>

        </ScrollView>
    );
}

const style = StyleSheet.create({
    textHead: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
    },

    buttonContainer: {
        flexDirection: "row",
        marginHorizontal: 20,
        marginVertical: 25
    },

    container: {
        flexGrow: 1,
    }
});
