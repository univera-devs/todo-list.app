import { useMutation } from "@tanstack/react-query"
import { deleteTodo } from "../../services/todos/todoServices"
import toast from "react-hot-toast"

const useDeleteTodo = () => {
    const { mutateAsync, isPending } = useMutation({
        mutationFn: deleteTodo
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
    return { handleDeleteTodo, isPending }
}

export default useDeleteTodo