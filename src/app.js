import { saveMessage } from './firebase.js';

let userName = localStorage.getItem('name');


// EVENTOS
openChat.addEventListener('click', () => {
    mainContainer.classList.add('chat-open');
    scrollDownChat();
});

closeChat.addEventListener('click', () => {
    mainContainer.classList.remove('chat-open');
});

sendMessage.addEventListener('submit', (e) => {
    e.preventDefault();

    if( inputMessage.value === '' ) return
    
    // Validaciones del nombre de usuario ( ES NECESARIO PORNERLO EN UNA FUNCION APARTE? )
    if( userName === null ) {
       togglePopUp();
       inputName.focus();
        return;
    };
    
    saveMessage( userName, inputMessage.value );
    inputMessage.value = '';
    inputMessage.focus();
});

sendName.addEventListener('submit', (e) => {
    e.preventDefault();

    let saveName = inputName.value;
    
    if( saveName === '' ) return

    localStorage.setItem( 'name', saveName );
    userName = localStorage.getItem('name');
    
    inputMessage.focus();
    togglePopUp();
});

window.addEventListener('resize', () => {
    scrollDownChat();
});

// FUNCIONES
function togglePopUp(){
    popup.classList.toggle('popup-show');
}

function scrollDownChat(){
    messageList.scrollTop = messageList.scrollHeight;
}


// FUNCIONES EXPORTADAS
const creatDom = ( author, message ) => {
    let lastMessage = messageList.lastElementChild.firstElementChild.innerHTML;
    
    let item = document.createElement('li');
    if( localStorage.getItem('name') === author ) item.className = 'message-item right';
    else item.className = 'message-item';

    let name = document.createElement('span');
    if( lastMessage === author ) name.className = 'message-author-none';
    else name.className = 'message-author';

    let text = document.createElement('p');
    text.className = 'message-text';

    name.innerHTML = author;
    text.innerHTML = message;

    item.appendChild(name);
    item.appendChild(text);
    messageList.appendChild( item );

    scrollDownChat();
}

export{ creatDom }

