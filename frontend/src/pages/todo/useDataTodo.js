import { useQuery } from '@tanstack/react-query'
import { dataTodo } from '../../services/todos/todoServices'

const useDataTodo = (id) => {
    const { data, isPending } = useQuery({
        queryKey: ["todos", id],
        queryFn: () => dataTodo(id),
        enabled: !!id,
    })
    return { data, isPending }
}

export default useDataTodo