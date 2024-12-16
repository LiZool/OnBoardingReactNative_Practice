import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, useWindowDimensions, View } from 'react-native';
import data from './src/data/data'
import RenderItem from './src/components/RenderItem'
import CustomButton from './src/components/CustomButton';
import { SharedValue, useSharedValue, withTiming } from 'react-native-reanimated';

const App = () => {
  const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = useWindowDimensions();
  const [ currentIndex, setCurrentIndex] = useState(0);
  const buttonVal = useSharedValue(0);
  
  // Switch between pages
  const handlePress = () => {
    if (currentIndex === data.length - 1) {
      console.log('END');
      return;
    }

    setCurrentIndex((prev) => prev + 1); 
    buttonVal.value = withTiming((buttonVal.value + SCREEN_HEIGHT) % (2 * SCREEN_HEIGHT + 1), { duration: 300 });
    console.log('buttonVal updated:', buttonVal.value); // Debug log
  };

  console.log(buttonVal.value)

  return (
    <View style={styles.container}>
      <View>
        { data.map((item, index) => {
          return (
            currentIndex === index && <RenderItem item={item} key={index}/>
          )
        }) } 
      </View>

      <CustomButton handlePress={handlePress} buttonVal={buttonVal} />
      <Text style={styles.credit}> Illustration by lOfi </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    alignItems: 'center',
  },

  credit:
  {
    position: 'absolute',
    bottom: 22,
    color: 'white',
  }
});

export default App;
