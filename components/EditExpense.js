import { StyleSheet,View, Text,Button,Pressable, Alert } from 'react-native'
import React,{ useState ,useEffect} from 'react'
import {writeToExpenses,writeToImportantExpenses,deleteFromExpenses,deleteFromImportantExpenses} from '../firebase/firestore';
import { Colors } from '../helpers/Colors';


export default function EditExpense({ navigation,route,expenses, setExpenses,importantExpenses,setImportantExpenses}) {
    
    
    const [isImportant,setIsImportant]=useState(false);
    async function onDelete(){
        console.log('delete')
        let deletedKey;
        for(let i =0;i<expenses.length;i++){
            
            if(expenses[i].expid == route.params.expense.expid){
                deletedKey=expenses[i].key;
            }}
        await deleteFromExpenses(deletedKey);
        
        // setExpenses(expenses.filter(expense=>{return expense.key!=deletedKey}));
        // setImportantExpenses(importantExpenses.filter(importantExpense=>{return importantExpense.key!=deletedKey}));
         
    }
    async function onDeleteImportant(){
        console.log('deleteimportant')
        let deletedKey;
        for(let i =0;i<importantExpenses.length;i++){
            
            if(importantExpenses[i].expid == route.params.expense.expid){
                deletedKey=importantExpenses[i].key;
            }}
        await deleteFromImportantExpenses(deletedKey);
        // setExpenses(expenses.filter(expense=>{return expense.key!=deletedKey}));
        // setImportantExpenses(importantExpenses.filter(importantExpense=>{return importantExpense.key!=deletedKey}));
         
    }
    async function addToImportant(){
        console.log('addToImportant');
        
        console.log('curexp',route.params.expense)
        
        await writeToImportantExpenses(route.params.expense);
        // setImportantExpenses((prevexpenses)=>{
        //     const newExpense=route.params.expense;
        //     return [...prevexpenses,newExpense];
        //   });
          navigation.goBack();
    }

//    function checkImportant(checkedKey){
//     for(let i ;i<importantExpenses.length;i++){
//         console.log(importantExpenses[i].key)
//         if(importantExpenses[i].key == checkedKey){
//         return true;
//     }
//     }
//     return false;
//    }

    const createMarkAlert = () =>{
    Alert.alert(
      "Important",
      "Are you sure you want to mark this as important?",
      [
        {
          text: "No",
        //   onPress: () => navigation.goBack(),
          style: "cancel"
        },
        { text: "Yes", onPress: addToImportant }
      ]
    )
    
    };

    const createDeleteAlert = () =>
    Alert.alert(
      "Delete",
      "Are you sure you want to delete this?",
      [
        {
          text: "No",
        //   onPress: () => navigation.goBack(),
          style: "cancel"
        },
        { text: "Yes", onPress: ()=>{
            onDelete();
            if(isImportant){
                
                onDeleteImportant();}
            
            navigation.goBack();
        } }
      ]
    );
    useEffect(()=>{
        console.log('effect',route.params.expense);

        for(let i =0;i<importantExpenses.length;i++){
            console.log(importantExpenses[i].expid)
            if(importantExpenses[i].expid == route.params.expense.expid){
             setIsImportant(true);
        };
    }},[]);
    useEffect(()=>{
        console.log('isImportant',isImportant)
        
    },[isImportant]);

  return (
    
    <View style={styles.container}>
      
      {isImportant==false &&
      <Pressable 
        onPress={createMarkAlert}
        style={({pressed})=>{
            if(pressed){return [styles.goalTextContainer,styles.pressedItem];}
            else{return styles.goalTextContainer;}
            }
        }
        android_ripple={{color:Colors.yellow, foreground: true}}
        >
          
          
            <Text style={styles.button}>Mark as Important</Text>
            
        </Pressable>
        }
        
      <Pressable 
        onPress={createDeleteAlert}
        style={({pressed})=>{
            if(pressed){return [styles.goalTextContainer,styles.pressedItem];}
            else{return styles.goalTextContainer;}
        //   return pressed&&styles.pressedItem;
        }}
        android_ripple={{color:Colors.yellow, foreground: true}}
        >
            <Text style={styles.button}>Delete</Text>
        </Pressable>
        </View>
        
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor: "pink",
        alignItems:'center'
    },
    goalTextContainer: {
        // flex:1,
        width:180,
       margin:10,
       borderRadius: 5,
       padding:5,
       backgroundColor: Colors.pink,
       justifyContent:'center',
        alignItems:'center'
       
     },
    button:{
        color:Colors.red,
        fontSize:18,
        // flex:1,
        // justifyContent:'center'
    },
    pressedItem:{
      opacity:0.5,
      backgroundColor:Colors.yellow
    }
})