import React, {
    Component
} from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    ImageBackground,
    TouchableHighlight,
} from 'react-native';
import {sliderData} from '../data';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null
    }

    render() {
        const sliderList = sliderData.map((slider, index) => {
            return sliderFunc(slider, index, this.props);
        })

        return (
            <ScrollView contentContainerStyle = {{backgroundColor: 'white', paddingTop:120}}>
                <Text style ={styles.text}>
                        <Text style = {
                            styles.title
                        } > All of Aquinas {
                            '\n'
                        } 
                        </Text> 
                        <Text style = {
                            styles.subHeader
                        } >
                        A series by Fr.Timothy Danaher, OP </Text> 
                        </Text> 
                <View style={{paddingTop:50}}> {sliderList} </View>
           
            </ScrollView>
        );
    }
}

function sliderFunc(sliderObj, index, props) {
    return (
    <TouchableHighlight key = {index}
        onPress = {() => props.navigation.navigate('DetailsPage', {id: sliderObj.id})} >
        <ImageBackground resizeMode = "cover"
        source = {
            {
                uri: sliderObj.url /* param */ ,
            }
        }
        style ={{
                width: '100%',
                height: 120,
                flex: 1,
            }}>
            <View style = {
                {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    justifyContent: 'center'
                }
            } >
            <Text style ={styles.cardText}> {sliderObj.title} </Text> 
            </View > 
        </ImageBackground> 
        </TouchableHighlight >
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Baskerville',
        fontSize: 16,
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
        textShadowOffset: {
            width: -1,
            height: 1
        },
        textShadowRadius: 5,
        fontWeight: "400"
    },
});