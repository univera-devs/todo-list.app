import { useQuery } from '@tanstack/react-query'
import { listTodos } from '../../services/todos/todoServices'

const useListTodos = () => {
    const { data, isPending } = useQuery({
        queryKey: ["todos"],
        queryFn: listTodos,
        initialData: [],
    });
    return { data, isPending }
}

export default useListTodos