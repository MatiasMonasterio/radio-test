import { ChatUI } from './js/chatUI.js';

// FIREBASE
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCar2TSEMAgEpyo2qH33OzYi5NvF5ruko8",
    authDomain: "radio-test-aa72d.firebaseapp.com",
    databaseURL: "https://radio-test-aa72d.firebaseio.com",
    projectId: "radio-test-aa72d",
    storageBucket: "radio-test-aa72d.appspot.com",
    messagingSenderId: "1085268608185",
    appId: "1:1085268608185:web:aeee63c4f888141accc768",
    measurementId: "G-S3P47H0TFE"
};
firebase.initializeApp(firebaseConfig);

export const saveMessage = function ( author, content ){
    firebase.database().ref('chat').push({
        name: author, 
        content: content 
    });
}

// Listener para Firebase cuando se agrega un nuevo elemento 
firebase.database().ref('chat')
    .on( 'child_added', ( snapshoot ) => {
        const chatUI = new ChatUI;
        chatUI.buildChatItem( snapshoot.toJSON().name, snapshoot.toJSON().content )
    });