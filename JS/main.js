console.log('JS ok');

const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello tutor'
        }
    }
}).mount('#app')