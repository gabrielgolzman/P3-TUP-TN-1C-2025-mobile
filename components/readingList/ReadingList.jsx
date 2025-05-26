import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

const ReadingList = () => {
    const [text, setText] = useState('');

    const handleTextChange = (enteredText) => {
        setText(enteredText);
    }

    const handlePressAdd = () => {
        Alert.alert('Agregar lectura', `Lectura ${text} agregada`, [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ])
    }
    return (
        <>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder='Ingrese la lectura...'
                    onChangeText={handleTextChange}
                    value={text}
                />
                <View style={styles.buttonInput}>
                    <Button title='Agregar lectura' onPress={handlePressAdd} />
                </View>
            </View>
            <View>
                <Text>Lista de lecturas...</Text>
            </View>
        </>
    )
}

export default ReadingList

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center'
    },
    textInput: {
        width: "100%",
        marginRight: 8,
        marginVertical: 15,
        padding: 8,
        borderWidth: 1,
        borderColor: "#CCCCCC"
    },
    buttonInput: {
        width: "50%",
        alignSelf: "flex-end"
    }
})