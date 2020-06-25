export class Chat {
    
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

    scrollDown(){
        messageList.scrollTop = messageList.scrollHeight;
    }
}