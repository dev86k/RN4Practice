import * as React from 'react';
import { Text, View, StyleSheet, Image, FlatList, Dimensions } from 'react-native';
import Constants from 'expo-constants';

const ITEM_WIDTH = Dimensions.get('window').width;
//import EditScreenInfo from '../components/EditScreenInfo';
//import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  state = {
  list: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]
}
  return (
          <View style={styles.container}>
            <FlatList
            data={state.list}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}

            renderItem={({item}) => (
              <View>
               <Image
                source={{ uri: 'https://source.unsplash.com/random?'+item }}
                style={styles.imageStyle}
                />
                <Text style={styles.textStyle}>test</Text>
              </View>
            )}
            />
          </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  imageStyle: {
    width: ITEM_WIDTH / 2,
    height: ITEM_WIDTH / 3,
    margin: 1,
    resizeMode: 'cover',
  },
  textStyle: {
    marginBottom: 10,
  },
});
