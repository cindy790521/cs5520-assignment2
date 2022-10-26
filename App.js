import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView,ScrollView, FlatList } from 'react-native';

import Mytabs from './components/Mytabs.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GoalDetails from './components/GoalDetails.js';
import AllExpenses from './components/AllExpenses.js';
import ImportantExpenses from './components/ImportantExpenses.js';
import AddExpense from './components/AddExpense.js';
import EditExpense from './components/EditExpense.js';
import {writeToExpenses,writeToImportantExpenses,deleteFromExpenses,deleteFromImportantExpenses} from './firebase/firestore';
import { onSnapshot, QuerySnapshot ,where,collection,query} from 'firebase/firestore';
import {firestore} from './firebase/firebase-setup';
import { Colors } from './helpers/Colors.js';


const Stack=createNativeStackNavigator()
// {key:0,amount:10,description:'coffee'}
export default function App() {
  const [expenses,setExpenses]=useState([])
  const [importantExpenses,setImportantExpenses]=useState([])
  useEffect(()=>{
    const unsubscribe=onSnapshot(collection(firestore,'expenses'),(querySnapshot)=>{
      if(querySnapshot.empty){
        setExpenses([]);
        return;
      }
      setExpenses(
        querySnapshot.docs.map((snapDoc)=>{
          let data=snapDoc.data();
          data={...data,key:snapDoc.id};
          return data;
        })
      );
    });
    return ()=>{
      unsubscribe();
    };
  },[]);

  useEffect(()=>{
    const unsubscribe=onSnapshot(collection(firestore,'importantExpenses'),(querySnapshot)=>{
      if(querySnapshot.empty){
        setImportantExpenses([]);
        return;
      }
      setImportantExpenses(
        querySnapshot.docs.map((snapDoc)=>{
          let data=snapDoc.data();
          data={...data,key:snapDoc.id};
          return data;
        })
      );
    });
    return ()=>{
      unsubscribe();
    };
  },[]);

  

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ 
        headerStyle:{backgroundColor:Colors.purple},
        headerTintColor:Colors.white,
        headerTitleAlign:"center"
        }}
        >
        <Stack.Screen 
        name="Mytabs" 
        // component={Mytabs} 
        options={{ headerShown: false }}
        >
        {(props) => <Mytabs  {...props} 
        expenses={expenses} 
        setExpenses={setExpenses}
        importantExpenses={importantExpenses}
        setImportantExpenses={setImportantExpenses}
        />}
        </Stack.Screen>
        <Stack.Screen 
        name="AddExpense" 
        // component={AddExpense } 
        // initialParams={{ setExpenses: setExpenses, expenses:expenses}}
        >
      {(props) => <AddExpense  {...props} expenses={expenses} setExpenses={setExpenses}/>}
      </Stack.Screen>
        
        <Stack.Screen 
        name="EditExpense" 
        // component={EditExpense}
        // options={({route,navigation})=>{
        //   return {
        //     title:route.params.goalObject.text,}}}
        >
        {(props) => <EditExpense  {...props} 
        expenses={expenses} 
        setExpenses={setExpenses}
        importantExpenses={importantExpenses}
        setImportantExpenses={setImportantExpenses}
        />}
        </Stack.Screen>
    </Stack.Navigator>
    
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
  

// });
