import { useMutation } from "@tanstack/react-query"
import { createTodo } from "../../services/todos/todoServices"
import toast from "react-hot-toast"

const useCreateTodo = (formData) => {
  
  const { mutateAsync, isPending } = useMutation({
    mutationFn: createTodo
  })

  const handleCreateTodo = async () => {
    try {
      const { message } = await mutateAsync(formData)
      const data = await mutateAsync(formData)
      console.log(data)
      toast.success(message);
    } catch (error) {
      toast.error(error.res.data.message || "Create Todo Failed")
    }
  }

  return { handleCreateTodo, isPending }
}

export default useCreateTodo