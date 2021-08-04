import axios from 'axios';

import {getUserDataUrl} from './endpoints';
import { Alert } from 'react-native';

export const getData = async () => {
    Alert.alert(`We will use token for request ${axios.defaults.headers['x-access-token']}`);
    try {
        const data = await axios.get(
            getUserDataUrl,
        );
        return data.data;
    } catch (e) {
        throw e;
    }
}
