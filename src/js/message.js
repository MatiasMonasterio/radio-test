import { saveMessage } from '../firebase.js';

export class Messsage {
    
    constructor( author, content ) {
        this.author = author;
        this.content = content;   
    }

    sendMessage(){
        saveMessage( this.author, this.content );
        messageForm.reset();
        inputMessage.focus();
    }
}