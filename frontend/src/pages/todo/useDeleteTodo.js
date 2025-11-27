import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteTodo } from "../../services/todos/todoServices"
import toast from "react-hot-toast"

const useDeleteTodo = () => {
    const queryClient = useQueryClient()
    const { mutateAsync } = useMutation({
        mutationFn: deleteTodo,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
    })
    const handleDeleteTodo = async (id) => {
        try {
            const data = await mutateAsync(id)
            console.log(data)
            toast.success("Deleted Successfully")
        } catch (error) {
            toast.error(error.res.data.error || "Delete Failed")
        }
    }
    return { handleDeleteTodo }
}

export default useDeleteTodo