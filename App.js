import React, { useState, useEffect } from 'react';
import Mytabs from './components/Mytabs.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddExpense from './components/AddExpense.js';
import EditExpense from './components/EditExpense.js';
import { onSnapshot, collection } from 'firebase/firestore';
import { firestore } from './firebase/firebase-setup';
import { Colors } from './helpers/Colors.js';


const Stack = createNativeStackNavigator()

export default function App() {
  const [expenses, setExpenses] = useState([]);
  const [importantExpenses, setImportantExpenses] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(firestore, 'expenses'), (querySnapshot) => {
      if (querySnapshot.empty) {
        setExpenses([]);
        return;
      }
      setExpenses(
        querySnapshot.docs.map((snapDoc) => {
          let data = snapDoc.data();
          data = { ...data, key: snapDoc.id };
          return data;
        })
      );
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(firestore, 'importantExpenses'), (querySnapshot) => {
      if (querySnapshot.empty) {
        setImportantExpenses([]);
        return;
      }
      setImportantExpenses(
        querySnapshot.docs.map((snapDoc) => {
          let data = snapDoc.data();
          data = { ...data, key: snapDoc.id };
          return data;
        })
      );
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: { backgroundColor: Colors.purple },
        headerTintColor: Colors.white,
        headerTitleAlign: "center"
      }}
      >
        <Stack.Screen
          name="Mytabs"
          options={{ headerShown: false }}
        >
          {(props) => <Mytabs  {...props}
            expenses={expenses}
            importantExpenses={importantExpenses}
          />}
        </Stack.Screen>
        <Stack.Screen
          name="AddExpense"
          component={AddExpense} />
        <Stack.Screen
          name="EditExpense" >
          {(props) => <EditExpense  {...props}
            expenses={expenses}
            importantExpenses={importantExpenses}
          />}
        </Stack.Screen>
      </Stack.Navigator>

    </NavigationContainer>
  );
}

