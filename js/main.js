const { createApp } = Vue;
const app = createApp({
    data () {
        return {
            todo:[
            " Visitare l'Argentina ",
            " Visitare il Brasile ",
            " Visitare la Germania",
            " Non visitare la francia ",
            " Non visitare la Svezia",
            ],
            newTodo: ""
        };
    },
    methods: {
        addTodo(){
            const cleanTodo = this.newTodo.trim();
            if (cleanTodo != "") {
                this.todo.push(cleanTodo);
                this.newTodo = "";
            }
        },
        removeTodo(i) {
            this.todos.slice(i, 1);
        }
    }
}).mount('#app');