import { View,SafeAreaView, Text,Button, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import ExpenseList from './ExpenseList';
import { Colors } from '../helpers/Colors.js';


function rightButtonPressed(){console.log("rightButtonPressed");}

export default function AllExpenses({route, navigation,expenses,setExpenses,setImportantExpenses}) {
    
  
    return (
        
    <SafeAreaView style={styles.allExpensesContainer}>
      
      {console.log('p',route.params)}
      {/* <ExpenseList curExpense='666' curDescription="word" navigation={navigation}/> */}

      <FlatList data={expenses} 
renderItem={({item})=>{
  console.log('item',item);
  return(
<ExpenseList expense={item} navigation={navigation}  />
  )}}
contentContainerStyle={styles.scrollviewItems}>
          
              </FlatList>
      
    </SafeAreaView>
    
    
  )
}

const styles = StyleSheet.create({
    allExpensesContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
  
      flex: 1,
      backgroundColor: Colors.white,
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
      alignItems: 'center',
      
    }
  
  });
