import { PiNotePencil, PiListBold, PiPencilSimpleLine, PiTrash } from "react-icons/pi";
import List from "./List";
import { useState } from "react";

const MainList = () => {
  const [showButtonList, setShowButtonList] = useState(null)
  return (
    <div className="flex flex-col items-center justify-center gap-5 w-full">
      <h2 className="text-4xl text-white text-center w-full font-bold">Todo List</h2>

      <div className="flex flex-col items-center justify-center gap-10 w-full">
        <div className="flex items-center justify-between w-full">
          <div className="bg-primary-500 cursor-pointer rounded-md flex items-center p-2 gap-3">
            <span className="text-white">Create</span>
            <PiNotePencil className="text-white text-xl" />
          </div>

          <div className="bg-primary-500 cursor-pointer rounded-md flex items-center p-2 ">
            <PiListBold className="text-white text-xl" />
          </div>
        </div>
        <div className="flex flex-col gap-10 w-full">

          {/* {data,map(()) */}
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
          {/* } */}
        </div>
      </div>
    </div>
  )
}

export default MainList