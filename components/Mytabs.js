import { View, Text, Button,Pressable } from 'react-native'
import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllExpenses from './AllExpenses.js';
import ImportantExpenses from './ImportantExpenses.js';
import { AntDesign,MaterialIcons } from '@expo/vector-icons'; 
import { Colors } from '../helpers/Colors.js';

  
export default function Mytabs({route,navigation,expenses,setExpenses,importantExpenses,setImportantExpenses}) {

    const Tab = createBottomTabNavigator(); 


    function goToAddExpense(){
        console.log('@',navigation)
        navigation.navigate("AddExpense")}
    function rightButton() {
        return(
            <View style={{flexDirection:'row',flex:1,justifyContent:'center',alignItems:'center'}}>
                <View style={{flex:10,alignItems:'flex-end'}}>
            <Pressable 
            onPress={goToAddExpense
            }
            android_ripple={{color:Colors.yellow, foreground: true}}
            style={({pressed})=>{
                if(pressed){return {backgroundColor:Colors.yellow};}
                
                }
            }

            >

              <View >
              <AntDesign name="plus" size={24} color="black" />
                {/* <Text style={styles.button}>x</Text> */}
              </View>
            </Pressable>
            </View>
            <View style={{flex:2}}></View>
            {/* <View style={{flex:0.5,backgroundColor:Colors.green}}></View> */}
            </View>
        )
      }
      console.log('@mytabs',route.params)
  return (
    
    <Tab.Navigator 
    screenOptions={{ 
        headerStyle:{backgroundColor:Colors.purple},
        headerTintColor:Colors.white,
        headerTitleAlign:"center"
        }}
        >
        
      <Tab.Screen 
      name="AllExpenses" 
    //   component={AllExpenses} 
      options={
        ({route,navigation})=>{
          return {
            
      tabBarIcon: ({ color, size }) => (
        <MaterialIcons name="attach-money" size={24} color="black" />
      ),
            // title:route.params.text, 
            headerRight:rightButton}}
    }>
        {(props) => <AllExpenses  {...props} expenses={expenses} setExpenses={setExpenses} setImportantExpenses={setImportantExpenses}/>}
    </Tab.Screen >
      <Tab.Screen 
      name="ImportantExpenses"  
      options={
        
        ({route,navigation})=>{
          return {
            
      tabBarIcon: ({ color, size }) => (
        <AntDesign name="exclamation" size={24} color="black" />
      ),
            // title:route.params.text, 
            headerRight:rightButton}}
    }>
                {(props) => <ImportantExpenses  {...props} importantExpenses={importantExpenses}/>}
                </Tab.Screen>
    </Tab.Navigator>
  )
}