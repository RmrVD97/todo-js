import { Todo } from ".";

export class todolist {

    constructor() {
        console.log('constructor');
    this.cargarLocalStorage();
    }

    newTodo(todo) {
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    deleteTodo(id) {
      this.todos= this.todos.filter(todo => todo.id!=id);
      this.guardarLocalStorage();
    }

    marcarCompletado(id) {
        
        for (const todo of this.todos) {
            if (todo.id==id) {
                todo.completado=!todo.completado;
                console.log(this.todos);
                this.guardarLocalStorage();
                break;
            }
        }
    }

    eliminarCompletados() {
        this.todos= this.todos.filter(todo => !todo.completado);
        this.guardarLocalStorage();
    }

    guardarLocalStorage() {
        localStorage.setItem('todo',JSON.stringify(this.todos));
    }

    cargarLocalStorage() {
       
        this.todos= (localStorage.getItem('todo')) ?  JSON.parse(localStorage.getItem('todo')) :[];
        this.todos=this.todos.map(obj => Todo.fromJSON(obj));
        console.log(this.todos);
       /* if (localStorage.getItem('todo')) {
         
         this.todos=JSON.parse(localStorage.getItem('todo'));
         console.log(this.todos);
        } else {
           
            this.todos=[];
        } */
    }
}