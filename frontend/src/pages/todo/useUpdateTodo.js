
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateTodo } from "../../services/todos/todoServices"

const useUpdateTodo = () => {
    const queryClient = useQueryClient()
    const { mutate, isPending } = useMutation({
        mutationFn: ({ id, data }) => updateTodo(id, data),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
    });

    return { handleUpdateTodo: mutate, isPending };
};


export default useUpdateTodo
