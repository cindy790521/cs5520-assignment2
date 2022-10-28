import { View, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllExpenses from './AllExpenses.js';
import ImportantExpenses from './ImportantExpenses.js';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../helpers/Colors.js';


export default function Mytabs({ route, navigation, expenses, importantExpenses }) {

    const Tab = createBottomTabNavigator();

    function goToAddExpense() {
        navigation.navigate("AddExpense")
    }

    function rightButton() {
        return (
            <View style={styles.rightBottonContainer}>
                <View style={styles.plusIconContainer}>
                    <Pressable
                        onPress={goToAddExpense
                        }
                        android_ripple={{ color: Colors.yellow, foreground: true }}
                        style={({ pressed }) => {
                            if (pressed) { return { backgroundColor: Colors.yellow }; }
                        }
                        }>
                        <AntDesign name="plus" size={24} color="black" />
                    </Pressable>
                </View>
                <View style={styles.rightContainer}></View>
            </View>
        )
    }

    return (
        <Tab.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: Colors.purple },
                headerTintColor: Colors.white,
                headerTitleAlign: "center"
            }}>

            <Tab.Screen
                name="AllExpenses"
                options={{
                    tabBarIcon: () => (
                        <MaterialIcons name="attach-money" size={24} color="black" />
                    ),
                    headerRight: rightButton
                }
                }>
                {(props) => <AllExpenses  {...props} expenses={expenses} />}
            </Tab.Screen >
            <Tab.Screen
                name="ImportantExpenses"
                options={{
                    tabBarIcon: () => (
                        <AntDesign name="exclamation" size={24} color="black" />
                    ),
                    headerRight: rightButton
                }
                }>
                {(props) => <ImportantExpenses  {...props} importantExpenses={importantExpenses} />}
            </Tab.Screen>
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    rightBottonContainer: {
        flexDirection: 'row',
        width: 80,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    plusIconContainer: {
        flex: 5,
        alignItems: 'flex-end'
    },
    rightContainer: {
        flex: 2
    }
});