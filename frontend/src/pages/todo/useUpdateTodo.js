// useUpdateTodo.js
import { useMutation } from "@tanstack/react-query"
import { updateTodo } from "../../services/todos/todoServices"

const useUpdateTodo = () => {
    const { mutate, isPending } = useMutation({
        mutationFn: ({ id, data }) => updateTodo(id, data),
    });

    return {
        handleUpdateTodo: mutate,
        isPending,
    };
};


export default useUpdateTodo
