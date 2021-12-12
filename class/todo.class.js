export class Todo {


    constructor(tarea) {
        this.tarea=tarea;
        this.id=new Date().getTime();
        this.completado=false;
        this.creacion=new Date();
    }

    static fromJSON({id,tarea,completado,creacion}) {
        const tempTodo=new Todo(tarea);
        tempTodo.id=id;
        tempTodo.completado=completado;
        tempTodo.creacion=creacion;

        return tempTodo;

    }
}