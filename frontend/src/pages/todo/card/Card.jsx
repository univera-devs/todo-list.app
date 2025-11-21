import { PiPencilSimpleLine, PiTrash } from "react-icons/pi"

const Card = ({ item }) => {

    return (
        <div className={`w-full flex flex-col items-start justify-between gap-6 p-4 rounded-t-2xl min-h-60 h-min-h-60 max-h-min-h-60 bg-primary-600/14 
        border-b-4 border-error-600`}>

            <div className="flex flex-col item-start gap-2">
                <span className="text-white text-lg font-bold flex items-center justify-start w-full">
                    {item?.title}
                </span>
                <p className="text-white text-sm">{item?.description} </p>
            </div>

            <div className="flex flex-col items-center justify-between w-full gap-5">
                {item?.category &&
                    <div className="flex items-center justify-start flex-wrap gap-2 w-full">
                        <div className="flex items-center justify-center px-2 py-1 border border-gray-600 rounded-md bg-gray-600/22">
                            <span className="text-white text-xs">{item?.category}
                            </span>
                        </div>
                    </div>
                }
                <div className="flex items-center justify-between w-full gap-2">
                    <div className="flex items-center justify-center gap-3 w-1/2">
                        <div className="bg-gray-600/33 w-[90%] py-1.5 rounded-md cursor-pointer flex items-center justify-center">
                            <PiPencilSimpleLine className="text-white text-xl" />
                        </div>
                        <div className="bg-gray-600/33 w-[90%] py-1.5 rounded-md cursor-pointer flex items-center justify-center">
                            <PiTrash className="text-white text-xl" />
                        </div>
                    </div>

                    <div className="border-l border-l-gray-600 w-2 h-8"></div>

                    <div className="flex items-center justify-center w-1/2">
                        <span className={`flex items-center justify-center w-[70%] py-1 rounded-md text-sm border
                            ${item?.status === "pending"
                                ? "border-gray-300 text-gray-300 bg-gray-300/13 "
                                : "border-success-500 text-success-500 bg-success-500/19"}
                             `}>
                            {item?.status}
                        </span>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Card