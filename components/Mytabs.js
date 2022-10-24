import { View, Text, Button,Pressable } from 'react-native'
import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllExpenses from './AllExpenses.js';
import ImportantExpenses from './ImportantExpenses.js';
import { AntDesign } from '@expo/vector-icons'; 


  
export default function Mytabs({route,navigation,expenses,setExpenses,importantExpenses,state,setState}) {

    const Tab = createBottomTabNavigator(); 


    function goToAddExpense(){
        console.log('@',navigation)
        navigation.navigate("AddExpense")}
    function rightButton() {
        return(
            <Pressable 
            onPress={goToAddExpense
            }
            
            android_ripple={{color:"#223355", foreground: true}}
            >
              <View>
              <AntDesign name="plus" size={24} color="black" />
                {/* <Text style={styles.button}>x</Text> */}
              </View>
            </Pressable>
        )
      }
      console.log('@mytabs',route.params)
  return (
    
    <Tab.Navigator>
        
      <Tab.Screen 
      name="AllExpenses" 
    //   component={AllExpenses} 
      options={
        ({route,navigation})=>{
          return {
            
            // title:route.params.text, 
            headerRight:rightButton}}
    }>
        {(props) => <AllExpenses  {...props} expenses={expenses} setExpenses={setExpenses}/>}
    </Tab.Screen >
      <Tab.Screen 
      name="ImportantExpenses"  
      options={
        ({route,navigation})=>{
          return {
            
            // title:route.params.text, 
            headerRight:rightButton}}
    }>
                {(props) => <ImportantExpenses  {...props} importantExpenses={importantExpenses}/>}
                </Tab.Screen>
    </Tab.Navigator>
  )
}