
const { createApp } = Vue

const frases = [
    {
        id : 1,
        texto: 'El respeto al derecho ajeno es la paz',
        autor : 'Benito Juarez'
    },
    {
        id : 2,
        texto: 'La medida del amor es amar sin medida',
        autor: ''
    },
    {
        id : 3,
        texto: 'El dinero no puede comprar la felicidad',
        autor: ''
    }
];

createApp({
    data() {
        return {
           frases : frases,
           nueva : 'ingresa una nueva frase'
        }
    },
    methods : {
        agregarFrase( event ){
            if(event.charCode == 13){
                console.log('Enter');
                this.frases.unshift({
                    texto : this.nueva
                });
                this.nueva='';
            }
        }
    }
}).mount('#miApp');