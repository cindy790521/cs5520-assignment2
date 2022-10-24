import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView,ScrollView, FlatList } from 'react-native';

import Mytabs from './components/Mytabs.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GoalDetails from './components/GoalDetails.js';
import AllExpenses from './components/AllExpenses.js';
import ImportantExpenses from './components/ImportantExpenses.js';
import AddExpense from './components/AddExpense.js';
import EditExpense from './components/EditExpense.js';

const Stack=createNativeStackNavigator()
// {key:0,amount:10,description:'coffee'}
export default function App() {
  const [expenses,setExpenses]=useState([])
  const [importantExpenses,setImportantExpenses]=useState([])
  const [state,setState]=useState(1)
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ 
        headerStyle:{backgroundColor:"#995099"},
        headerTintColor:"#fff",
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
        state={state}
        setState={setState}
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
