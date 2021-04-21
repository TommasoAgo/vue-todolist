var app = new Vue(
    {
        el : '#root',
        data : {
            // Creo un oggetto vuoto da far popolare all'input dell'utente
            userTodo : {
                name : ''
            },
            // Creo un Array di oggetti che contenga gli elementi da stampare nella ul
            todos : [
                {
                    name : 'Fare i compiti',
                },
                {
                    name : 'Fare la spesa',
                },
                {
                    name : 'Fare il bucato'
                }
            ]
        },
        methods : {
            pushUserTodo() {
                if( this.userTodo.name.length != '') {
                    this.todos.push(this.userTodo);
                }
            }    
        }
    }
)