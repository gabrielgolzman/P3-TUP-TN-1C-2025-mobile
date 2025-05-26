import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native'

const ReadingList = () => {
    const [text, setText] = useState('');
    const [listReadings, setListReadings] = useState([]);

    const handleTextChange = (enteredText) => {
        setText(enteredText);
    }

    const handlePressAdd = () => {
        setListReadings(prevListReadings => [...prevListReadings, {
            id: prevListReadings.length + 1,
            text
        }]);
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
            {/* <ScrollView>
                {listReadings.map((listReading) =>
                    <Text style={styles.readingItem} key={listReading.id}>
                        {listReading.text}
                    </Text>
                )}
            </ScrollView> */}
            <FlatList
                data={listReadings}
                renderItem={({ item }) =>
                    <Text style={styles.readingItem}>
                        {item.text}
                    </Text>
                }
                keyExtractor={(item) => item.id}
            />
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
    },
    readingItem: {
        margin: 12,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#20621BFF',
        color: '#FFF'
    }
})