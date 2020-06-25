import { Chat } from './chat.js';
const chat = new Chat;

export class ChatUI{
    constructor(){
        this.item = document.createElement('li');
        this.name = document.createElement('span');
        this.text = document.createElement('p');
    }

    buildChatItem( author, message ){
        let lastMessage = messageList.lastElementChild.firstElementChild.innerHTML;

        if( localStorage.getItem('name') === author ) this.item.className = 'message-item right';
        else this.item.className = 'message-item';

        if( lastMessage === author ) this.name.className = 'message-author-none';
        else this.name.className = 'message-author';

        this.text.className = 'message-text';

        this.name.innerHTML = author;
        this.text.innerHTML = message;

        this.item.appendChild( this.name );
        this.item.appendChild( this.text );
        messageList.appendChild( this.item );

        chat.scrollDown();
    }
}