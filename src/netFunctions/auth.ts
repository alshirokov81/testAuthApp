import axios from 'axios';
import { Alert } from 'react-native';

import {signinUrl, refreshTokenUrl} from './endpoints';
import {SetTokens} from '../components/AppContainer';

export let refreshTokenVal = '';

export const signin = async (username: string, password: string) => {
    const response = await axios.post(
        signinUrl,
        {username, password}
    );
    const {accessToken, refreshToken} = response.data;
    axios.defaults.headers['x-access-token'] = `Bearer ${response.data.accessToken}`;
    return {accessToken, refreshToken};
}

export const getNewToken = async (rToken: string = '') => {
    if (!!rToken) {
        refreshTokenVal = rToken;
    }
    Alert.alert(`Reft token ${rToken}`);
    const response = await axios.post(
        refreshTokenUrl,
        {refreshToken: refreshTokenVal}
    );
    Alert.alert(JSON.stringify(response));
    const {accessToken, refreshToken} = response.data;
    axios.defaults.headers['x-access-token'] = `Bearer ${response.data.accessToken}`;
    return ({accessToken, refreshToken});
}
