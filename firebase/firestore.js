import{collection,addDoc,doc, deleteDoc} from 'firebase/firestore';
import {firestore} from './firebase-setup';


export async function writeToExpenses(expenses){
    try{
    await addDoc(collection(firestore,'expenses'),expenses);
}catch(err){
    console.log(err);
}
}

export async function writeToImportantExpenses(importantExpenses){
    try{
    await addDoc(collection(firestore,'importantExpenses'),importantExpenses
    );
}catch(err){
    console.log(err);
}
}

export async function deleteFromExpenses(key) { try {
    await deleteDoc(doc(firestore,'expenses',key));
    
 }
    catch (err) {
    console.log(err) }
    }

export async function deleteFromImportantExpenses(key) { try {
    await deleteDoc(doc(firestore,'importantExpenses',key))
    }
    catch (err) {
    console.log(err) }
    }