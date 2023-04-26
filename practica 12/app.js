
const app = Vue.createApp({
    data(){
        return{
            mensaje : 'Este es un texto denerado por vue',
            nombre: 'Mario' ,
            profesion: 'Plomero'
        }
       }
});
app.mount('#miApp');