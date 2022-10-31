import { StyleSheet, View, Text, Pressable } from 'react-native';
import React from 'react';
import { Colors } from '../helpers/Colors.js';


export default function ExpenseList({ expense, navigation }) {
    function goToEditExpense() {
        navigation.navigate(
            "EditExpense",
            { navigation: { navigation }, expense: expense })
    }

    return (
        <View>
            <Pressable
                onPress={goToEditExpense}
                android_ripple={{ color: Colors.yellow, foreground: true }}
                style={({ pressed }) => {
                    if (pressed) { return [styles.listContainer, styles.pressedItem]; }
                    else { return styles.listContainer; }
                }
                }>
                <View style={styles.listContainerFlex}>
                    <Text >{expense.description}</Text>
                    <View style={styles.amount}>
                        <Text  >{expense.amount}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    amount: {
        backgroundColor: Colors.white,
        borderRadius: 3,
        width: 70,
        alignItems: 'center',
        justifyContent: 'center',
        height: 25
    },
    listContainerFlex: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    listContainer: {
        marginTop: 10,
        width: 250,
        height: 40,
        margin: 8,
        borderRadius: 5,
        padding: 5,
        backgroundColor: Colors.pink,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    pressedItem: {
        backgroundColor: Colors.yellow,
        opacity: 0.5,
    }
});