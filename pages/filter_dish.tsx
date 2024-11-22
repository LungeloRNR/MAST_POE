import { StyleSheet, Text, View, ScrollView, Keyboard, Alert, Image, FlatList, TouchableOpacity } from 'react-native';
import * as React from 'react';
import { useState } from 'react';
import TextField from '../components/text_field'; // Assuming you have a TextField component in the path
import Card from '../components/card';


// (IIE,2024)
interface InputDataItem {
  name: string;
  description: string;
  type: string;
  price: number;
}

interface FilterProps {
  inputData: InputDataItem[];
}

export default function Filter({ inputData = [] }: FilterProps) {
  const [filteredData, setFilteredData] = useState<InputDataItem[]>(inputData);

  const imageSwitch = (type: string) => {
    switch (type) {
      case 'Starter':
        return require('../images/starter.jpg');
      case 'Main':
        return require('../images/image4.png');
      case 'Desert':
        return require('../images/dessert.jpg');
      default:
        return null;
    }
  };

  const handleFilter = (type: string) => {
    if (type === 'All') {
      setFilteredData(inputData);
    } else {
      const filteredItems = inputData.filter((item) => item.type === type);
      setFilteredData(filteredItems);
    }
  };

  return (
    <View>
      <View style={style.container}>
        <TouchableOpacity onPress={() => handleFilter('Starter')}>
          <View style={style.containerOuterr}>
            <View style={style.imageContainer}>
              <Image
                source={require('../images/image1.png')}
                style={style.logoImage}
              />
            </View>
            <Text>Starter</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleFilter('Main')}>
          <View style={style.containerOuterr}>
            <View style={style.imageContainer}>
              <Image
                source={require('../images/image2.png')}
                style={style.logoImage}
              />
            </View>
            <Text>Main</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleFilter('Desert')}>
          <View style={style.containerOuterr}>
            <View style={style.imageContainer}>
              <Image
                source={require('../images/image3.png')}
                style={style.logoImage}
              />
            </View>
            <Text>Desert</Text>
          </View>
        </TouchableOpacity>
      </View>

      {filteredData.length === 0 ? (
        <View style={style.emptyText}>
          <Text>No items available.</Text>
        </View>
      ) : (
        <FlatList
          data={filteredData.reverse()}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Card
              name={item.name}
              description={item.description}
              type={item.type}
              price={item.price.toString()}
              image={imageSwitch(item.type)}
            />
          )}
          contentContainerStyle={style.list}
        />
      )}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginHorizontal: 15,
  },
  logoImage: {
    height: 80,
    width: 80,
  },
  imageContainer: {
    backgroundColor: 'lightgrey',
    padding: 10,
    borderRadius: 100,
    borderColor: 'black',
    borderWidth: 1.5,
    shadowColor: '#000', // iOS shadow color
    shadowOffset: { width: 5, height: 10 }, // iOS shadow offset
    shadowOpacity: 0.25, // iOS shadow opacity
    shadowRadius: 5.84, // iOS shadow radius
  },
  containerOuterr: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    backgroundColor: 'white',
    alignItems: 'center',
  },
  emptyText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
