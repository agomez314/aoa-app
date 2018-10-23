import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';
import Controls from './Controls';
import Seekbar from './Seekbar';

export default class Player extends React.Component {
    render() {
        return (
            <View style={{flexDirection:'row'}}>
                <Controls />
                <Seekbar />
            </View>
        )
    }
}