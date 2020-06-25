export class Storage{
    constructor(){
        this.name;
    }

    getNameUser(){
        if( localStorage.getItem('name') !== null ) this.name = localStorage.getItem('name');
    }

    saveNameUser( name ){
        localStorage.setItem( 'name', name );
        this.getNameUser();
    }
}