import { PiNotePencil, PiListBold, PiPencilSimpleLine, PiTrash, PiSquaresFour } from "react-icons/pi";
import List from "./list/List";
import { useState } from "react";
import Card from "./card/Card";
import useListTodos from "./useListTodos";

const MainTodo = () => {
  const [showButtonList, setShowButtonList] = useState(null)
  const [viewTodo, setViewTodo] = useState("list")

  const { data, isPending } = useListTodos()

  return (
    <div className="flex flex-col items-center justify-center gap-5 w-full">
      <h2 className="text-4xl text-white text-center w-full font-bold">Todo List</h2>

      <div className="flex flex-col items-center justify-center gap-10 w-full">
        <div className="flex items-center justify-between w-full">
          <div className="bg-primary-500 cursor-pointer rounded-md flex items-center p-2 gap-3">
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
            <div className="flex flex-col gap-10 w-full">
              <div className="flex relative flex-col items-start w-full"
                onMouseEnter={() => setShowButtonList(1)}
                onMouseLeave={() => setShowButtonList(null)}
              >
                <List />

                {showButtonList === 1 &&
                  <div className="flex absolute -bottom-7 items-center justify-start gap-1 ml-1">
                    <div className="bg-gray-600/33 w-14 cursor-pointer py-1 flex items-center justify-center">
                      <PiPencilSimpleLine className="text-white text-xl" />
                    </div>
                    <div className="bg-gray-600/33 w-14 cursor-pointer py-1 flex items-center justify-center">
                      <PiTrash className="text-white text-xl" />
                    </div>
                  </div>
                }
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-5 w-full">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          )}
      </div>
    </div >
  )
}

export default MainTodo
