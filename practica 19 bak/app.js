

const { createApp } = Vue

const canciones = [
    {
        autor : 'Junior H',
        nombre: 'El azul'
    },
    {
        autor : 'Roberto Cantoral',
        nombre: 'El triste'
    },
    {
        autor : 'Juan Carlos Calderon',
        nombre: 'La incondicional'
    }
];

createApp({
    data() {
        return {
            canciones : canciones
        }
    }
}).mount('#miApp');