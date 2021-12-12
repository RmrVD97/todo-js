import { listaTareas } from "..";
import { Todo } from "../../class";

const todolistDiv=document.querySelector('.todo-list');
const txtInput=document.querySelector('.new-todo');
const btnBorrar=document.querySelector('.clear-completed');
const ulFil=document.querySelector('.filters');


export const crearHTML=(todo) => {
    const html= 
                   `<li class="${(todo.completado) ? 'completed' : ''}" data-id="${todo.id}">
						<div class="view">
							<input class="toggle" type="checkbox" ${(todo.completado) ? 'checked' :''}>
							<label>${todo.tarea}</label>
							<button class="destroy"></button>
						</div>
						<input class="edit" value="Create a TodoMVC template">
					</li> `;

    const div=document.createElement('div');
    div.innerHTML=html;
    todolistDiv.append(div.firstElementChild);
    return div.firstElementChild;

}

//Eventos
txtInput.addEventListener('keyup',(event) => {
   if (event.keyCode===13 && event.keyCode>0) {
       const nuevoTodo=new Todo(txtInput.value);
       listaTareas.newTodo(nuevoTodo);
       console.log(listaTareas);
       crearHTML(nuevoTodo);
       txtInput.value='';
   }

   
})

todolistDiv.addEventListener('click',(event) => {

    const nombreElemento=event.target.localName;
    const todoElemento=event.target.parentElement.parentElement;
    const todoid=todoElemento.getAttribute('data-id');
    //console.log(todoid);
    //console.log(nombreElemento);

    if (nombreElemento.includes('input')) {
        listaTareas.marcarCompletado(todoid);
        todoElemento.classList.toggle('completed');
    } else if (nombreElemento.includes('button')) {
        listaTareas.deleteTodo(todoid);
         todolistDiv.removeChild(todoElemento);
    }
})


btnBorrar.addEventListener('click', ()=> {
    
    listaTareas.eliminarCompletados();

    for (let i=todolistDiv.children.length-1;i>=0;i--) {

       /* const elemento=todolistDiv.children[i].getAttribute('class').valueOf();
        if (elemento==='completed') {
            todolistDiv.children[i].remove();
        } */

        const elemento=todolistDiv.children[i];
        if (elemento.classList.contains('completed')) {
            todolistDiv.removeChild(elemento);
        }
    }
})

ulFil.addEventListener('click', (event) => {

    const filtro=event.target.text;
    if (!filtro) {return;}

    for (const elemento of todolistDiv.children) {
        elemento.classList.remove('hidden');
        const completado=elemento.classList.contains('completed');

        switch(filtro) {
            case 'Pendientes':
                if (completado) {
                    elemento.classList.add('hidden');
                }
                    break;

            case 'Completados':
                if (!completado) {
                    elemento.classList.add('hidden');
                    }    
        }
    }
})