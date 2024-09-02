const { createApp } = Vue;
const app = createApp({
    data () {
        return {
            todos:[
            {
                text:' Visitare Argentina ',
                done: true
            },
            {
                text:' Visitare il Brasile ',
                done: true
            },
            {
                text:' Visitare la Germania',
                done: true
            },
            {
                text:' Non visitare la francia ',
                done: false
            },
            {
                text:' Non visitare la Svezia',
                done: false
            },
            ],
            newTodo: ''
        };
    },
    methods: {
        addTodo(){
            const cleanTodo = this.newTodo.trim();
            if (cleanTodo != '') {
                this.todos.push({text:cleanTodo});
                this.newTodo = '';
            }
        },
        removeTodo(i) {
            this.todos.splice(i, 1);
        },
    }
}).mount('#app');