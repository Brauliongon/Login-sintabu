import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDE33pyI7dlldTvtiGp8wru5CA1GNnWh9Y",
    authDomain: "sintabu-be978.firebaseapp.com",
    databaseURL: "https://sintabu-be978.firebaseio.com",
    projectId: "sintabu-be978",
    storageBucket: "sintabu-be978.appspot.com",
    messagingSenderId: "757987732250",
    appId: "1:757987732250:web:362dae11c1899d2cc41aa3",
    measurementId: "G-PW1LBWYGN1"

}
firebase.initializeApp(config)

export async function loginuser(email:string, password:string) {
    try {
        const res = await firebase.auth().signInWithEmailAndPassword(email, password)
        console.log(res)
        return true
        }  
    catch(error){
        console.log(error)
        return false
    }
}

export async function registeruser(email:string, password:string) {
    try {
        const res = await firebase.auth().createUserWithEmailAndPassword(email, password)
        console.log(res)
        return true
        }  
    catch(error){
        console.log(error)
        return false
    }
}