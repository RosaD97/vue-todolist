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
        },
        addTask(){
            console.log('hei')
            if(this.add.length === 0) return;
                this.list.push({
                    text: this.add,
                    done: false
                });
                
                this.add = '';
            
        }
    }
}).mount('#app');
