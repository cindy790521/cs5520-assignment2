import { View, Text,Button, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import ExpenseList from './ExpenseList';



function rightButtonPressed(){console.log("rightButtonPressed");}

export default function AllExpenses({route, navigation,expenses,setExpenses}) {
    
  
    return (
        
    <View style={styles.allExpensesContainer}>
      
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
      
    </View>
    
    
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
      backgroundColor: '#fff',
      // alignItems: 'center',
      justifyContent: 'center',
      // flexDirection:'row'
    },
    topContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    bottomContainer: {
      flex: 4,
      backgroundColor: 'pink',
      // alignItems: 'center',
    },
    textContainer: {
      backgroundColor: "#aaa",
      borderRadius: 5,
      color: 'blue',
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
