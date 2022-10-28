import { StyleSheet, View, Text, Pressable, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { writeToImportantExpenses, deleteFromExpenses, deleteFromImportantExpenses } from '../firebase/firestore';
import { Colors } from '../helpers/Colors';


export default function EditExpense({ navigation, route, expenses, importantExpenses }) {

    const [isImportant, setIsImportant] = useState(false);

    async function onDelete() {
        let deletedKey;
        for (let i = 0; i < expenses.length; i++) {
            if (expenses[i].expid == route.params.expense.expid) {
                deletedKey = expenses[i].key;
            }
        }
        await deleteFromExpenses(deletedKey);
    }
    async function onDeleteImportant() {
        let deletedKey;
        for (let i = 0; i < importantExpenses.length; i++) {
            if (importantExpenses[i].expid == route.params.expense.expid) {
                deletedKey = importantExpenses[i].key;
            }
        }
        await deleteFromImportantExpenses(deletedKey);
    }

    async function addToImportant() {
        await writeToImportantExpenses(route.params.expense);
        navigation.goBack();
    }

    const createMarkAlert = () => {
        Alert.alert(
            "Important",
            "Are you sure you want to mark this as important?",
            [
                {
                    text: "No",
                    style: "cancel"
                },
                { text: "Yes", onPress: addToImportant }
            ]
        )
    };

    const createDeleteAlert = () =>
        Alert.alert(
            "Delete",
            "Are you sure you want to delete this?",
            [
                {
                    text: "No",
                    style: "cancel"
                },
                {
                    text: "Yes", onPress: () => {
                        onDelete();
                        if (isImportant) {
                            onDeleteImportant();
                        }
                        navigation.goBack();
                    }
                }
            ]
        );

    useEffect(() => {
        for (let i = 0; i < importantExpenses.length; i++) {
            if (importantExpenses[i].expid == route.params.expense.expid) {
                setIsImportant(true);
            };
        }
    }, []);

    return (
        <View style={styles.container}>
            {isImportant == false &&
                <Pressable
                    onPress={createMarkAlert}
                    style={({ pressed }) => {
                        if (pressed) { return [styles.buttonContainer, styles.pressedItem]; }
                        else { return styles.buttonContainer; }
                    }
                    }
                    android_ripple={{ color: Colors.yellow, foreground: true }}
                >
                    <Text style={styles.buttonText}>Mark as Important</Text>
                </Pressable>
            }

            <Pressable
                onPress={createDeleteAlert}
                style={({ pressed }) => {
                    if (pressed) { return [styles.buttonContainer, styles.pressedItem]; }
                    else { return styles.buttonContainer; }
                }}
                android_ripple={{ color: Colors.yellow, foreground: true }}
            >
                <Text style={styles.buttonText}>Delete</Text>
            </Pressable>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    buttonContainer: {
        width: 180,
        margin: 10,
        borderRadius: 5,
        padding: 5,
        backgroundColor: Colors.pink,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: Colors.red,
        fontSize: 15,
    },
    pressedItem: {
        opacity: 0.5,
        backgroundColor: Colors.yellow
    }
})