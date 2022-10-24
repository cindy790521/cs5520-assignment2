import { StyleSheet,View, Text,Button,Pressable } from 'react-native'
import React from 'react'
import EditExpense from './EditExpense.js';


export default function ExpenseList({expense,navigation}) {
    function goToEditExpense(){
        console.log('goToEditExpense')
        navigation.navigate("EditExpense",{navigation:{navigation},expense:expense})}
        
  
        return (
    <View style={styles.list}>
      
      
      <Pressable 
    onPress={goToEditExpense} 
    android_ripple={{color:'#555',  foreground:true}}
    // style={({pressed})=>{
    //   return pressed && styles.pressedItem;
    // }}
    style={(obj)=>{
      return obj.pressed && styles.pressedItem;
    }}
    >
             <View  style={styles.goalTextContainer}>
             <View  styles={styles.description}>
             <Text >{expense.description}</Text>
             </View>
             <View styles={styles.amount}>
             <Text >{expense.amount}</Text>
             </View>
             <View >
             <Text >test</Text>
             </View>
             </View>
             </Pressable>
            
    </View>
  )
}

const styles = StyleSheet.create({
    list:{
        backgroundColor:'blue',
        flex:0.1,
        // justifyContent:'center',
    },
    description:{backgroundColor:'green', flex:0.1,},
    amount:{
        backgroundColor:'red',
        // width:100,
        // height:30,
        // margin:50,
        flex:0.5,
    },
    pressedItem:{
      backgroundColor:"blue"
    },
    button:{
      // backgroundColor:"black"
    },
      
      goalTextContainer: {
        flex:1,
        marginTop:10,
         width:250,
         height:40,
        margin:8,
        borderRadius: 5,
        padding:5,
        backgroundColor: "pink",
        flexDirection:'row',
        justifyContent:'space-between',
         alignItems:'center'
        
      },
      goaltext:{
        fontSize: 30,
      color: "#929",
      // backgroundColor:'#aaa',
      padding: 8,
      },
      pressedItem:{
        backgroundColor: "#222",
      opacity: 0.5,
      }
    });