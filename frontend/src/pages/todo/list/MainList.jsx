import { PiNotePencil, PiListBold } from "react-icons/pi";

const MainList = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 w-full">
      <h2 className="text-4xl text-white text-center w-full font-bold">Todo List</h2>

      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex items-center justify-between w-full">
          <div className="bg-primary-500 cursor-pointer rounded-md flex items-center p-2 gap-3">
            <span className="text-white">Create</span>
            <PiNotePencil className="text-white text-xl" />
          </div>

          <div className="bg-primary-500 cursor-pointer rounded-md flex items-center p-2 ">
            <PiListBold className="text-white text-xl" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainList