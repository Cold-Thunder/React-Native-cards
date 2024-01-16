import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

const FlatCards = () =>{
    return(
        <View style={styles.container}>
            <Text style={styles.heading}>Flat Cards</Text>
            <View style={styles.cards}>
                <View style={[styles.card, {backgroundColor: 'red'}]}>
                    <Text>Red</Text>
                </View>
                <View style={[styles.card, {backgroundColor: "skyblue"}]}>
                    <Text>Red</Text>
                </View>
                <View style={[styles.card, {backgroundColor: "pink"}]}>
                    <Text>Red</Text>
                </View>
                <View style={[styles.card, {backgroundColor: 'orange'}]}>
                    <Text>Red</Text>
                </View>
            </View>
        </View>
    )
}

export default FlatCards;

const styles = StyleSheet.create({

    container: {
        padding: 10
    },
    heading: {
        fontSize: 23,
        color: "black",
        fontWeight: "bold"
    },
    cards: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    card:{
        margin: 7,
        justifyContent: "center",
        alignItems: "center",
        height: 100,
        width: "21%",
        backgroundColor:"red",
        borderRadius: 10
    }
})