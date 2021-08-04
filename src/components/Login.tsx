import React, {useState, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    Alert,
} from 'react-native';

import {SetTokens} from './AppContainer';
import {auth} from '../actions';

type Props = {
    handleTokens: SetTokens;
};

export default ({handleTokens}: Props) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const loginHandler = useCallback(
        () => {
            dispatch(auth({login, password}));
        },
        [login, password]
    );
    return (
        <View style={styles.container}>
            <Text>Login:</Text>
            <TextInput
                style={styles.input}
                value={login}
                onChangeText={setLogin}
            />
            <Text>Password:</Text>
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.button}
                onPress={loginHandler}
            >
                <Text style={styles.buttonTitle}>Login</Text>
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
