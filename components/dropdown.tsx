import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

// Author : danish1658
// Link : https://www.npmjs.com/package/react-native-dropdown-select-list

import { SelectList } from 'react-native-dropdown-select-list'

interface SetSelected {
    setSelectedF: (input: string) => void;

}


const DropDown = ({ setSelectedF }: SetSelected) => {



    const data = [
        { key: '1', value: 'Starter' },
        { key: '2', value: 'Main' },
        { key: '3', value: 'Desert' },

    ]

    return (
        <View style={style.container}>
            <Text style={style.text}>Select Course Type</Text>
            <SelectList
                setSelected={setSelectedF}
                data={data}
                save="value"
                defaultOption={{ key: '2', value: 'Main' }}
            />
        </View>

    )

};

export default DropDown;

const style = StyleSheet.create({
    container: {
        marginHorizontal: 30,
        marginVertical: 5
    },


    text: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10
    }
});