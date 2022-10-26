import { StyleSheet,View, Text,Button,Pressable } from 'react-native'
import React from 'react'
import EditExpense from './EditExpense.js';
import { Colors } from '../helpers/Colors.js';


export default function ExpenseList({expense,navigation}) {
    function goToEditExpense(){
        console.log('goToEditExpense')
        navigation.navigate("EditExpense",{navigation:{navigation},expense:expense})}
        
  
        return (
    <View style={styles.list}>
      
      
      <Pressable 
    onPress={goToEditExpense} 
    android_ripple={{color:Colors.yellow,  foreground:true}}
    // style={({pressed})=>{
    //   return pressed && styles.pressedItem;
    // }}
    style={({pressed})=>{
        if(pressed){return [styles.goalTextContainer,styles.pressedItem];}
        else{return styles.goalTextContainer;}
        }
    }
    
    // style={(obj)=>{
    //   return obj.pressed && styles.pressedItem;
    // }}
    >
             <View  style={styles.goalTextContainerTrue}>
             <View  styles={styles.description}>
             <Text  styles={{color:'white'}}>{expense.description}</Text>
             </View>
             <View>
             <Text  styles={styles.amount}>{expense.amount}</Text>
             </View>
             </View>
             </Pressable>
            
    </View>
  )
}

const styles = StyleSheet.create({
    list:{
        // backgroundColor:'blue',
        // height:100
        // flex:0.1,
        // justifyContent:'center',
    },
    description:{
        backgroundColor:'green !important'
        , flex:0.1,
    },
    amount:{
        backgroundColor:'red',
        fontSize:100,
        // width:100,
        // height:30,
        // margin:50,
        //  flex:0.5,
    },
    pressedItem:{
      backgroundColor:"blue"
    },
    button:{
      // backgroundColor:"black"
    },
    goalTextContainerTrue: {
        flex:1,
        // marginTop:10,
         width:'100%',
        //  height:40,
        // margin:8,
        // borderRadius: 5,
        // // padding:5,
        // backgroundColor: Colors.blue,
        flexDirection:'row',
        justifyContent:'space-between',
        //  alignItems:'center'
        
      },
      goalTextContainer: {
        // flex:1,
        marginTop:10,
         width:250,
         height:40,
        margin:8,
        borderRadius: 5,
        padding:5,
        backgroundColor: Colors.pink,
        flexDirection:'row',
        justifyContent:'space-between',
         alignItems:'center'
        
      },
      goaltext:{
        fontSize: 30,
      color: Colors.black,
      // backgroundColor:'#aaa',
      padding: 8,
      },
      pressedItem:{
        backgroundColor: Colors.yellow,
      opacity: 0.5,
      }
    });