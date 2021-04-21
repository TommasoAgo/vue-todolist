var app = new Vue(
    {
        el : '#root',
        data : {
            // Creo un oggetto vuoto da far popolare all'input dell'utente
            userTodo : '',
            // Creo un Array di oggetti che contenga gli elementi da stampare nella ul
            todos : [
                {
                    name : 'Fare i compiti',
                    isDone : false
                },
                {
                    name : 'Fare la spesa',
                    isDone : false
                },
                {
                    name : 'Fare il bucato',
                    isDone : false
                }
            ]
        },
        methods : {
            pushUserTodo() {
                const userTodoItem = {
                    name : this.userTodo,
                    isDone : false
                }

                if( this.userTodo.length != '') {
                    this.todos.push(userTodoItem);
                    this.userTodo = '';
                }
            },
            removeTodo(index) {
                this.todos.splice(index, 1)
            },
            todoDone(index) {
                this.todos[index].isDone = true;
            }    
        }
    }
)