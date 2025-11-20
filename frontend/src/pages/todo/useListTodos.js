import { useQuery } from '@tanstack/react-query'
import { listTodos } from '../../services/todos/todoServices'

const useListTodos = () => {
    const { data, isPending } = useQuery({
        queryKey: ["products"],
        queryFn: listTodos
    });
    return { data, isPending }
}

export default useListTodos