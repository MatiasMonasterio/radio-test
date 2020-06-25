import { Messsage } from './js/message.js';
import { Chat } from './js/chat.js';
import { Storage } from './js/storage.js';
import { Streaming } from './js/streaming.js';

const storage = new Storage;
const chat = new Chat;
const streaming = new Streaming()

storage.getNameUser();


// EVENTOS PARA ABRIR Y CERRAR EL CHAT
chatElement.addEventListener('click', (e) => {
    if( e.target.name === 'open chat' || e.target.classList.contains('fa-comment-alt') ) chat.openChat(); // ESTOY TAMBIEN NO SE SI ME CONVIENE HACERLO ASI
    else if( e.target.name === 'close chat' || e.target.classList.contains('fa-chevron-right') ) chat.closeChat(); // LO MISMO ACA
});

// EVENTO PARA ENVIAR MENSAJE A LA BASE DE DATOS
messageForm.addEventListener('submit', (e) => {

    if( storage.name !== undefined && inputMessage.value !== '' ){
        const message = new Messsage( storage.name, inputMessage.value );
        message.sendMessage();
    }
    else if( storage.name === undefined ) chat.openPopUpName();

    e.preventDefault();
});

// EVENTO PARA ALMACENAR EL NOMBRE DEL USUARIO EN LOCAL STORAGE
nameForm.addEventListener('submit', (e) => {

    if( inputName.value !== '' ){
        storage.saveNameUser( inputName.value );
        chat.closePopupName();
    }

    e.preventDefault();
});





// EVENTO PARA EL BOTON DE PLAY Y PAUSE DEL DOM
radioButton.addEventListener('click', () => {
    if( radio.paused ) radio.play()
    else if( radio.played ) radio.pause();
});

// EVENTOS PARA LA REPRODUCCION DEL AUDIO
radio.addEventListener('play', streaming.playStreaming );
radio.addEventListener('pause', streaming.pauseStreaming );

// EVENTO PARA MANTENER POSICION DEL SCROLL AL USAR TECLADO DEL CELULAR
window.addEventListener('resize', chat.scrollDown );




// EVENTOS PARA ARTIST
artistButton.addEventListener( 'click', () => body.classList.toggle('artist-show') )

