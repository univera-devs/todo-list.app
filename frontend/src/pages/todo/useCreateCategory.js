import toast from "react-hot-toast"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { createCategory, listCategory } from "../../services/todos/todoServices"

const useCategory = (formData) => {

    // GET
    const { data, isPending: isPendingGet } = useQuery({
        queryKey: ["category"],
        queryFn: listCategory
    })

    const queryClient = useQueryClient()
    // POST
    const { mutateAsync, isPending } = useMutation({
        mutationFn: createCategory,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] })
    })

    const handleCreateCategory = async () => {
        try {
            const data = mutateAsync(formData)
            console.log(data)
            toast.success("Create Category Successfully")

        } catch (error) {
            toast.error(error.massage)
        }
    }
    return { data, isPendingGet, handleCreateCategory, isPending }
}

export default useCategory