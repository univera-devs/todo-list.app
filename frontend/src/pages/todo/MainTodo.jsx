import { PiNotePencil, PiListBold, PiPencilSimpleLine, PiTrash, PiSquaresFour } from "react-icons/pi";
import List from "./list/List";
import { useState } from "react";
import Card from "./card/Card";
import useListTodos from "./useListTodos";
import MainCreate from "./create/MainCreate";
import useDeleteTodo from "./useDeleteTodo";

const MainTodo = () => {
  const [showButtonList, setShowButtonList] = useState(null)
  const [viewTodo, setViewTodo] = useState("list")
  const [showModal, setShowModal] = useState(false)
  const { data, isPending: isPendingList } = useListTodos()
  const { handleDeleteTodo, isPending } = useDeleteTodo()

  //Delete Todo
  const handleDelete = (id) => {
    handleDeleteTodo(id)
  }

  return (
    <div className="flex flex-col items-center justify-center gap-5 w-full">
      <h2 className="text-4xl text-white text-center w-full font-bold">Todo List</h2>

      <div className="flex flex-col items-center justify-center gap-10 w-full">
        <div className="flex items-center justify-between w-full">
          <div
            onClick={() => setShowModal(true)}
            className="bg-primary-500 cursor-pointer rounded-md flex items-center p-2 gap-3">
            <span className="text-white">Create</span>
            <PiNotePencil className="text-white text-xl" />
          </div>

          <div
            onClick={() => setViewTodo(viewTodo === "list" ? "box" : "list")}
            className="bg-primary-500 cursor-pointer rounded-md flex items-center p-2 ">
            {viewTodo === "list"
              ? <PiListBold className="text-white text-xl" />
              : <PiSquaresFour className="text-white text-xl" />
            }
          </div>
        </div>

        {viewTodo === "list"
          ? (
            <div className="flex flex-col gap-5 w-full">
              {data?.map((item) => (
                <div key={item?.id} className="flex relative flex-col items-start w-full"
                  onMouseEnter={() => setShowButtonList(item?.id)}
                  onMouseLeave={() => setShowButtonList(null)}
                >
                  <List item={item} />

                  {showButtonList === item?.id &&
                    <div className="flex absolute -bottom-7 items-center justify-start gap-1 ml-1">
                      <div className="bg-gray-600/33 w-14 cursor-pointer py-1 flex items-center justify-center">
                        <PiPencilSimpleLine className="text-white text-xl" />
                      </div>
                      <div className="bg-gray-600/33 w-14 cursor-pointer py-1 flex items-center justify-center">
                        <PiTrash
                          onClick={() => handleDelete(item?.id)}
                          className="text-white text-xl" />
                      </div>
                    </div>
                  }
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-5 w-full">
              {data?.map((item) => (
                <Card key={item?.id} item={item} handleDelete={handleDelete} />
              ))}
            </div>
          )}
      </div>
      {showModal &&
        <MainCreate setShowModal={setShowModal} />
      }
    </div >
  )
}

export default MainTodo
