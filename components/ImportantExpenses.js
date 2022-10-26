import { View, Text,Button, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import ExpenseList from './ExpenseList';
import { Colors } from '../helpers/Colors.js';

export default function ImportantExpenses({route, navigation,importantExpenses}) {
    return (
    
        <View style={styles.allExpensesContainer}>
          
          {console.log('p',importantExpenses)}
          {/* <ExpenseList curExpense='666' curDescription="word" navigation={navigation}/> */}
    
          <FlatList data={importantExpenses} 
    renderItem={({item})=>{
      console.log('importantitem',item);
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
        container: {
      
          flex: 1,
          backgroundColor: Colors.gray,
          // alignItems: 'center',
          justifyContent: 'center',
          // flexDirection:'row'
        },
        
        textContainer: {
          backgroundColor: Colors.gray,
          borderRadius: 5,
          color: Colors.blue,
          padding:15,
          margin:20
        },
        text: {
      // fontSize:20
      
        },
        scrollviewItems:{
          alignItems: 'center'
        }
      
      });