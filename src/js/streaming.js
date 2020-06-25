export class Streaming{
    
    async playStreaming(){
        loading.classList.add('loading-show');
        radioButton.disabled = true;
        const played = radio.play();

        if( played != undefined ){
            try {
                await played

                loading.classList.remove('loading-show');
                body.classList.add('played');
                from_play_to_pause.beginElement();
                radioButton.disabled = false;
            }
            catch( err ) {
                console.log('Error en la carga streaming, seguramente no hay transmision disponible')
            }
            
        }
    }

    pauseStreaming(){
        body.classList.remove('played');
        from_pause_to_play.beginElement();
    
        if( radio.duration !== Infinity && !isNaN(radio.duration)) this.reloadStreaming();
    }

    reloadStreaming(){
        radio.load();
        radio.play();
    }
}