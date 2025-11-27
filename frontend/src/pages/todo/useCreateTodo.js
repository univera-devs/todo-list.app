import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createTodo } from "../../services/todos/todoServices"
import toast from "react-hot-toast"

const useCreateTodo = (formData) => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: createTodo,
    onSettled : () => queryClient.invalidateQueries(["todos"])
  })

  const handleCreateTodo = async () => {
    try {
      const data = await mutateAsync(formData)
      console.log(data)
      toast.success("Create Todo Successfully");
    } catch (error) {
      toast.error(error.message || "Create Todo Failed")
    }
  }

  return { handleCreateTodo, isPending }
}

export default useCreateTodo