import React, {useState, useCallback, useEffect} from 'react';
import {Alert, SafeAreaView, StyleSheet} from 'react-native';
import EncryptedStorage from 'react-native-encrypted-storage';
import {useSelector} from 'react-redux';
import axios from 'axios';

import Content from './Content';
import Login from './Login';
import {RootReducers} from '../reducers';

type TokenState = {
    authToken: string;
    refreshToken: string;
}

export type SetTokens = (accessToken: string, refreshToken: string) => void;

export default () => {
    //const [tokens, setTokens] = useState<TokenState>({authToken: '', refreshToken: ''});

    const {accessToken, refreshToken} = useSelector((state: RootReducers) => state.tokens)

    /*
    const setRemoveTokens = useCallback(
        async (authToken: string = '', refreshToken: string = '') => {
            setTokens({
                authToken,
                refreshToken,
            });
            /*            await EncryptedStorage.setItem(
                'tokens',
                JSON.stringify({
                    authToken,
                    refreshToken,
                })
            );
            Alert.alert(`Set tokens to storage ${authToken}`);
        }
        ,[setTokens]
    );

    useEffect(
        () => {
           async function setTokenFromStorage() {
               const tokens = await EncryptedStorage.getItem('tokens');
               if (!!tokens) {
                const {authToken, refreshToken} = JSON.parse(tokens);
                Alert.alert(`Curr ref token ${refreshToken}`);
                refreshTokenFunc(setRemoveTokens, refreshToken);
                //axios.defaults.headers['x-access-token'] = `Bearer ${authToken}`;
               }
           };
           setTokenFromStorage();
        },
        []
    );
    */
    //const {authToken, refreshToken} = tokens;
    return (
        <SafeAreaView style={style.container}>
            {(!accessToken || !refreshToken)
                ? <Login handleTokens={() =>{}} />
                : <Content handleTokens={() => {}}/>
            }
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    }
});
