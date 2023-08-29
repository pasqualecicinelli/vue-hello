console.log('JS ok');

const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello tutor',
            image: 'img/01.webp',
            classeCard:"card"
        }
    }
}).mount('#app')

