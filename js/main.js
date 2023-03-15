'use strict';

const { createApp } = Vue;

createApp({
    data() {
        return {
            add: '',
            title: 'VUE TO DO LIST',
            empty: 'Aggiungi una nuova task',
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
        elimina(i) {
            this.list.splice(this.list[i], 1)
        },
        addTask() {
            console.log('hei')
            if (this.add.length === 0) return;
            this.list.push({
                text: this.add,
                done: false
            });

            this.add = '';
        },
        addClass(i) {
            if (this.list[i].done === true) {
                this.list[i].done = false;
            }
            else if (this.list[i].done !== true){
                this.list[i].done = true;
            }

        }
}
}).mount('#app');
