import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Slider
} from 'react-native';

export default class Seekbar extends React.Component {
    state = {
        value: 0.2
    };

    render() {
        return (
            <View style={styles.slider}>
                <Slider
                value={this.state.value}
                onValueChange={value => this.setState({ value })}
                />
                <Text>
                Value: {this.state.value}
                </Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    slider: {
        flex: 1,
        marginLeft: 5,
        marginRight: 5,
        alignItems: "stretch",
        justifyContent: "center"
    },
  });