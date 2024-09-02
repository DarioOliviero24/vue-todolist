const { createApp } = Vue;
const app = createApp({
    data () {
        return {
            todos:[
            ' Visitare Argentina ',
            ' Visitare il Brasile ',
            ' Visitare la Germania',
            ' Non visitare la francia ',
            ' Non visitare la Svezia',
            ],
            newTodo: ''
        };
    },
    methods: {
        addTodo(){
            const cleanTodo = this.newTodo.trim();
            if (cleanTodo != '') {
                this.todos.push(cleanTodo);
                this.newTodo = '';
            }
        },
        removeTodo(i) {
            this.todos.slice(i, 1);
        }
    }
}).mount('#app');