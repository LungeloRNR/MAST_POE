// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Alert, TouchableOpacity } from 'react-native';
import * as React from 'react';
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Total from '../components/total_dish';
import Average from '../components/average_dish';
import Card from '../components/card';
import ButtonStyle from '../components/button_design';
import Create from './create_dish';
import ButtonStyle2 from '../components/button_design2';
import Filter from './filter_dish';

//current error dues to an empty 

export default function Main() {

  const [inputData, setInputData] = React.useState([


  ]);

  const [isCreate, setIsCreate] = React.useState(false);


  function updateCreate(value: boolean): void {
    setIsCreate(value);
  }


  // Author :  gorhom Mo Gorhom
  // Link : https://gorhom.dev/react-native-bottom-sheet/
  const bottomSheetRef = React.useRef<BottomSheet>(null);

  const handleSheetChanges = React.useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const handleClosePress = () => bottomSheetRef.current?.close();
  const handleOpenPress = () => bottomSheetRef.current?.expand();

  const snapPoints = React.useMemo(() => ['84%', '85%'], []);

  // Author :  gorhom Mo Gorhom
  // Link : https://gorhom.dev/react-native-bottom-sheet/
  const renderBackdrop = React.useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}

      />
    ),
    []
  );

  const average = (course: string) => {
    const result = inputData.filter((item) => item.type === course);

    if (result.length == 0) {
      return 0;
    }

    var total = 0

    for (let i = 0; i < result.length; i++) {
      total += parseFloat(result[i].price ?? 0) || 0; // Ensuring valid number conversion
    }

    const averagePrice = total / result.length;

    console.log(`Average price of ${course}:, ${averagePrice}`);
    return averagePrice;
  };

  const imageSwitch = (type: string) => {
    switch (type) {
      case "Starter":
        return require("../images/starter.jpg")
      // (stockcake,2024);
      case "Main":
        return require("../images/image4.png")
      // (stockcake,2024);
      case "Desert":
        return require("../images/dessert.jpg")
      // (stockcake,2024);
    }
  }

  const handleDelete = (index: number) => {
    Alert.alert(
      "Delete Item",
      "Are you sure you want to delete this item?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => {
            setInputData((prevData) => prevData.filter((_, i) => i !== index));
          }
        }
      ],
      { cancelable: true }
    );
  };
  



  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Total
          total={inputData.length.toString()}
        ></Total>
        <Average
          starterAvg={average("Starter").toString()}
          mainAvg={average("Main").toString()}
          desertAvg={average("Desert").toString()}
        ></Average>

        {inputData.length === 0 ? (
          <View style={styles.empty}>

            <Text>No items available.</Text>
          </View>

        ) : (
          <FlatList
            data={inputData.reverse()}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (


              <TouchableOpacity
              onLongPress={() => handleDelete(index)}
              >
                <Card
                name={item.name}
                description={item.description}
                type={item.type}
                price={item.price}
                image={imageSwitch(item.type)}
              />
              </TouchableOpacity>
              
            )}
            contentContainerStyle={styles.list}
          />
        )}

        <View style={styles.buttonLayOut}>
          <ButtonStyle onPress={() => { handleOpenPress(); updateCreate(true); }} />

          <ButtonStyle2
            onPress={() => { handleOpenPress(); updateCreate(false); }}
            title="Filter Dish"
          />
        </View>
        {/* Bottom sheet to pop up */}

        {/* // Author :  gorhom Mo Gorhom
        // Link : https://gorhom.dev/react-native-bottom-sheet/ */}
        <BottomSheet
          ref={bottomSheetRef}
          index={-1}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          backdropComponent={renderBackdrop}
          onChange={handleSheetChanges}>


          <BottomSheetView >

            {isCreate ?

              <Create
                onChanged={setInputData}
                close={handleClosePress}
              ></Create>
              : <Filter
              inputData = {inputData}
              
              ></Filter>
            }

          </BottomSheetView>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'white',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },

  buttonLayOut: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,

  },

  list: {
    backgroundColor: "white",
    alignItems: "center"
  },

  empty: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    height: "53%"
  }
});
