import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    ScrollView,

} from 'react-native'

const ElevetedCards = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Eleveted Cards</Text>
            <ScrollView horizontal={true} styles={styles.cards}>
                    <View style={styles.card}>
                        <Text>Tap</Text>
                    </View>
                    <View style={styles.card}>
                        <Text>Tap</Text>
                    </View>
                    <View style={styles.card}>
                        <Text>Tap</Text>
                    </View>
                    <View style={styles.card}>
                        <Text>Tap</Text>
                    </View>
                    <View style={styles.card}>
                        <Text>Tap</Text>
                    </View>
                    <View style={styles.card}>
                        <Text>Tap</Text>
                    </View>
                    <View style={styles.card}>
                        <Text>Tap</Text>
                    </View>
                    <View style={styles.card}>
                        <Text>Tap</Text>
                    </View>
            </ScrollView>
        </View>
    )
}

export default ElevetedCards;

const styles = StyleSheet.create({
    container:{
        padding: 10
    },  
    heading: {
        fontSize: 23,
        color: "black",
        fontWeight: "bold"
    },
    cards: {
    },
    card: {
        margin: 7,
        justifyContent: "center",
        alignItems: "center",
        height: 100,
        width: 100,
        backgroundColor: "rgb(200,200,200)",
        borderRadius: 10
    }

})