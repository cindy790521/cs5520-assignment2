import { StyleSheet, Text, View, TextInput, Button, SafeAreaView,ScrollView, FlatList,Alert } from 'react-native';
import React,{useState} from 'react'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {writeToExpenses} from '../firebase/firestore';
import { Colors } from '../helpers/Colors';
export default function AddExpense({navigation,setExpenses, expenses}) {
    const [expenseAmount, setExpenseAmount] = useState("");
    const [expenseDescription, setExpenseDescription] = useState("");
    function cancel(){
        
        navigation.goBack();
    }
    async function addCurExpense(){
        const newExpense={amount:parseInt(expenseAmount),description:expenseDescription,expid:Math.random()}

        // const newExpense={amount:parseInt(expenseAmount),description:expenseDescription}
        await writeToExpenses(newExpense);
        
    //     setExpenses((prevexpenses)=>{
    //   return [...prevexpenses,newExpense]
    // });
        navigation.goBack();
    }

    const check = function (newAmount,newDescription,addCurExpense) {
        const parsed = parseInt(newAmount, 10);
        if (isNaN(parsed) || parsed <=0 || newDescription.trim().length === 0) {
          createInvalidAlert();
        } else {
            addCurExpense();
        }
      }

      const createInvalidAlert = () =>
      Alert.alert(
        "Invalid Input",
        "Please check your input value",
        [
          { text: "OK" }
        ]
      );

    console.log("add",expenseAmount,expenseDescription,expenses)
  return (
    
    <View style={styles.container}>
        <View  style={styles.titleContainer}>
      <Text style={styles.title}>Your Expense</Text>
      </View >
      <View style={styles.inputContainer}>
      <Text style={styles.inputTitle}>amount</Text>
      
      <TextInput 
        value={expenseAmount}
        onChangeText={(newText)=>{setExpenseAmount(newText)}}
        // placeholder="type sth"
        style={styles.inputAmount}
        />
        
        <Text style={styles.inputTitle}>description</Text>
        
      <TextInput 
        value={expenseDescription}
        onChangeText={(newText)=>{setExpenseDescription(newText)}}
        // placeholder="type sth"
        style={styles.inputDescription}
        />
        
        <View style={styles.buttonContainer}>
            <View >
            <Pressable 
            onPress={cancel} 
    android_ripple={{color:'#555',  foreground:true}}
    // style={({pressed})=>{
    //   return pressed && styles.pressedItem;
    // }}
    style={({pressed})=>{
        if(pressed){return [styles.button,styles.pressedItem];}
        else{return styles.button;}
        }
    }

    // style={(obj)=>{
    //   return obj.pressed && styles.pressedItem;
    // }}
            >
                <Text>cancel</Text>
                </Pressable>
                </View>
                <View >
            <Pressable
            
            onPress={()=>check(expenseAmount,expenseDescription,addCurExpense)} 
            android_ripple={{color:Colors.yellow,  foreground:true}}
            // style={({pressed})=>{
            //   return pressed && styles.pressedItem;
            // }}

            style={({pressed})=>{
                if(pressed){return [styles.button,styles.pressedItem];}
                else{return styles.button;}
                }
            }
            // style={(obj)=>{
            //   return obj.pressed && styles.pressedItem;
            // }}
            >
                <Text>submit</Text>
                </Pressable>
                </View>
        </View>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    inputTitle:{
        textAlign:'left',
        width:'70%'
    },
    buttonContainer:{
        //  backgroundColor:'green',
        height:'40%',
        width:'70%',
        flexDirection:'row',
        justifyContent:'space-evenly',
        
    },
title:{
    fontSize:30,},

    titleContainer:{
        
        flex:1,
        justifyContent: 'flex-end',
    },
    inputContainer:{
        flex: 4,
        width:'90%',
        alignItems: 'center',
        marginTop:30
    },
    container: {
      flex: 1,
      backgroundColor: Colors.white,
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputAmount:{
        color:Colors.red,
        backgroundColor:Colors.lightPink,
        // borderBottomWidth:2,
        // borderBottomColor:'purple',
        margin:5,
        width:'70%',
        height:'10%',
        borderRadius:5
      },
    inputDescription:{
      color:Colors.red,
      backgroundColor:Colors.lightPink,
    //   borderBottomWidth:2,
    //   borderBottomColor:'purple',
      margin:5,
      width:'70%',
      height:'20%',
      borderRadius:5
    },
    description:{
        backgroundColor:Colors.white,
        fontSize: 50,
    },
    pressedItem:{
      backgroundColor:Colors.blue
    },
    button:{
      backgroundColor:Colors.pink,
      alignItems: 'center',
      justifyContent: 'center',
      padding:5,
      width:100,
      borderRadius:5,
    },
      
      goalTextContainer: {
        margin:8,
        borderRadius: 5,
        padding:5,
        backgroundColor: Colors.pink,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'space-evenly'
        
      },
      goaltext:{
        fontSize: 20,
      color: Colors.black,
      // backgroundColor:'#aaa',
      padding: 8,
      },
      pressedItem:{
        backgroundColor:Colors.yellow,
      opacity: 0.5,
      }
})