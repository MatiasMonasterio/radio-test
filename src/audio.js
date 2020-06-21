radioButton.addEventListener('click', () => {
    if( radio.paused ) radio.play()
    else if( radio.played ) radio.pause();
});


radio.addEventListener('play', () => {
    loading.classList.add('loading-show');
    let played = radio.play();
    radioButton.disabled = true;

    if( played !== undefined ){
        played
        .then( () => {
            loading.classList.remove('loading-show');
            body.classList.add('played');
            from_play_to_pause.beginElement();
            radioButton.disabled = false;
        })
        .catch( (err) => {
            console.log(err);
        });
    }
});

radio.addEventListener('pause', () => {
    body.classList.remove('played');
    from_pause_to_play.beginElement();

    if( radio.duration !== Infinity && !isNaN(radio.duration)) reload();
});

function reload(){
    radio.load();
    radio.play();
}