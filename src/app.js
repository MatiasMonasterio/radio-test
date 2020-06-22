import { saveMessage } from './firebase.js';

// CLASES
class Messsage {
    constructor( author, content ) {
        if( author === null ) return CHAT.openPopUpName();
        if( content === '' ) return false;

        this.author = author;
        this.content = content;        
    }

    sendMessage(){
        saveMessage( this.author, this.content );
    }

    printMessage(){
        CHAT.buildChatList( this.author, this.content );
    }
}

class Chat {
    openChat(){
        mainContainer.classList.add('chat-open');
        this.scrollDown();
    }

    closeChat(){
        mainContainer.classList.remove('chat-open');
    }

    openPopUpName(){
        popup.classList.add('popup-show');
        inputName.focus();
    }

    closePopupName(){
        popup.classList.remove('popup-show');
        inputMessage.focus();
    }

    buildChatList( author, content ){
        let lastMessage = messageList.lastElementChild.firstElementChild.innerHTML;

        const item = document.createElement('li');
        if( localStorage.getItem('name') === author ) item.className = 'message-item right';
        else item.className = 'message-item';

        const name = document.createElement('span');
        if( lastMessage === author ) name.className = 'message-author-none';
        else name.className = 'message-author';

        const text = document.createElement('p');
        text.className = 'message-text';

        name.innerHTML = author;
        text.innerHTML = content;

        item.appendChild(name);
        item.appendChild(text);
        messageList.appendChild( item );

        this.scrollDown();
    }

    scrollDown(){
        messageList.scrollTop = messageList.scrollHeight;
    }
}

// DEFINICION DE VARIABLES Y CONSTANTES GLOBALES
let userName = localStorage.getItem('name');
const CHAT = new Chat; // CREO QUE USAR UNA CLASE NO ES NECESARIO YA QUE NO VOY A DEFINIRLO MAS DE UNA VEZ JAMAS PERO HACE REFERENCIA A LOS METODOS


// EVENTOS DOM
chat.addEventListener('click', (e) => {
    if( e.target.name === 'open chat' || e.target.classList.contains('fa-comment-alt') ) CHAT.openChat(); // ESTOY TAMBIEN NO SE SI ME CONVIENE HACERLO ASI
    else if( e.target.name === 'close chat' || e.target.classList.contains('fa-chevron-right') ) CHAT.closeChat(); // LO MISMO ACA
});

messageForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const MESSAGE = new Messsage( userName, inputMessage.value );
    if ( !MESSAGE.author ) return;
    MESSAGE.sendMessage();

    messageForm.reset();
    inputMessage.focus();
});

nameForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const USER = inputName.value;
    if( USER === '' ) return
    saveUserLocalStorage( USER );

    CHAT.closePopupName();
});

window.addEventListener('resize', CHAT.scrollDown );


// FUNCIONES
function saveUserLocalStorage( user ){
    localStorage.setItem('name', user );
    userName = userName = localStorage.getItem('name');
}

// EXPORTS
export{ Messsage }


// EVENTOS PARA ARTIST
artistButton.addEventListener( 'click', () => body.classList.toggle('artist-show') )

