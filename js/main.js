'use strict';

const { createApp } = Vue;

createApp({
    data() {
        return {
            add: '',
            title: 'VUE TO DO LIST',
            list: [
                {
                    text: 'Fare la spesa',
                    done: false,

                },
                {
                    text: 'Comprare il latte',
                    done: true,

                },
                {
                    text: 'Andare al parco',
                    done: false,

                }
            ]
        }
    },
    methods: {
        elimina(index){
            this.list.splice(this.list[index], 1)
        }
    }
}).mount('#app');
