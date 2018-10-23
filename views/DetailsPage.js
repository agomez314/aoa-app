import React, {Component} from 'react';
import {
    StyleSheet,
    Text, 
    View,

} from 'react-native';
import {sliderData} from '../data';
import Player from '../components/player/Player';

export default class DetailsPage extends React.Component {
    static navigationOptions = {
      
    };
    
    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam('id');
        const item = sliderData.filter(items => items.id == itemId)[0];
        return ( 
            <View style = {
                    {
                        flex: 1,
                        backgroundColor: 'white',
                        padding: 20,
                        paddingTop: 100,
                    }
                } >
                <Text style = {styles.detailsTitle}> {item.title}</Text> 
                <Text style = {styles.detailsSubtitle}> {item.subtitle} {'\n'}</Text> 
               <View style={{padding:20}}>
                    <Player />
               </View>
                <View>
                    <Text style={styles.header}> Lecture Notes</Text>
                    <Text> {item.lectureNote} {'\n'} </Text> 

                    <Text style={styles.header}>Further References</Text>
                    <Text> {item.references} </Text> 
                </View> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    detailsTitle: {
        fontFamily: 'Baskerville',
        fontSize: 40,
        fontStyle: 'italic',
        textAlign: 'left',
    },
    detailsSubtitle: {
        fontFamily: 'Baskerville',
        fontSize: 20,
        fontStyle: 'italic',
        textAlign: 'left',
    },
    lectureNote: {
        fontSize: 20,
        fontFamily: 'Baskerville'
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});