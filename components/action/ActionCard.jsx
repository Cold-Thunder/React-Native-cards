import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, Linking } from "react-native";

const ActionCards = () => {

    const linkOpen = (web) =>{
        Linking.openURL(web);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Blog Cards</Text>
            <View style={styles.cards}>
                <View style={[styles.card, styles.elevated]}>
                    <Text style={styles.cardTitle}>What's new in JavaScript-21 or ES-12</Text>

                    <View style={styles.cardTop}>
                        <Image source={{ uri: "https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png" }}
                            style={styles.cardImg} />
                    </View>
                    <View style={styles.cardBody}>
                        <Text style={styles.cardDescrip} numberOfLines={3}>This is a small town of Bangladesh.This is great town. Which is better for living peacefully.This is a small town of Bangladesh.This is great town. Which is better for living peacefully.This is a small town of Bangladesh.This is great town. Which is better for living peacefully.</Text>
                    </View>
                    <View style={styles.links}>
                        <TouchableOpacity style={styles.btn} onPress={()=>linkOpen("https://hashnode.com/@ColdThunder")}>
                            <Text style={styles.btnText}>Read More</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default ActionCards;

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
        justifyContent: "center",
        alignItems: 'center'
    },
    card: {
        height: "inital",
        width: "95%",
        marginTop: 20,
        marginBottom: 5,
        borderRadius: 15,
        backgroundColor: "orange",
        paddingVertical: 10
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
        justifyContent: "center",
        alignItems: "center",
        height: 250,
        width: "100%",
        marginVertical: 10,
        elevation: 3
    },
    cardImg: {
        height: "100%",
        width: "90%",
        borderRadius: 10,
    },
    cardBody: {
        padding: 13,
        flexGrow: 1
    },
    cardTitle: {
        fontSize: 22,
        fontWeight: "bold",
        color: "black",
        paddingVertical:10,
        paddingHorizontal: 15 
    },
    cardLebel: {
        fontSize: 16,
        marginBottom: 10,
        color: "black",
        paddingHorizontal: 10
    },
    cardDescrip: {
        fontSize: 14,
        color: "black",
        paddingHorizontal: 10
    },
    btn: {
        justifyContent: "center",
        alignItems: "center",
        height: 40,
        width: 120,
        margin: 10,
        marginHorizontal: 15,
        backgroundColor: "white",
        borderRadius: 8,
        elevation: 3
    },
    btnText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black"
    }
})