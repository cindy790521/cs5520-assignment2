import { View, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import ExpenseList from './ExpenseList';

export default function ImportantExpenses({navigation,importantExpenses}) {
    return (
        <View style={styles.allExpensesContainer}>
          <FlatList data={importantExpenses} 
    renderItem={({item})=>{
      return(
    <ExpenseList expense={item} navigation={navigation} />
      )}}
    contentContainerStyle={styles.scrollviewItems}>
                  </FlatList>
        </View>
      )
    }
    
    const styles = StyleSheet.create({
        allExpensesContainer:{
            flex: 1,
            alignItems: 'center',
        },
        scrollviewItems:{
          alignItems: 'center'
        }
      });