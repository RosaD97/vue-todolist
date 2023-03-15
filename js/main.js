'use strict';

const { createApp } = Vue;

createApp({
    data() {
        return {
            title: 'VUE TO DO LIST',
            list: [
                {
                    text: 'Fare la spesa',
                    done: false,

                },
                {
                    text: 'Comprare il latte',
                    done: false,

                },
                {
                    text: 'Andare al parco',
                    done: false,

                }
            ]
        }
    },
    methods: {

    }
}).mount('#app');
