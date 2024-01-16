import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const FancyCards = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Trending Places</Text>

            <View style={styles.cards}>
                <View style={[styles.card, styles.elevated]}>
                    <View style={styles.cardTop}>
                        <Image source={{ uri: "https://www.stockvault.net/data/2011/05/31/124348/preview16.jpg" }}
                            style={styles.cardImg} />
                    </View>
                    <View style={styles.cardBody}>
                        <Text style={styles.cardTitle}>Jainul Abedin Park</Text>
                        <Text style={styles.cardLebel}>Mymensingh,Bangladesh</Text>
                        <Text style={styles.cardDescrip}>This is a small town of Bangladesh.This is great town. Which is better for living peacefully.</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default FancyCards;

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
       justifyContent:"center",
       alignItems: 'center'
    },
    card: {
        height: 360,
        width: "95%",
        marginTop: 20,
        marginBottom: 5,
        borderRadius: 15,
        backgroundColor: "rgb(200,200,200)"
    },
    elevated: {
        elevation: 3,
        shadowColor: "black",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowRadius: 10,
        shadowOpacity: 0.3
    }, 
    cardTop: {

    },
    cardImg: {
        height: 200,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
    cardBody: {
        padding: 13,
        flexGrow: 1
    },
    cardTitle: {
        fontSize: 22,
        fontWeight: "bold",
        color: "black"
    },
    cardLebel: {
        fontSize: 16,
        marginBottom: 10,
        color: "black"
    },
    cardDescrip: {
        fontSize: 14,
        color: "black"
    }
})