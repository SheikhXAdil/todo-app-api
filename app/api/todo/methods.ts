import { v4 as uuidv4 } from "uuid"


type todo = {
    id: string;
    name: string;
    isDone: boolean;
}

export let todos: todo[] = [{ id: uuidv4(), name: "", isDone: false }]

export const addTodo = (name: string) => {
    let newTodo: todo = {
        id: uuidv4(),
        name: name,
        isDone: false,
    };
    todos.push(newTodo);
    console.log(todos)
};

export const deleteTodo = (id: string) => {
    todos = todos.filter((obj) => {
        return obj.id !== id;
    });
    console.log(todos)
};

export const updateTodo = ({ id, isDone }: { id: string, isDone: boolean }) => {
    // only isDone can be updated
    let newTodos: todo[] = [];
    todos.map((obj) => {
        let newTodo = { ...obj };
        if (obj.id == id) {
            newTodo = {
                id,
                name: obj.name,
                isDone,
            };
        }
        newTodos.push(newTodo);
    });
    todos = newTodos;
    console.log(todos)
};