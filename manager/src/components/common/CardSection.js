import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (
        //React-native trick if you pass in an array of styles, the style most to the right will over ride the style on the left.
        <View style={[styles.containerStyle, props.style]}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};

export { CardSection };
