import { createContext, useContext } from "react";

export const TodoContext = createContext({
    Todos:
        [{
            id: 1000,
            todo: "Write Pipelines",
            isCompleted: false
        }],

    addTodo: (todo) => {

    },

    deleteTodo: (id) => {

    },
    // we need actual todo here so that we can update
    updateTodo: (id, todo) => {

    },

    toggleTodo: (id) => {

    }

});
export const UseTodoContext = () => (useContext(TodoContext))
export const TodoContextProvider = TodoContext.Provider

