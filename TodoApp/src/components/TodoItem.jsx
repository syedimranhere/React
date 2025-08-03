import { useState } from "react";
import { UseTodoContext } from "../context/index"
// in aap.jsx we passed this todo as a value in prop so now we are destructuring it
function TodoItem({ todo }) {
    // here remaining properties have to be added
    const { toggleTodo, updateTodo, deleteTodo } = UseTodoContext();
    const [todoMsg, setTodoMsg] = useState(todo.todo); // Set initial value

    const [isTodoEditable, setIsTodoEditable] = useState(false);

    const EditTodo = () => {
        // update Todo takes Id and New ToDo
        updateTodo(todo.id, { ...todo, todo: todoMsg })
        // now as the work is Done we saved
        setIsTodoEditable(false);
    }

    const Toggle = () => {
        toggleTodo(todo.id)

    }
    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${todo.isCompleted ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
                }`}>
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.isCompleted}
                onChange={Toggle}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                    } ${todo.isCompleted ? "line-through bg-black" : ""}`}
                value={todo.todo}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}

                // if todo is completed == true then make it disabled
                disabled={todo.completed}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    // we cant save it
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        EditTodo()
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled = {todo.isCompleted}

            >
                {/* the folder sign is to saving the current Todo and pencil to like edit */}
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
