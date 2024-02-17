import {initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase,ref,push} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings={
    databaseURL:"https://playground-7d4e6-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app=initializeApp(appSettings)
const database=getDatabase(app)
const shoppingListInDB=ref(database,"shoppingList")
const todoList=document.getElementById('todo-list');
const inputField=document.getElementById('input-field');
const addButton=document.getElementById('add-button');
const shoppingList=document.getElementById('shopping-list');


addButton.addEventListener("click",function(){
    let inputValue=inputField.value;
    push(shoppingListInDB,inputValue)
    inputField.value="";
    shoppingList.innerHTML+=`<li>${inputValue}</li>`
})

onValue(shoppingListInDB,function(snapshot){
    let itemsArray=Object.values(snapshot.val());
    for(let i=0;i<itemsArray.length;i++){
        shoppingList.innerHTML+=`<li>${itemsArray[i]}</li>`
    }})