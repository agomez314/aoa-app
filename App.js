import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  WebView,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';
import { Constants } from 'expo';


export default class App extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={{
      flexGrow: 1}}>
        <Text style={styles.text}>
          <Text style={styles.title}>All of Aquinas{'\n'}</Text>
          <Text style={styles.subHeader}>
            A series by Fr. Timothy Danaher, OP
          </Text>
        </Text>
        <View style={{ top: 150 }}>
          <ImageBackground
            resizeMode="cover"
            source={{
              uri:'https://upload.wikimedia.org/wikipedia/commons/b/b5/Transfigurazione_%28Raffaello%29_September_2015-1a.jpg',
            }}
            style={{
              width: '100%',
              height: 120,
              flex: 1,
            }}>
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'center',
              }}>
              <Text style={styles.cardText}>Life of Christ</Text>
            </View>
          </ImageBackground>
         <ImageBackground
            resizeMode="cover"
            source={{
              uri:'https://upload.wikimedia.org/wikipedia/commons/6/64/Creaci%C3%B3n_de_Ad%C3%A1n_%28Miguel_%C3%81ngel%29.jpg',
            }}
            style={{
              width: '100%',
              height: 120,
              flex: 1,
            }}>
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'center',
              }}>
              <Text style={styles.cardText}>God and the World</Text>
            </View>
          </ImageBackground>
          <ImageBackground
            resizeMode="cover"
            source={{
              uri:'https://static1.squarespace.com/static/5725d097d210b805ad8b6cc7/5727eda0c6fc084300aebef3/58f2b2571b631b9852e86d45/1492306025797/36e9b466ef9ef0ad8b82de9d45a27a67.jpg?format=2500w',
            }}
            style={{
              width: '100%',
              height: 120,
              flex: 1,
            }}>
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'center',
              }}>
              <Text style={styles.cardText}>Angels & Demons, Humans, Judgement</Text>
            </View>
          </ImageBackground>
         <ImageBackground
            resizeMode="cover"
            source={{
              uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Europe_a_Prophecy%2C_copy_D%2C_object_1_%28Bentley_1%2C_Erdman_i%2C_Keynes_i%29_British_Museum.jpg/1280px-Europe_a_Prophecy%2C_copy_D%2C_object_1_%28Bentley_1%2C_Erdman_i%2C_Keynes_i%29_British_Museum.jpg',
            }}
            style={{
              width: '100%',
              height: 120,
              flex: 1,
            }}>
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'center',
              }}>
              <Text style={styles.cardText}>Something Else</Text>
            </View>
          </ImageBackground>
          <ImageBackground
            resizeMode="cover"
            source={{
              uri:'https://static1.squarespace.com/static/5725d097d210b805ad8b6cc7/5727eda0c6fc084300aebef3/58f2b2571b631b9852e86d45/1492306025797/36e9b466ef9ef0ad8b82de9d45a27a67.jpg?format=2500w',
            }}
            style={{
              width: '100%',
              height: 120,
              flex: 1,
            }}>
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'center',
              }}>
              <Text style={styles.cardText}>Angels & Demons, Humans, Judgement</Text>
            </View>
          </ImageBackground>
           <View>
            <Text style={styles.subHeader}>About the series: {'\n'}</Text>
            <Text>Lorem ipsum</Text>
          </View>
        </View> 
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Baskerville',
    fontSize: 16,
    top: 80,
  },
  title: {
    fontSize: 60,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  subHeader: {
    textAlign: 'center',
    fontSize: 18,
  },
  cardText: {
    color: 'white',
    fontSize: 25,
    paddingLeft: 20,
    paddingTop: 20,
    letterSpacing: 2,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
  },
});
