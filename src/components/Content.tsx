import React, {useState, useCallback} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {SetTokens} from './AppContainer';
import {getData} from '../actions';
import {RootReducers} from '../reducers'

type Props = {
    handleTokens: SetTokens;
};

export default ({handleTokens}: Props) => {
    const dispatch = useDispatch();
    const downloadData = useCallback(
        () => {
            dispatch(getData());
        },
        []
    );
    const content = useSelector((state: RootReducers) => state.loadedData.data);

    return (
        <View style={styles.container}>
            <Text>{content}</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={downloadData}
            >
                <Text style={styles.buttonTitle}>Download data</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    input: {
        width: '100%',
        height: 30,
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 10,
    },
    button: {
        width: '100%',
        height: 30,
        borderWidth: 1,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    buttonTitle: {
        alignSelf: 'center'
    }
});