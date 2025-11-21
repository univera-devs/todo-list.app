
const List = ({ item }) => {
    return (
        <div className={`flex items-center justify-between border-l-4 border-error-600 rounded-r-full w-full bg-primary-600/14 py-2 px-5`}>
            <div className="flex flex-col items-start gap-2 w-[60%]">
                <span className="font-bold text-white"> {item?.title}</span>
                <p className="text-sm text-white">{item?.description}</p>
                {item?.category &&
                    <div className="flex items-center justify-start gap-2 w-full">
                        <div className="flex items-center justify-center px-2 py-1 border border-gray-600 rounded-md bg-gray-600/22">
                            <span className="text-white text-xs">
                                {item?.category}
                            </span>
                        </div>
                    </div>
                }
            </div>
            <span className={`flex items-center justify-center px-4 py-1 rounded-md text-sm border
                ${item?.status === "pending"
                    ? "border-gray-300 text-gray-300 bg-gray-300/13 "
                    : "border-success-500 text-success-500 bg-success-500/19"}
                `}>
                {item?.status}  
            </span>
        </div>
    )
}

export default List