import { StyleSheet,View, Text,Button,Pressable, Alert } from 'react-native'
import React,{ useState ,useEffect} from 'react'

export default function EditExpense({ navigation,route,expenses, setExpenses,importantExpenses,setImportantExpenses}) {
    
    
    const [isImportant,setIsImportant]=useState(false);
    function onDelete(deletedKey){
        console.log('delete')
        setExpenses(expenses.filter(expense=>{return expense.key!=deletedKey}));
        setImportantExpenses(importantExpenses.filter(importantExpense=>{return importantExpense.key!=deletedKey}));
         navigation.goBack();
    }
    function addToImportant(){
        console.log('addToImportant');
        setImportantExpenses((prevexpenses)=>{
            const newExpense=route.params.expense;
            return [...prevexpenses,newExpense];
          });
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
        { text: "Yes", onPress: ()=>onDelete(route.params.expense.key) }
      ]
    );
    useEffect(()=>{
        console.log('effect',route.params.expense.key);

        for(let i =0;i<importantExpenses.length;i++){
            console.log(importantExpenses[i].key)
            if(importantExpenses[i].key == route.params.expense.key){
             setIsImportant(true);
        };
    }},[]);
    useEffect(()=>{
        console.log('isImportant',isImportant)
        
    },[isImportant]);

  return (
    
    <View style={styles.container}>
      
<View style={styles.goalTextContainer}>
      {isImportant==false &&<Pressable 
        onPress={createMarkAlert}
        style={({pressed})=>{
          return pressed&&styles.pressedItem;
        }}
        android_ripple={{color:"#223355", foreground: true}}
        >
          
          <View >
            <Text style={styles.button}>Mark as Important</Text>
            </View>
        </Pressable>}
        </View>
        <View >
      <Pressable 
        onPress={createDeleteAlert}
        style={({pressed})=>{
          return pressed&&styles.pressedItem;
        }}
        android_ripple={{color:"#223355", foreground: true}}
        >
          
          <View style={styles.goalTextContainer}>

            <Text style={styles.button}>Delete</Text>
            </View>

        </Pressable>
        </View>
        
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
       backgroundColor: "#aaa",
       justifyContent:'center',
        alignItems:'center'
       
     },
    button:{
        color:'red',
        fontSize:18,
        // flex:1,
        // justifyContent:'center'
    },
    pressedItem:{
      opacity:0.5,
      backgroundColor:"#222"
    }
})