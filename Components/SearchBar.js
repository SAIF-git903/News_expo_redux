import React from "react"
import { View, TextInput, StyleSheet, Switch } from "react-native"

export default SearchBar = (props) => {

    const { searchText, setSearchText, onSubmit } = props

    return (
        <View >
            <TextInput style={styles.input}
                placeholder="Search Article..."
                value={searchText}
                onChangeText={(text) => setSearchText(text)}
                onSubmitEditing={() => onSubmit()}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    input: {
        width: "90%",
        marginHorizontal: 15,
        marginVertical: 15,
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        borderColor: "black",
    }
})