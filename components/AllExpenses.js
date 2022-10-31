import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import ExpenseList from './ExpenseList';


export default function AllExpenses({ navigation, expenses }) {

    return (
        <SafeAreaView style={styles.allExpensesContainer}>
            <FlatList data={expenses}
                renderItem={({ item }) => {
                    return (
                        <ExpenseList expense={item} navigation={navigation} />
                    )
                }}
                contentContainerStyle={styles.scrollviewItems}>
            </FlatList>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    allExpensesContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    scrollviewItems: {
        alignItems: 'center'
    }
});
