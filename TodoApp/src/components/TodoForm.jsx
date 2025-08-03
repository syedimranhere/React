import { useState } from "react";
import { UseTodoContext } from "../context/index"

const TodoForm = () => {
    // this is just 1 todo ( text ofc )
    const [todo, setTodo] = useState("");
    const { addTodo } = UseTodoContext();
    const add = (e) => {
        // add todo takes a new todo so first we can create object

        e.preventDefault();
        const NewTodo = {
            id: Date.now(),
            todo,
            isCompleted: false
        }
        addTodo(NewTodo)
        setTodo("");
    }
    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
};

export default TodoForm;