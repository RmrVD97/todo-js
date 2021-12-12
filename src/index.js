import {Todo,todolist} from '../class';
import { crearHTML } from './js/componentes';
import './styles.css';
//import {todolist} from '../class/todoList.class';
//import { Todo } from '../class';

//const tarea=new Todo('Aprender React');
export const listaTareas=new todolist();
listaTareas.todos.forEach(todo => crearHTML(todo));
//listaTareas.newTodo(tarea);
//tarea.completado=true;
//crearHTML(tarea);
//console.log(listaTareas);

