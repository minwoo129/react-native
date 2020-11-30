import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

const Input = ({inputValue, inputChange}) => {
    const styles = StyleSheet.create({
        inputContainer: {
            marginLeft: 20,
            marginRight: 20,
            shadowOpacity: 0.2,
            shadowRadius: 3,
            shadowColor: '#000000',
            shadowOffset: {width: 2, height: 2}
        },
        input: {
            height: 60,
            backgroundColor: '#ffffff',
            paddingLeft: 10,
            paddingRight: 10
        }
    });

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                value={inputValue}
                style={styles.input}
                placeholder="What needs to be done?"
                placeholderTextColor='#cacaca'
                selectionColor= '#666666'
                onChangeText={inputChange}
            />
        </View>
    );
};

export default Input;